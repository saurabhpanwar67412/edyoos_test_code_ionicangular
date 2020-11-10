import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  SecurityContext,
  NgZone,
  Inject,
  HostListener,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/shared/places.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Mode } from 'src/app/landing/main/main.component.metadata';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/shared/search.service';
import { SEARCH_FORM_METADATA, SortMethodEnum } from './search-page.metadata';
import { MapsAPILoader } from '@agm/core';
import { SearchBaseComponent } from './search-base.component';
import { ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { IPlace } from 'src/app/shared/place';
import sort from 'fast-sort';
import { SearchRequest } from 'src/app/model/search/search_request.model';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { CartService } from 'src/app/shared/cart.service';
import { PricingType, PricingTypeText } from 'src/app/shared/enum/pricing_type_enum';
import { AvailableSpotsRequest } from 'src/app/model/Booking/available_spots.model';
import { CommonService } from 'src/app/shared/common.service ';
import { AvailableSpotsComponent } from 'src/app/available-spots/available-spots.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsPageComponent } from 'src/app/details/details-page/details-page.component';
import { Cart } from 'src/app/model/cart/cart.model';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery/dist/jquery.min.js';
class DeleteAllCart {
  CartID: string[] = [];
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent extends SearchBaseComponent
  implements OnInit, AfterViewInit {
  pricingType = PricingTypeText;
  isHidden = false;
  imageurl: string;
  fromDate;
  toDate;
  dateForm: FormGroup;
  config = {
    format: 'YYYY-MM-DD hh:mm:ss A',
    minutesInterval: 15,
    // hours24Format: 'HH',
    min: moment(),
    weekDayFormat: 'dd',
  }; httpError: any;
  isLoggedIn: boolean;
  fontposition:number=0;
  fromMinDate = moment();
  fromDateError;
  duration;
  now;
  // isFromDateFromatted;
  // isToDateFromatted;
  isDateRangeValid: boolean = true;
  formInit = true;
  // lat;
  // lng;
  searchForm: FormGroup;
  SEARCH_FORM_METADATA = SEARCH_FORM_METADATA;
  SortMethodEnum = SortMethodEnum;
  Mode = Mode;
  modePlaceholder;
  displayLength;
  @ViewChild('checkIn')
  public checkIn;
  @ViewChild('checkOut')
  public checkOut;
  data = {};
  places: IPlace[];
  userLocationMarkerAnimation:string;
  displayedPlaces: any[] = [];
  selectedMode;
  sortMethod;
  placesLoaded;
  hideExtra;
  placesCount;
  firstCalltoDateListeners;
  isCallerFromDateChangeListner;
  isCallerToDateChangeListner;
  fromDisplayDate;
  toDisplayDate;
  @ViewChild('searchBar')
  public searchElementRef: ElementRef;
  ordersCount: number = 0;
  cartTopStyle = '-1503px';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private placesService: PlacesService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    protected mapsAPILoader: MapsAPILoader,
    private searchService: SearchService,
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    public commonService: CommonService,
    public dialog: MatDialog
  ) {
    super(mapsAPILoader);
    this.createForms();

    // this.config = {
    //   format: 'YYYY-MM-DD hh:mm:ss A',
    //   minutesInterval: 15,
    //   // hours24Format: 'HH',
    //   min: moment(),
    //   weekDayFormat: 'dd',
    // };
  }


  cartPropertyGroup: any[];

  total: number;

  ngOnInit(): void {
    // $('[data-toggle="tooltip"]').tooltip();
    this.cartPropertyGroup = this.placesService.cartPropertyGroup;
    // this.imageurl = environment.apiURL.replace('api', 'images/Amenieties');
    this.imageurl = environment.blobURL + '/' + environment.blobAmenitiesContainer;
    if (this.authenticationService.isAuthorized()) {
      this.getCartDetails();
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
      this.calculateTotal();
    }

    this.authenticationService.user.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    });

    this.getDataFromQueryParams();

    this.ordersCount = this.placesService.cartPropertyGroup.length;

    this.placesService.addedCartPropertyGroup.subscribe((value: any[]) => {
      this.ordersCount = value.length;
      this.cartPropertyGroup = value;
      this.calculateTotal();
    });

  }

  calculateTotal() {
    this.total = 0;
    this.cartPropertyGroup.forEach((place) => {
      this.total += parseFloat(place.calculatedAmount);
    });
  }

  signOut() {

    this.authenticationService.logout();
  }

  ngAfterViewInit() {

    this.initializeAutoComplete();

    // setTimeout(() => {
    //   this.checkIn.inputElementValue = '';
    //   this.checkOut.inputElementValue = '';

    // }, 100);
  }
  searchAddress: any = {};

  assignAddress(formatedAddress: any) {

    // this.searchAddress = formatedAddress;
    // let searchAddress: string;

    // if (formatedAddress.street_number) {
    //   searchAddress = formatedAddress.street_number;
    // }
    // if (formatedAddress.locality) {
    //   searchAddress = searchAddress + "," + formatedAddress.locality;
    // }
    // if (formatedAddress.administrative_area_level_1) {
    //   searchAddress = searchAddress + "," + formatedAddress.administrative_area_level_1;
    // }
    // if (formatedAddress.country) {
    //   searchAddress = searchAddress + "," + formatedAddress.country;
    // }

    // this.searchForm
    //   .get(SEARCH_FORM_METADATA.searchBar)
    //   .patchValue(searchAddress);

    // this.search();
  }

  getDataFromQueryParams() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('lat') && params.get('lng')) {
        this.currentLocation = {
          lat: parseFloat(params.get('lat')),
          lng: parseFloat(params.get('lng')),
        };
      }


      if (params.get('mode')) {

        this.selectedMode = params.get('mode');
        if (this.selectedMode == Mode.Boat || this.selectedMode == Mode.Seaplane) {
          this.displayLength = true;
          if (params.get('vehiclelength')) {
            this.searchAddress.vehiclelength = params.get('vehiclelength');

          }
          this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).setValue(this.searchAddress.vehiclelength);
          this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).setValidators(Validators.required);
          this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).updateValueAndValidity();

        }
      } else {
        this.selectedMode = Mode.City_Parking;
      }
      this.searchForm
        .get(SEARCH_FORM_METADATA.mode)
        .patchValue(this.selectedMode);

      let searchAddress: string;

      if (params.get('street')) {
        this.searchAddress.street_number = params.get('street');
        // searchAddress = params.get('street');
      }
      if (params.get('locality')) {
        this.searchAddress.locality = params.get('locality');
        // searchAddress = searchAddress ? searchAddress + ',' + params.get('locality') : params.get('locality');
      }

      if (params.get('search')) {
        searchAddress = params.get('search');
        // searchAddress = searchAddress + ',' + params.get('search');
      }




      this.searchForm
        .get(SEARCH_FORM_METADATA.searchBar)
        .patchValue(searchAddress);

      // this.changeSearchMode(this.selectedMode);

      if (params.get('length')) {
        this.searchForm
          .get(SEARCH_FORM_METADATA.vehicleLength)
          .patchValue(params.get('length'));
      }

      this.search();

    })

    // this.route.queryParams.subscribe((params) => {
    //   if (params['lat'] && params['lng']) {
    //     this.currentLocation = {
    //       lat: parseFloat(params['lat']),
    //       lng: parseFloat(params['lng']),
    //     };
    //   }
    //   if (params['mode']) {
    //     this.selectedMode = params['mode'];
    //   } else {
    //     this.selectedMode = Mode.Auto;
    //   }
    //   this.searchForm
    //     .get(SEARCH_FORM_METADATA.mode)
    //     .patchValue(this.selectedMode);

    //   let searchAddress: string;

    //   if (params['street']) {
    //     this.searchAddress.street_number=params['street'];
    //     searchAddress = params['street'];
    //   }
    //   if (params['locality']) {
    //     this.searchAddress.locality=params['locality'];
    //     searchAddress = searchAddress + ',' + params['locality'];
    //   }

    //   if (params['search']) {
    //     searchAddress = searchAddress + ',' + params['search'];
    //   }


    //   this.searchForm
    //   .get(SEARCH_FORM_METADATA.searchBar)
    //   .patchValue(searchAddress);

    //   // this.changeSearchMode(this.selectedMode);

    //   if (params['length']) {
    //     this.searchForm
    //       .get(SEARCH_FORM_METADATA.vehicleLength)
    //       .patchValue(params['length']);
    //   }

    //   this.search();

    // });
  }

  createForms() {
    let now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let m = (Math.round(minutes / 15) * 15) % 60;
    let h = minutes > 52 ? (hours === 23 ? 0 : ++hours) : hours;
    let quarterIntervalDate = new Date().setHours(h);
    quarterIntervalDate = new Date(quarterIntervalDate).setMinutes(m);
    quarterIntervalDate = new Date(quarterIntervalDate).setSeconds(0);
    // debugger;
    this.now = moment(quarterIntervalDate);
    let compare = new Date(this.now).setMinutes(new Date(this.now).getMinutes() - 15);
    if (moment(compare).isSameOrBefore(new Date())) {
      this.now = new Date(this.now).setMinutes(new Date(this.now).getMinutes() + 15);
    }
    const toDate = moment(this.now).add(1, 'h');

    this.searchForm = this.formBuilder.group({
      [SEARCH_FORM_METADATA.searchBar]: ['', [Validators.required]],
      [SEARCH_FORM_METADATA.vehicleLength]: [''],
      [SEARCH_FORM_METADATA.mode]: [Mode.City_Parking],
    });
    this.dateForm = this.formBuilder.group({
      [SEARCH_FORM_METADATA.fromDate]: [moment(this.now)],
      [SEARCH_FORM_METADATA.toDate]: [toDate],
      [SEARCH_FORM_METADATA.sort]: ['']
    });

  }

  fromDateChange(date) {

    // this.fromDisplayDate = date;
    const toDateControl = this.dateForm.get(SEARCH_FORM_METADATA.toDate);
    const fromDateControl = this.dateForm.get(SEARCH_FORM_METADATA.fromDate);
    // this.isDateRangeValid = true;
    if (
      date &&
      toDateControl.value &&
      moment(date).isSameOrAfter(toDateControl.value)
    ) {

      this.isDateRangeValid = false;
      // isSameOrBefore
      // this.isCallerFromDateChangeListner = true;
      // this.dateForm.get(SEARCH_FORM_METADATA.toDate).patchValue(date);
    }
    else {
      this.isDateRangeValid = true;
    }

    //  else if (moment(date).isSame(toDateControl.value)) {
    //     this.isDateRangeValid = false;
    //   }

    // check on caller to prevent circular loop
    // if (!this.isCallerToDateChangeListner) {
    //   this.filterPlacesByDate();
    // }
    // this.isCallerToDateChangeListner = false;
  }

  toDateChange(date) {
    // debugger;
    // this.toDisplayDate = date;
    const toDateControl = this.dateForm.get(SEARCH_FORM_METADATA.toDate);
    const fromDateControl = this.dateForm.get(SEARCH_FORM_METADATA.fromDate);
    // this.isDateRangeValid = true;
    if (
      date &&
      fromDateControl.value &&
      moment(date).isSameOrBefore(fromDateControl.value)
    ) {
      this.isDateRangeValid = false;
      // this.isCallerToDateChangeListner = true;
      // this.dateForm.get(SEARCH_FORM_METADATA.fromDate).patchValue(date);
      // this.checkIn.inputElementValue = '';
    }
    else {
      this.isDateRangeValid = true;
    }

    // if (moment(date).isSame(fromDateControl.value)) {
    //   this.isDateRangeValid = false;
    // }

    // check on caller to prevent circular loop
    // if (!this.isCallerFromDateChangeListner) {
    //   this.filterPlacesByDate();
    // }
    // this.isCallerFromDateChangeListner = false;

  }



  initializeAutoComplete() {

    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();

      // if (!this.currentLocation) {
      //   this.getCurrentPosition();
      // } else {
      //   this.getAddress(this.currentLocation);
      // }

      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.currentLocation = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };

          this.searchAddress = {};

          for (var i = 0; i < place.address_components.length; i++) {

            var addressType = place.address_components[i].types[0];
            if (this.componentForm[addressType]) {
              var val = place.address_components[i][this.componentForm[addressType]];

              if (addressType == 'street_number' || addressType == 'route') {
                this.searchAddress.street_number = this.searchAddress.street_number ? this.searchAddress.street_number + ' ' + val :
                  val;
              }

              else if (addressType == 'locality') {
                // address.locality=address+','+val;
                this.searchAddress.locality = val;
              }
              else if (addressType == 'administrative_area_level_1') {
                // address=address+','+val;
                this.searchAddress.administrative_area_level_1 = val;
              }

              else if (addressType == 'country') {
                // address.country=address+','+val;
                this.searchAddress.country = val;
              }
            }
          }


          if (this.searchForm.valid) {
            this.search();
          }

        });
      });
    });
  }

  toggleDisplay() {
    this.isHidden = !this.isHidden;
  }


  openCartDetails() {

    if (this.cartTopStyle == '53px') {
      this.cartTopStyle = '-1503px'
    }
    else {
      this.cartTopStyle = '53px';
    }
  }

  getCartDetails() {

    this.cartService.getCartDetails().subscribe((response) => {
      this.placesService.cartPropertyGroup = response.data;
      console.log(response.data);

      localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));
      this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
      this.hideAddCartBtn = false;
      // this.calculateTotal();
    }, (error) => {
      this.hideAddCartBtn = false;
      console.log(error);
    })
  }

  changeSearchMode(mode) {
    if (mode == Mode.Boat || mode == Mode.Seaplane) {
      this.displayLength = true;
      this.modePlaceholder = mode;

      this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).setValidators(Validators.required);
      this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).updateValueAndValidity();

    } else {
      this.displayLength = false;

      this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).clearValidators();
      this.searchForm.get(SEARCH_FORM_METADATA.vehicleLength).updateValueAndValidity();
    }
    this.selectedMode = mode;

    if (this.searchForm.valid) {
      this.search();
    }

  }

  getCartAvailableSpots(index = 0) {

    // this.placesService.cartPropertyGroup.forEach((place,index)=>{
    let place = this.placesService.cartPropertyGroup[index];

    let fromDate = new Date(place.searchFromDateTime);
    let toDate = new Date(place.searchToDateTime);

    let availableSpotsRequest = new AvailableSpotsRequest();
    availableSpotsRequest.PropertyGroupID = place.propertyGroupID;
    availableSpotsRequest.FromDate = fromDate;
    availableSpotsRequest.ToDate = toDate;
    availableSpotsRequest.FromTime = moment(fromDate).format("hh:mm:ss A");
    availableSpotsRequest.ToTime = moment(toDate).format("hh:mm:ss A");

    this.checkForAvaliableSpots(availableSpotsRequest, index);
    // })

  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AvailableSpotsComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        if (this.authenticationService.isAuthorized()) {
          let notAvailableSpots = this.placesService.cartPropertyGroup.filter(s => s.isSpotAvaliable == false);
          this.deleteCartDetails(notAvailableSpots);
        }
        else {
          var availableSpots = this.placesService.cartPropertyGroup.filter(s => s.isSpotAvaliable == true);
          this.placesService.cartPropertyGroup = availableSpots;

          localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));
          this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);

          this.router.navigate(['/cart']);
        }


      }
    });
  }

  public getWidth() {
    if (window.screen.width > 1400) {
      return '500px';
    }
    if (window.screen.width < 991) {
      return '80%';
    }

    return 'auto';
  }
  public getPosition(): any {
    if (window.screen.width > 1400) {
      return { top: '150px' };
    }
    return { top: '50px' };
  }
  deleteCartDetails(placeList: any[]) {
    let deleteAllCart = new DeleteAllCart();
    placeList.forEach((value, index) => {
      deleteAllCart.CartID.push(value.cartID);

    });

    this.cartService.deleteAllCart(deleteAllCart).
      subscribe((response) => {

        var availableSpots = this.placesService.cartPropertyGroup.filter(s => s.isSpotAvaliable == true);
        this.placesService.cartPropertyGroup = availableSpots;

        localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));
        this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);

        this.router.navigate(['/cart']);

      }, (error) => {
        this.httpError = error;

      })

  }



  checkForAvaliableSpots(availableSpotsRequest, index) {

    this.placesService.CheckForAvaliableSpots(availableSpotsRequest)
      .subscribe((response) => {
        if (response.data.isSpotAvaliable) {
          this.placesService.cartPropertyGroup[index].isSpotAvaliable = true;
          // this.placesService.cartPropertyGroup[index].isSpotAvaliable = false;
        }
        else {
          this.placesService.cartPropertyGroup[index].isSpotAvaliable = false;
        }

        index = index + 1;
        if (this.placesService.cartPropertyGroup.length > index) {
          this.getCartAvailableSpots(index);
        }
        else {
          var notAvailableSpots = this.placesService.cartPropertyGroup.filter(s => s.isSpotAvaliable == false);
          if (notAvailableSpots.length > 0) {
            this.openDialog();
          }
          else {
            // this.router.navigate(['/cart', { spot: JSON.stringify(availableSpotsRequest) }]);
            this.router.navigate(['/cart']);
          }

        }

      }, (error) => {
        console.log(error);

        // this.commonService.openSnackBar(error, null);
      });

  }

  hideAddCartBtn: boolean = false;
  addToCart(place) {

    if (this.placesService.cartPropertyGroup.length <= 4) {

      this.hideAddCartBtn = true;
      let fromDate = this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value;
      let toDate = this.dateForm.get(SEARCH_FORM_METADATA.toDate).value;

      if (this.authenticationService.isAuthorized()) {

        let cart: Cart[] = [];

        let cartDetails = new Cart();
        cartDetails.PropertyGroupID = place.propertyGroupID;
        cartDetails.FromDate = fromDate;
        cartDetails.ToDate = toDate;
        cartDetails.Amount = place.calculatedAmount
        cart.push(cartDetails);

        this.cartService.addCart(cart).subscribe((response) => {
          this.getCartDetails();
        }, (error) => {
          this.hideAddCartBtn = false;
          console.log(error);
        });

      }
      else {

        this.placesService.cartPropertyGroup.push(place);
        localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));
        this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
        this.hideAddCartBtn = false;
      }

    }
    else {
      this.commonService.openSnackBar('Maximum 5 orders can be added to the cart bag', null);
    }

  }

  @ViewChild("cartDivElement") cartDivElement: ElementRef;
  @ViewChild("bagIconElement") bagIconElement: ElementRef;
  @ViewChild("deleteIconElement") deleteIconElement: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.cartDivElement.nativeElement.contains(event.target)) {
      this.cartTopStyle == '53px'
    }
    else if (this.bagIconElement.nativeElement.contains(event.target)) {

    }
    else if (this.deleteIconElement && this.deleteIconElement.nativeElement.contains(event.target)) {

    }
    else {
      this.cartTopStyle = '-1503px';

    }
  }


 initMap(lat,lon,displayedPlaces,propertyGroupID:string): void {
   
  var map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 14,
      center: new google.maps.LatLng(lat, lon),
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    }
  );
  var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < displayedPlaces.length; i++) {  
      let z=0;
      if(lat===displayedPlaces[i]["latitude"] && lon===displayedPlaces[i]["longitude"])
      {
        z=1;
      }
      else
      {
        
      }
      var propertyGroupIDs=displayedPlaces[i]["propertyGroupID"];
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(displayedPlaces[i]["latitude"], displayedPlaces[i]["longitude"]),
        map: map,
        label:'$'+displayedPlaces[i]?.pricingAmount,
        animation:z==0?google.maps.Animation.DROP:google.maps.Animation.BOUNCE,
        title:displayedPlaces[i]["propertyname"]
      });
  //   var self = this;
  //   google.maps.event.addListener(marker,'click',function (marker, i) {
  //     return function() {
  //        self.clickedMarker(displayedPlaces[i]["propertyGroupID"],0);
  //     }
  //  });
   var self = this;
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          self.clickedMarker(displayedPlaces[i]["propertyGroupID"],0);
          infowindow.setContent(displayedPlaces[i]["propertyname"]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
 
}


  onMapReady(map) {
    map.setOptions({
      zoomControl: 'true',
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    });
  }
  getAvailableSpots(place) {

    let fromDate = this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value;
    let toDate = this.dateForm.get(SEARCH_FORM_METADATA.toDate).value;

    let availableSpotsRequest = new AvailableSpotsRequest();
    availableSpotsRequest.PropertyGroupID = place.propertyGroupID;
    availableSpotsRequest.FromDate = fromDate;
    availableSpotsRequest.ToDate = toDate;
    availableSpotsRequest.FromTime = moment(fromDate).format("hh:mm:ss A");
    availableSpotsRequest.ToTime = moment(toDate).format("hh:mm:ss A");

    this.placesService.CheckForAvaliableSpots(availableSpotsRequest)
      .subscribe((response) => {

        if (response.data.isSpotAvaliable) {

          this.placesService.cartPropertyGroup = [];

          this.placesService.cartPropertyGroup.push(place);

          localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

          this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);

          // this.router.navigate(['/cart', { reservenow: true, spot: JSON.stringify(availableSpotsRequest) }]);
          this.router.navigate(['/cart', { reservenow: true }]);

        }
        else {
          this.commonService.openSnackBar("Spot is not available.", null);
        }
      }, (error) => {
        this.commonService.openSnackBar(error, null);
      })
  }


  sort(sortMethod) {
    this.sortMethod = sortMethod;
    if (sortMethod == SortMethodEnum.cheapest) {
      this.displayedPlaces = sort(this.displayedPlaces).asc([(u) => u.calculatedAmount]);
    } else if (sortMethod == SortMethodEnum.closest) {
      this.displayedPlaces = sort(this.displayedPlaces).asc([
        (u) => u.distance,
      ]);
    }
    this.changeDetectorRef.detectChanges();
  }


 clickedMarker(label:string, index: number) {
    
    console.log(`clicked the marker: ${label || index}`);
    $('.scrollingevt').scrollTop(0);
    $('.bordorclass').removeClass('bordorclass');
    $('#showallclick').click();
    window.setTimeout(() => {
      $('.scrollingevt').scrollTop((($('#'+label).offset().top)-120));
      $('#'+label).click();
      $('#'+label).addClass('bordorclass');
     
     
    }, 1000);
  }


  hideDeleteIcon: boolean = false;
  deletePlace(index: number) {

    this.hideDeleteIcon = true;
    if (this.authenticationService.isAuthorized()) {
      this.cartService.deleteCart(this.placesService.cartPropertyGroup[index].cartID).
        subscribe((response) => {

          this.placesService.cartPropertyGroup.splice(index, 1);

          localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

          this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
          this.hideDeleteIcon = false;

        }, (error) => {
          this.hideDeleteIcon = false;
          console.log(error);

        })
    }
    else {
      this.placesService.cartPropertyGroup.splice(index, 1);

      localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

      this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
      this.hideDeleteIcon = false;
    }

  }

  searchBtnDisabled: boolean = false;
  search() {
    this.searchBtnDisabled = true;
    this.sortMethod = null;
    const vehicleLength = this.searchForm.get(
      SEARCH_FORM_METADATA.vehicleLength
    ).value;
    if (this.currentLocation.lng && this.currentLocation.lat) {

      this.httpError = null;

      let fromDate = this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value;
      let toDate = this.dateForm.get(SEARCH_FORM_METADATA.toDate).value;

      let searchRequest = new SearchRequest();
      let searchFilter = <string>this.searchForm
        .get(SEARCH_FORM_METADATA.searchBar)
        .value;

      // searchFilter = searchFilter?.split(',')[0];

      if (this.searchAddress.street_number) {
        searchRequest.SearchFilterStreet = this.searchAddress.street_number;
      }
      if (this.searchAddress.locality) {
        searchRequest.SearchFilterCity = this.searchAddress.locality;
      }

      searchRequest.Latitude = +this.currentLocation.lat;
      searchRequest.Longititude = +this.currentLocation.lng;
      searchRequest.FromDate = fromDate;
      searchRequest.ToDate = toDate;
      searchRequest.FromTime = moment(searchRequest.FromDate).format("hh:mm:ss A");
      searchRequest.ToTime = moment(searchRequest.ToDate).format("hh:mm:ss A");
      searchRequest.VehicleLength=Number(vehicleLength);

      this.searchService.fromDate = this.dateForm.get(
        SEARCH_FORM_METADATA.fromDate
      ).value;
      this.searchService.toDate = this.dateForm.get(
        SEARCH_FORM_METADATA.toDate
      ).value;
      this.displayedPlaces = [];
      this.hideExtra = false;

      if (this.selectedMode == Mode.City_Parking) {

        this.placesService.getSearchResultForAuto(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);
          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });

      }
      else if (this.selectedMode == Mode.Boat) {
        this.placesService.GetSearchResultforBoats(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);

          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });
      }
      else if (this.selectedMode == Mode.Helicopter) {
        this.placesService.GetSearchResultforHelicopter(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);
          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });
      }
      else if (this.selectedMode == Mode.Seaplane) {

        this.placesService.GetSearchResultforSeaPlanes(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);
          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });
      }
      else if (this.selectedMode == Mode.Airport_Parking) {

        this.placesService.GetSearchResultforAirPort(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);
          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });
      }

      else if (this.selectedMode == Mode.Semi_Truck) {

        this.placesService.GetSearchResultforSemiTruck(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);
          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });
      }
      else if (this.selectedMode == Mode.Truck_And_Trailer) {

        this.placesService.GetSearchResultforTruckAndTrailer(searchRequest)
          .subscribe((response) => {
            this.setplaces(response);
          }, (error) => {
            this.displayedPlaces = [];
            this.places = [];
            this.httpError = error;
            this.searchBtnDisabled = false;
          });
      }


    }
  }

  setplaces(response) {
    this.searchBtnDisabled = false;
    this.places = response.data;
    console.log(response.data);

    this.places.sort(function (a, b) {
      return a.distance - b.distance;
    });
    
    this.displayedPlaces = this.places.filter(s => s.distance < 25);
    if (this.places.length >= 20) {
      this.displayedPlaces = this.places.slice(0, 20);
      this.hideExtra = true;
      this.placesCount = this.places.length - this.displayedPlaces.length;
    }
    else if(this.displayedPlaces.length==0){
      this.displayedPlaces=this.places;
    }
    else if (this.places.length > this.displayedPlaces.length) {
      this.placesCount = this.places.length - this.displayedPlaces.length;
      this.hideExtra = true;
    }
    else {
      this.hideExtra = false;
    }

    this.placesLoaded = true;
    this.changeDetectorRef.detectChanges();

  }

  showAllPlaces() {
    this.hideExtra = false;
    this.displayedPlaces = this.places;
    this.changeDetectorRef.detectChanges();
  }

  // goToPlace1(propertyGroupID){
  //   const options = {
  //     title: 'Updated',
  //     message: 'Vehicle Details Updated Successfully!',
  //     confirmText: 'OK'
  //   };
  //   // this.dialogref.open(options);
  //   const dialogRef = this.dialog.open(DetailsPageComponent, {
  //     width: '100%'
  //   });
  // }

  goToPlace(place) {
    // debugger

    // let fromDate = this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value;
    // let toDate = this.dateForm.get(SEARCH_FORM_METADATA.toDate).value;

    // let detailsRequest: any = {};
    // let searchFilter = <string>this.searchForm
    //   .get(SEARCH_FORM_METADATA.searchBar)
    //   .value;

    // if (this.searchAddress.street_number) {
    //   detailsRequest.searchfilterstreet = this.searchAddress.street_number;
    // }
    // if (this.searchAddress.locality) {
    //   detailsRequest.searchfiltercity = this.searchAddress.locality;
    // }
    // if (this.searchAddress.vehiclelength) {
    //   detailsRequest.vehiclelength = this.searchAddress.vehiclelength;
    // }

    // detailsRequest.latitude = +this.currentLocation.lat;
    // detailsRequest.longititude = +this.currentLocation.lng;
    // detailsRequest.fromdate = moment(fromDate).format("YYYY-MM-DD HH:mm:ss");
    // detailsRequest.todate = moment(toDate).format("YYYY-MM-DD HH:mm:ss");

    // detailsRequest.parkingcategory = this.selectedMode;
    // detailsRequest.propertyGroupID = propertyGroupID;
    // detailsRequest.id = propertyGroupID;


    const dialogRef = this.dialog.open(DetailsPageComponent, {
      autoFocus: false,
      maxWidth: '500px',
      width: this.getWidth(),
      data: place,
      position: this.getPosition(),
    });

    // this.router.navigateByUrl(`/details/${propertyGroupID}`);

    // // Use id instead of index as this array is being filtered
    // this.searchService.fromDate = this.dateForm.get(
    //   SEARCH_FORM_METADATA.fromDate
    // ).value;
    // this.searchService.toDate = this.dateForm.get(
    //   SEARCH_FORM_METADATA.toDate
    // ).value;
    // this.searchService.selectedPlace = this.places.find((place) => {
    //   return place.id === id;
    // });
    // let name = encodeURI(this.searchService.selectedPlace.name)
    //   .replace('(', '%28')
    //   .replace('!', '%21')
    //   .replace("'", '%27')
    //   .replace('*', '%2A')
    //   .replace('~', '%7E');
    // this.ngZone.run(() => {
    //   this.router.navigateByUrl(
    //     `/details/${this.searchService.selectedPlace.id}/${name}`
    //   );
    // });
  }

  filterPlacesByDate() {
    if (this.places) {
      this.displayedPlaces = this.places.filter((place) => {
        // console.log('place.fromDate', moment(place.fromDate));
        // console.log('place.toDate', moment(place.toDate));
        // console.log('dateForm.fromDate', moment(this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value));
        // console.log('dateForm.toDate', moment(this.dateForm.get(SEARCH_FORM_METADATA.toDate).value));
        // console.log('from comparison', moment(place.fromDate).isBefore(moment(this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value)));
        // console.log('to comparison', moment(place.toDate).isAfter(moment(this.dateForm.get(SEARCH_FORM_METADATA.toDate).value)));
        if (
          moment(place.fromDate).isBefore(
            moment(this.dateForm.get(SEARCH_FORM_METADATA.fromDate).value)
          ) &&
          moment(place.toDate).isAfter(
            moment(this.dateForm.get(SEARCH_FORM_METADATA.toDate).value)
          )
        ) {
          return place;
        }
      });
      if (this.hideExtra) {
        this.displayedPlaces = this.displayedPlaces.slice(0, 10);
      }
      // console.log('places filtered');
    }
  }

  // scroll() {
  //   jQuery(window).scroll(function () { fheight = jQuery('footer').height() + 50; if (jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - fheight) { angularcallbackfunction() } });
  // }

}

