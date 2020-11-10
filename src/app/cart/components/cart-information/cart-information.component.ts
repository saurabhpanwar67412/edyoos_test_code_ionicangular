import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CartStepperComponent } from '../cart-stepper/cart-stepper.component';
import { NgWizardService } from 'ng-wizard';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { UserService } from 'src/app/shared/user.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogin } from 'src/app/model/login/login.model';
import { LoginService } from 'src/app/shared/authentication/login/login.service';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { ApiResponse } from 'src/app/model/apiresponse.model';
import { User } from 'src/app/model/login/user.model';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { CartService } from 'src/app/shared/cart.service';
import { PlacesService } from 'src/app/shared/places.service';
import { Cart } from 'src/app/model/cart/cart.model';
import { AvailableSpotsRequest } from 'src/app/model/Booking/available_spots.model';
import { CART_INFORMATION_METADATA } from './cart_information_metadata';
import { FeeType } from 'src/app/shared/enum/feetype.enum';

@Component({
  selector: 'app-cart-information',
  templateUrl: './cart-information.component.html',
  styleUrls: ['./cart-information.component.scss'],
})
export class CartInformationComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  loginForm: FormGroup;
  CART_INFORMATION_METADATA = CART_INFORMATION_METADATA;

  googleProviderUrl: string = `${environment.apiURL}/Account/ExternalLogin?provider=google&returnUrl=${window.location.origin}`;
  httpError: any;
  config = {
    format: 'YYYY-MM-DD hh:mm:ss a',
    minutesInterval: 15,
    min: moment(),
    weekDayFormat: 'dd',
  };
  fromMinDate = moment();
  public changeDate = false;
  public fromDate;
  public toDate;
  constructor(

    private cookieService: CookieService,
    private fb: FormBuilder, public router: Router,
    private loginService: LoginService, private authenticationService: AuthenticationService,
    private cartService: CartService,
    private placesService: PlacesService,
    private route: ActivatedRoute
  ) { }

  reserveNow: boolean = false;
  public isGuestUser = false;
  public isGuestUserClicked = false;
  public guestUserEmail: string;
  userName: string;
  public spotDetails: AvailableSpotsRequest;
  bookedPlaces: any[];
  total = 0;

  ngOnInit(): void {
    this.init();
  }
  init() {

    this.bookedPlaces = this.placesService.cartPropertyGroup;
    this.bookedPlaces.forEach((o) => {
      // o.checkoutAmount=o.calculatedAmount;
      o.changeDateClick = false;
      o.isDateRangeValid = true;
      o.changeSearchFromDateTime = moment(o.searchFromDateTime);
      o.changesearchToDateTime = moment(o.searchToDateTime);

      o.searchFromDateTime = moment(o.searchFromDateTime);
      o.searchToDateTime = moment(o.searchToDateTime);
      o.isSpotAvaliable = true;

    });

    this.calculateTotal();
    // this.createForm();
    this.route.paramMap.subscribe((params) => {

      if (params.get('reservenow')) {
        this.reserveNow = true;
      }
      if (params.get('spot')) {
        const spot = params.get('spot') ? JSON.parse(params.get('spot').toString().toLowerCase()) :
          new AvailableSpotsRequest();
        this.spotDetails = new AvailableSpotsRequest();
        this.spotDetails.FromDate = new Date(spot.fromdate);
        this.spotDetails.ToDate = new Date(spot.todate);
        this.reserveNow = true;

      }
    });

    let email = atob(this.cookieService.get('secure_data1'));
    let password = atob(this.cookieService.get('secure_data2'));
    let rememberMe: boolean = false;

    if (email && password) {
      rememberMe = true;
    }
    this.loginForm = this.fb.group({
      email: [email, [Validators.required,
      // Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$")
      Validators.email
      ]],
      password: [null, [Validators.required, Validators.email]],
      rememberMe: [rememberMe]


    });

    this.loginForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.loginForm);
    })
    if (this.authenticationService.userValue) {
      this.isGuestUser = true;
      this.guestUserEmail = this.authenticationService.userValue.email;
      this.userName = this.authenticationService.userValue.username.replace('_', ' ');
    }


    // debugger;s
    this.fromDate = moment(this.spotDetails?.FromDate);
    this.toDate = moment(this.spotDetails?.ToDate);
  }
  public setDate(date: string): any {
    let now = new Date(date);
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let m = (Math.round(minutes / 15) * 15) % 60;
    let h = minutes > 52 ? (hours === 23 ? 0 : ++hours) : hours;
    let quarterIntervalDate = new Date().setHours(h);
    quarterIntervalDate = new Date(quarterIntervalDate).setMinutes(m);
    quarterIntervalDate = new Date(quarterIntervalDate).setSeconds(0);
    return quarterIntervalDate;
  }
  onChangeDateClick() {
    this.changeDate = true;
  }
  onChangeDateClickCancel() {
    this.changeDate = false;
  }

  calculateTotal() {
    this.total = 0;
    this.bookedPlaces.forEach((place) => {


    });

  }

  feeAmountCalculate(extraFees: any[], groupCheckOutAmount: number) {
    let extraAmount: number = 0;
    let additionalFeeCount: number = 0;
    if (extraFees) {
      extraFees.forEach((value, index) => {
        additionalFeeCount += 1;
        if (value.feeType == FeeType.Percent) {
          extraAmount += groupCheckOutAmount * (value.feeAmount / 100);
        }
        else if (value.feeType == FeeType.Dollor) {
          extraAmount += value.feeAmount;
        }

      });
    }


    return { extraAmount: extraAmount, additionalFeeCount: additionalFeeCount };
  }


  // createForm() {
  //   this.loginForm = this.formBuilder.group({
  //     [CART_INFORMATION_METADATA.email]: ['', [Validators.required, Validators.email]],
  //     [CART_INFORMATION_METADATA.password]: ['', Validators.required],
  //   });
  // }

  nextStep() {
    this.guestUserEmail = this.loginForm.get('email').value;
    this.isGuestUser = true;
    this.isGuestUserClicked = true;
    this.next.emit({ formType: 'guest', email: this.guestUserEmail, guestBtnClick: true });
  }

  // login() {
  //   const userLogin = {
  //     email: this.loginForm.get(CART_INFORMATION_METADATA.email).value,
  //     password: this.loginForm.get(CART_INFORMATION_METADATA.password).value,
  //   };
  //   this.userService.userLogin(userLogin).subscribe((response) => {
  //     localStorage.setItem('userData', JSON.stringify(response));
  //     this.userService.userStatusChanged.next(true);
  //     this.next.emit('user');
  //   });
  // }


  public get getPasswordControl() {
    return this.loginForm.get('password');
  }

  formErrors = {
    email: '',
    password: '',
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    email: {
      required: 'Email is required!',
      email: 'Enter a valid email address!'
    },
    password: {
      required: 'Password is required!'

    }
  };


  logValidationErrors(group: FormGroup = this.loginForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';

      if (abstractControl && !abstractControl.valid) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  showSwal(title) {
    swal({
      title: title,
      // text: text,
      buttonsStyling: false,
      confirmButtonClass: "btn btn-fill btn-success",
      // type: "success"

    }).then((result) => {
      if (result.value) {
        this.router.navigate(['pages/changepassword', this.loginForm.get('email').value]);
      }
      else {
        this.router.navigate(['pages/changepassword', this.loginForm.get('email').value]);
      }
    });

  }
  loginError: string;
  loginButtonClicked: boolean = false;
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.logValidationErrors(this.loginForm)

    }
    else {
      this.loginButtonClicked = true;
      this.loginError = null;
      let userLogin = new UserLogin();
      userLogin.Email = this.loginForm.get('email').value;
      userLogin.Password = this.loginForm.get('password').value;

      this.loginService.userLogin(userLogin).subscribe((response: ApiResponse<User>) => {
        if (response.data) {

          let rememberMe: boolean = this.loginForm.get('rememberMe').value;
          if (rememberMe) {
            this.cookieService.set('secure_data1', btoa(userLogin.Email));
            this.cookieService.set('secure_data2', btoa(userLogin.Password));
          }
          else {
            this.cookieService.delete('secure_data1');
            this.cookieService.delete('secure_data2');
          }
          this.authenticationService.setUserValue(response.data);
          // this.getCartDetails();
          this.guestUserEmail = userLogin.Email;
          // this.bookedPlaces = this.placesService.cartPropertyGroup;
          this.isGuestUser = true;
          if (!this.reserveNow) {

            let cart: Cart[] = [];

            if (this.placesService.cartPropertyGroup) {

              this.placesService.cartPropertyGroup.forEach((val, index) => {
                let cartDetails = new Cart();
                cartDetails.PropertyGroupID = val.propertyGroupID;
                cartDetails.FromDate = val.fromDate;
                cartDetails.ToDate = val.toDate;
                cartDetails.Amount = val.pricingAmount;
                cart.push(cartDetails);
              });

            }

            this.cartService.addCart(cart).subscribe((response) => {

              this.getCartDetails();

            }, (error) => {
              console.log(error);

            });

          }
          else {
            this.next.emit({ formType: 'user', email: this.guestUserEmail });
          }

        }

        this.userName = this.authenticationService.userValue.username.replace('_', ' ');

      },

        (error) => {
          if (error == 'Password has expired') {
            this.showSwal(error);
          }
          this.loginButtonClicked = false;
          this.loginError = error;
        })
    }
  }

  getCartDetails() {

    this.cartService.getCartDetails().subscribe((response) => {
      this.placesService.cartPropertyGroup = response.data;

      this.placesService.cartPropertyGroup.forEach((place, index) => {

        this.placesService.cartPropertyGroup[index].checkoutAmount = this.placesService.cartPropertyGroup[index].calculatedAmount;
      });

      localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));
      this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
      this.bookedPlaces = this.placesService.cartPropertyGroup;

      this.bookedPlaces.forEach((o) => {
        o.changeDateClick = false;
        o.changeSearchFromDateTime = moment(o.searchFromDateTime);
        o.changesearchToDateTime = moment(o.searchToDateTime);

        o.searchFromDateTime = moment(o.searchFromDateTime);
        o.searchToDateTime = moment(o.searchToDateTime);
        o.isSpotAvaliable = true;
      });

      this.next.emit({ formType: 'user', email: this.guestUserEmail });

    }, (error) => {
      console.log(error);

    })
  }
  public changeDateClick(place) {

    place.changeDateClick = true;

  }
  public changeDateCancelClick(place) {
    place.changeDateClick = false;
    place.changeSearchFromDateTime = place.searchFromDateTime;
    place.changesearchToDateTime = place.searchToDateTime;
  }

  // isDateRangeValid: boolean[] = [];

  fromDateChange(place) {
    let date = place.changeSearchFromDateTime;
    let toDate = place.changesearchToDateTime;
    if (
      date &&
      toDate &&
      moment(date).isSameOrAfter(toDate)
    ) {

      place.isDateRangeValid = false;
    }
    else {
      place.isDateRangeValid = true;
    }

  }

  toDateChange(place) {
    let date = place.changesearchToDateTime;
    let fromDate = place.changeSearchFromDateTime;
    if (
      date &&
      fromDate &&
      moment(date).isSameOrBefore(fromDate)
    ) {
      place.isDateRangeValid = false;

    }
    else {
      place.isDateRangeValid = true;
    }

  }

  // isDateRangeValid: boolean = true;
  // showSubmitButton() {
  //   let found = this.bookedPlaces.some(s => s.isDateRangeValid == false);
  //   if (found) {
  //     this.isDateRangeValid = false;
  //   }
  //   else {
  //     this.isDateRangeValid = true;
  //   }
  // }

  public changeDateApply(place, index) {

    place.searchFromDateTime = moment(place.changeSearchFromDateTime);
    place.searchToDateTime = moment(place.changesearchToDateTime);

    let fromDate = new Date(place.searchFromDateTime);
    let toDate = new Date(place.searchToDateTime);

    if (!moment(place.searchFromDateTime).isSameOrBefore(new Date())) {
      place.showDateError = false;
    }

    let availableSpotsRequest = new AvailableSpotsRequest();
    availableSpotsRequest.PropertyGroupID = place.propertyGroupID;
    availableSpotsRequest.FromDate = fromDate;
    availableSpotsRequest.ToDate = toDate;
    availableSpotsRequest.FromTime = moment(fromDate).format("hh:mm:ss A");
    availableSpotsRequest.ToTime = moment(toDate).format("hh:mm:ss A");
    availableSpotsRequest.PropertyGroupAmount = place.pricingAmount;
    availableSpotsRequest.PriceCode = place.pricingCode;

    this.placesService.SpotAvalibilityCheckonCheckOut(availableSpotsRequest)
      .subscribe((response) => {

        this.bookedPlaces[index].isSpotAvaliable = response.data.isSpotAvaliable;
        this.bookedPlaces[index].calculatedAmount = response.data.propertyGroupAmount;

        if (this.bookedPlaces[index].discountedPrice) {
          let discount =
            this.bookedPlaces[index].calculatedAmount * (this.bookedPlaces[index].discountedPrice / 100);
          this.bookedPlaces[index].checkoutAmount = this.bookedPlaces[index].calculatedAmount - discount;
        }
        else {
          this.bookedPlaces[index].checkoutAmount = this.bookedPlaces[index].calculatedAmount;
        }

        this.placesService.cartPropertyGroup = this.bookedPlaces;
        this.placesService.addedCartPropertyGroup.next(this.bookedPlaces);

      }, (error) => {
        this.httpError = error;

      });

  }
  hideRemoveCartItemBtn: Boolean = false;
  public removecartItem(index) {
    this.hideRemoveCartItemBtn = true;
    if (this.authenticationService.isAuthorized()) {
      this.cartService.deleteCart(this.placesService.cartPropertyGroup[index].cartID).
        subscribe((response) => {

          this.placesService.cartPropertyGroup.splice(index, 1);
          localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

          this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);

          this.bookedPlaces = this.placesService.cartPropertyGroup;
          this.calculateTotal();
          this.hideRemoveCartItemBtn = false;

        }, (error) => {
          this.hideRemoveCartItemBtn = false;
          console.log(error);
        })
    }
    else {
      this.placesService.cartPropertyGroup.splice(index, 1);

      localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

      this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
      this.bookedPlaces = this.placesService.cartPropertyGroup;
      this.calculateTotal();
      this.hideRemoveCartItemBtn = false;
    }

  }
}
