import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CART_CHECKOUT_METADATA } from './cart_checkout_metadata';
import { PlacesService } from 'src/app/shared/places.service';
import { UserService } from 'src/app/shared/user.service';
import { PaymentService } from 'src/app/shared/payment.service';
import { BookingRequest, TrackPropertyGroup, PaymentRequestModel, VechicleRequestModel } from 'src/app/model/cart/booking_request.model';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { PaymentStatus } from 'src/app/shared/enum/payment_status';
import { PaymentMode } from 'src/app/shared/enum/payment_mode';
import { CartService } from 'src/app/shared/cart.service';
import { ChargeCustomer } from 'src/app/model/payment/charge_customer.model';
import { AttachPaymentRequest } from 'src/app/model/payment/attach_payment_request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableSpotsRequest } from 'src/app/model/Booking/available_spots.model';
import { ShareModalComponent } from 'src/app/details/share-modal/share-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCartComponent } from '../add-cart/add-cart.component';
import { MatDialog } from '@angular/material/dialog';
import { AvailableSpotsComponent } from 'src/app/available-spots/available-spots.component';
import { LoaderService } from 'src/app/shared/loader.service';
import { PromocodeService } from 'src/app/shared/promocode.service';
import { PromocodeRequest } from 'src/app/model/cart/promocode_request.model';
import { PromocodeEnum } from 'src/app/shared/enum/prmocode_enum';
import * as moment from 'moment';
import { DateValidationComponent } from '../../date-validation-dialog/date-validation.component';
import { FeeType } from 'src/app/shared/enum/feetype.enum';


declare var Stripe: stripe.StripeStatic;


@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss'],
})
export class CartCheckoutComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Input() pageTitle;
  @Input() guestBtnClick = false;
  @Input() guestUserEmail;
  httpError: any;
  httperror: any;

  @Input()
  set formType(formType: string) {
    if (formType === 'guest') {
      this.loggedIn = false;
      this.createGuestForm();
      this.addVehicleInfo();
      setTimeout(() => {
        this.addStripeElement();
      }, 100);

    }
    else if (formType === 'user') {
      // this.loggedIn = true;
      this.pageTitle = "Checkout";
      this.getVehicleDetails();
      this.createUserForm();
    }
  }
  paymentForm: FormGroup;
  panelOpenState: boolean;
  CART_CHECKOUT_METADATA = CART_CHECKOUT_METADATA;
  vehicleInfoInvaild;
  showAddVehicleInfo: boolean = false;
  cards: any[] = [];
  promoToggler = false;
  vehicledetails: any[] = [];
  hasCards;
  loggedIn;
  isAddNewCard = false;
  public isPaymentChange = false;
  public isValidCreditCard: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private placesService: PlacesService,
    private userService: UserService,
    private paymentService: PaymentService,
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private router: Router,
    private loaderService: LoaderService,
    private promocodeService: PromocodeService
  ) {

    if (this.placesService.cartPropertyGroup.length == 0) {
      this.router.navigate(['/landing']);
    }

  }

  createGuestForm() {
    this.paymentForm = this.formBuilder.group({
      [CART_CHECKOUT_METADATA.cardName]: ['', Validators.required],
      [CART_CHECKOUT_METADATA.phone]: ['', [Validators.pattern("^[1234567890][0-9]{9}$")]],
      [CART_CHECKOUT_METADATA.email]: ['', Validators.required],
      // [CART_CHECKOUT_METADATA.vehicleInfo]: this.formBuilder.group({
      //   [CART_CHECKOUT_METADATA.licenseNumber]: ['', [Validators.required, Validators.maxLength(50)]],
      //   [CART_CHECKOUT_METADATA.vehicleMake]: ['', [Validators.required, Validators.maxLength(100)]],
      //   [CART_CHECKOUT_METADATA.vehicleModel]: ['', [Validators.required, Validators.maxLength(50)]],
      //   [CART_CHECKOUT_METADATA.vehicleColor]: ['', Validators.required]
      // }),
      [CART_CHECKOUT_METADATA.vehicleId]: ['', Validators.required]
    });
    this.hasCards = false;
  }

  createUserForm() {
    this.isValidCreditCard = true;
    this.paymentForm = this.formBuilder.group({
      [CART_CHECKOUT_METADATA.cardName]: [''],
      // [CART_CHECKOUT_METADATA.vehicleInfo]: this.formBuilder.group({
      //   [CART_CHECKOUT_METADATA.licenseNumber]: ['', [Validators.required, Validators.maxLength(50)]],
      //   [CART_CHECKOUT_METADATA.vehicleMake]: ['', [Validators.required, Validators.maxLength(100)]],
      //   [CART_CHECKOUT_METADATA.vehicleModel]: ['', [Validators.required, Validators.maxLength(50)]],
      //   [CART_CHECKOUT_METADATA.vehicleColor]: ['', Validators.required]

      // }),
      [CART_CHECKOUT_METADATA.vehicleId]: ['', Validators.required]
      // [CART_CHECKOUT_METADATA.email]: ['', [Validators.required, Validators.email]]
    });

    this.GetPaymentMethodsById();
  }

  AddNewCardInstead() {
    this.paymentForm.get(CART_CHECKOUT_METADATA.cardName).setValidators(Validators.required);
    this.paymentForm.updateValueAndValidity();
    // this.paymentForm.addControl(CART_CHECKOUT_METADATA.cardName, new FormControl('', Validators.required));

    this.paymentForm.removeControl(CART_CHECKOUT_METADATA.card);
    this.hasCards = false;
    this.addStripeElement();
    this.isAddNewCard = true;
    //this.modalService.open(AddCartComponent, { centered: true });
  }
  addCardCancel() {
    this.paymentForm.get(CART_CHECKOUT_METADATA.cardName).setValidators(Validators.required);
    this.paymentForm.updateValueAndValidity();
    this.paymentForm.addControl(CART_CHECKOUT_METADATA.card, new FormControl('', Validators.required));
    this.hasCards = true;
    this.addStripeElement();
    this.isAddNewCard = false;
  }

  addVehicleInfo() {

    this.paymentForm.addControl(CART_CHECKOUT_METADATA.vehicleInfo, this.createVehicleForms());
    this.paymentForm.get(CART_CHECKOUT_METADATA.vehicleId).clearValidators();
    this.paymentForm.get(CART_CHECKOUT_METADATA.vehicleId).updateValueAndValidity();
    this.showAddVehicleInfo = true;

  }

  createVehicleForms() {
    return this.formBuilder.group({
      [CART_CHECKOUT_METADATA.licenseNumber]: ['', [Validators.required, Validators.maxLength(50)]],
      [CART_CHECKOUT_METADATA.vehicleMake]: ['', [Validators.required, Validators.maxLength(100)]],
      [CART_CHECKOUT_METADATA.vehicleModel]: ['', [Validators.required, Validators.maxLength(50)]],
      [CART_CHECKOUT_METADATA.vehicleColor]: ['', Validators.required]
    });
  }

  cancelAddVehicle() {
    this.paymentForm.removeControl(CART_CHECKOUT_METADATA.vehicleInfo);
    this.paymentForm.get(CART_CHECKOUT_METADATA.vehicleId).setValue(null);

    this.showAddVehicleInfo = false;
    this.setDefaultFlagChecked = false;
  }


  getVehicleDetails() {

    this.userService.getVehicleDetails(this.authenticationService.userValue.id).subscribe((response) => {
      if (response.data != null && response.data.length > 0) {
        this.vehicledetails = response.data;
        let vehicle = this.vehicledetails.find(s => s.isDefault == true);
        if (vehicle) {
          this.paymentForm.get(CART_CHECKOUT_METADATA.vehicleId).setValue(vehicle.id);
        }

      }
      else {
        this.addVehicleInfo();
      }
      this.loggedIn = true;
    },
      (error) => {
        this.httperror = error;
      }
    );
  }

  // onCheckChange(event) {
  //   console.log(event);
  //   this.willAddlater = event.target.checked;
  //   if (this.willAddlater) {
  //     this.paymentForm.removeControl(CART_CHECKOUT_METADATA.vehicleInfo);

  //   } else {

  //     this.paymentForm.addControl(CART_CHECKOUT_METADATA.vehicleInfo, new FormGroup({
  //       [CART_CHECKOUT_METADATA.licenseNumber]: new FormControl('', Validators.required),
  //       [CART_CHECKOUT_METADATA.vehicleMake]: new FormControl('', Validators.required),
  //       [CART_CHECKOUT_METADATA.vehicleModel]: new FormControl('', Validators.required),
  //     }));
  //   }
  /* if (!this.willAddlater) {
     Object.keys(
       (<FormGroup>(this.paymentForm.controls[CART_CHECKOUT_METADATA.vehicleInfo])).controls)
       .forEach((key) => {
         (<FormGroup>(this.paymentForm.controls[CART_CHECKOUT_METADATA.vehicleInfo])).controls[key]
           .setValidators([Validators.required]);
         (<FormGroup>(this.paymentForm.controls[CART_CHECKOUT_METADATA.vehicleInfo])).controls[key].updateValueAndValidity();
       });
   } else {
     Object.keys(
       (<FormGroup>(this.paymentForm.controls[CART_CHECKOUT_METADATA.vehicleInfo])).controls)
       .forEach((key) => {
         (<FormGroup>(this.paymentForm.controls[CART_CHECKOUT_METADATA.vehicleInfo])).controls[key].clearValidators();
         (<FormGroup>(this.paymentForm.controls[CART_CHECKOUT_METADATA.vehicleInfo])).controls[key].updateValueAndValidity();
       });
   } */

  // }
  onPaymentTypeChange() {
    this.isPaymentChange = true;
  }

  openDateValidationDialog() {
    const dialogRef = this.dialog.open(DateValidationComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  checkOutBtnClicked: boolean = false;

  checkout() {

    var notAvailableSpots = this.placesService.cartPropertyGroup.filter(s => s.isSpotAvaliable == false);

    if (notAvailableSpots.length > 0) {
      this.openDialog();
    }
    else if (this.placesService.cartPropertyGroup.some(s => moment(s.searchFromDateTime).isSameOrBefore(new Date()))) {

      this.openDateValidationDialog();
    }
    else {
      this.chargeCustomer();
    }

  }



  backToUser() {

    this.next.emit({ formType: undefined, previous: true });
  }

  chargeCustomer() {
    this.checkOutBtnClicked = true;
    this.loaderService.isLoading.next(true);

    if (this.hasCards) {

      let chargeCustomer = new ChargeCustomer();
      chargeCustomer.PaymentMethodId = this.paymentForm.get(CART_CHECKOUT_METADATA.card).value;
      let customerId = this.cards.find(s => s.id == chargeCustomer.PaymentMethodId).customerId;
      chargeCustomer.CustomerId = customerId,
        chargeCustomer.Amount = this.getTotalAmount();

      this.chargeCustomerByPaymentId(chargeCustomer);
    }
    else {
      this.createPaymentIntent();
    }
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(AvailableSpotsComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.chargeCustomer();
      }
    });
  }




  //strip

  @Input() amount: number;
  @Input() description: string;


  stripe;
  card;
  exp;
  cvc;
  cardErrors;

  loading = false;
  confirmation;
  ngOnInit(): void {
    this.init();
    this.getPublishableKey();

    if (this.authenticationService.isAuthorized()) {
      this.getVehicleDetails();
    }


    // this.placesService.addedCartPropertyGroup.subscribe((value: any[]) => {
    //   this.init();
    // });
  }
  disCountApplied: boolean = false;

  init() {

    if (this.authenticationService.userValue) {
      this.loggedIn = true;
      this.formType = this.loggedIn ? 'user' : 'guest';
    }

    this.placesService.cartPropertyGroup.forEach((place, index) => {

      this.placesService.cartPropertyGroup[index].checkoutAmount = this.placesService.cartPropertyGroup[index].calculatedAmount;
    });


    this.placesService.addedCartPropertyGroup.subscribe((propertyGroup) => {

      let details = propertyGroup.filter(s => s.discountedPrice > 0);

      if (details.length == 0) {
        this.disCountApplied = false;
      }
    });

  }

  getPublishableKey() {
    this.paymentService.getPublishableKey()
      .subscribe((response) => {
        this.stripe = Stripe(response.data.publishableKey);
        // this.addStripeElement();
      });


  }

  @ViewChild('cardElement') cardElement: ElementRef;
  isValidCard: boolean = true;

  // @ViewChild('cardCVC') cardCvc: ElementRef;
  // @ViewChild('cardExp') cardExp: ElementRef;



  addStripeElement() {
    const elements = this.stripe.elements();

    this.card = elements.create('card', {
      classes: {
        base: "form-control"
      }
    });

    // this.cvc = elements.create('cardCvc', {
    //   classes: {
    //     base: "form-control"
    //   }
    // });

    // this.exp = elements.create('cardExpiry', {
    //   classes: {
    //     base: "form-control"
    //   }
    // });

    this.card.mount(this.cardElement.nativeElement);

    // this.cvc.mount(this.cardCvc.nativeElement);

    // this.exp.mount(this.cardExp.nativeElement);

    this.card.addEventListener('change', (event) => {
      this.isValidCard = !event.complete;
      this.isValidCreditCard = event.complete;
      this.cardErrors = event.error ? event.error.message : null;
    });

  }



  paymentDetails: any[];
  cardToken: string;
  clientSecret: string;

  GetPaymentMethodsById() {
    this.paymentService.GetPaymentMethodsById()
      .subscribe((response) => {
        this.cards = response.data;
        console.log(this.cards);

        if (this.cards.length > 0) {
          this.paymentForm.addControl(CART_CHECKOUT_METADATA.card, new FormControl('', Validators.required));
          this.paymentForm.patchValue({
            [CART_CHECKOUT_METADATA.card]: this.cards[0].id
          });
          console.log(this.paymentForm.value);
          this.hasCards = true;
          this.isValidCard = false;
        }
        else {
          this.paymentForm.get(CART_CHECKOUT_METADATA.cardName).setValidators(Validators.required);
          this.paymentForm.updateValueAndValidity();
          this.addStripeElement();
          // this.paymentForm.addControl(CART_CHECKOUT_METADATA.cardName, new FormControl('', Validators.required));
          this.hasCards = false;
        }

      }, (error) => {
        this.hasCards = false;
      });
  }

  chargeCustomerByPaymentId(chargeCustomer: ChargeCustomer) {
    this.paymentService.chargeCustomerByPaymentId(chargeCustomer)
      .subscribe((response) => {
        console.log(response.data);
        this.handleServerResponse(response.data);
      }, (error) => {
        this.checkOutBtnClicked = false;
        console.log(error);
        this.httpError = error;
      });
  }

  handleServerResponse(responseJson) {

    if (responseJson.requiresAction) {
      // Use Stripe.js to handle required card action
      this.stripe.handleCardAction(
        responseJson.clientSecret
      ).then((result) => {
        if (result.error) {
          // Show `result.error.message` in payment form
        }
        else {

          let chargeCustomer = new ChargeCustomer();
          chargeCustomer.PaymentIntentId = result.paymentIntent.id;
          this.chargeCustomerByPaymentId(chargeCustomer);

        }
      });
    } else {

      console.log(responseJson);

      this.orderComplete(responseJson, responseJson.customer);

    }
  }


  cancelPromoCode() {

    this.placesService.cartPropertyGroup.forEach((place, index) => {

      this.placesService.cartPropertyGroup[index].checkoutAmount =
        this.placesService.cartPropertyGroup[index].calculatedAmount;
      this.placesService.cartPropertyGroup[index].discountedPrice = null;
    });

    this.promoCodeDiscountPercentage = 0;
    this.placesService.promocodeDiscountPercentage.next(0);
    this.disCountApplied = false;
    this.promoCodeId = 0;
    this.promoCodeType = 0;
    this.promoCode = null;

    this.getTotalAmount();
  }

  getTotalAmount(): number {

    let total = 0;
    this.placesService.cartPropertyGroup.forEach((place) => {
      total += parseFloat(place.checkoutAmount);
    });

    if (this.promoCodeDiscountPercentage != 0) {

      this.promoCodeDiscountAmount = total * (this.promoCodeDiscountPercentage / 100);
      total = total - this.promoCodeDiscountAmount;
    }

    let totalFeeAmount: number = 0;
    this.placesService.cartPropertyGroup.forEach((place) => {
      if (place.fees) {
        totalFeeAmount += this.feeAmountCalculate(place.fees, place.checkoutAmount);
      }
    });

    total += totalFeeAmount;
    console.log(total);
    return total;

  }

  feeAmountCalculate(extraFees: any[], groupCheckOutAmount: number) {
    let extraAmount: number = 0;
    extraFees.forEach((value, index) => {
      if (value.feeType == FeeType.Percent) {
        extraAmount += groupCheckOutAmount * (value.feeAmount / 100);
      }
      else if (value.feeType == FeeType.Dollor) {
        extraAmount += value.feeAmount;
      }

    });

    return extraAmount;
  }

  public email: string;
  createPaymentIntent() {
    if (this.authenticationService.isAuthorized()) {
      this.email = this.authenticationService.userValue.email;
    }
    else {
      this.email = this.paymentForm.get(CART_CHECKOUT_METADATA.email).value;
    }

    let purchase = {
      TotalAmount: this.getTotalAmount(),
      Email: this.email
    };

    this.paymentService.createPaymentIntent(purchase).subscribe((response) => {

      this.payWithCard(this.stripe, this.card, response.data.clientSecret, response.data.customerId);

    }, (error) => {
      this.checkOutBtnClicked = false;
      console.log(error);
      this.httpError = error;
    });


  }


  payWithCard(stripe, card, clientSecret, customerId) {

    let cardName = this.paymentForm.get(CART_CHECKOUT_METADATA.cardName).value;

    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: cardName
          },
        },

      })
      .then((result) => {
        if (result && result.error) {
          // Show error to your customer
          console.log(result.error);
          this.cardErrors = result.error;

        } else {
          // The payment succeeded!
          if (this.authenticationService.isAuthorized()) {
            this.saveCardDetails(result.paymentIntent.payment_method);
          }
          this.orderComplete(result.paymentIntent, customerId);
        }
      }).catch(err => {
        console.log(err);
        this.httpError = err;
        this.checkOutBtnClicked = false;
      }
      );
  }

  saveCardDetails(paymentMethodId) {
    let userDetails = this.authenticationService.userValue;

    let attachPaymentRequest = new AttachPaymentRequest();
    attachPaymentRequest.UserName = userDetails.username;
    attachPaymentRequest.PaymentId = paymentMethodId;
    attachPaymentRequest.Email = userDetails.email;

    this.paymentService.saveCardDetails(attachPaymentRequest)
      .subscribe((response) => {

      }, (error) => {
        console.log(error);
        this.httpError = error;
        this.checkOutBtnClicked = false;
      });
  }

  setDefaultFlagChecked = false;
  setDefault() {

    this.setDefaultFlagChecked = !this.setDefaultFlagChecked;

  }

  promoCodeDiscountPercentage: number = 0;
  promoCodeDiscountAmount: number;
  inValidPromoCodeMessage: string;
  promoCodeId: number;
  promoCodeType: number;
  promoCode: string;

  getPromoCodeDiscountPercent(promocode: string) {

    this.inValidPromoCodeMessage = null;
    // this.promoCode = promocode;
    this.promocodeService.getPromoCodeDiscountPercent(promocode).subscribe((response) => {
      console.log(response.data);

      if (PromocodeEnum.Edyoos == response.data.promoCodeType || PromocodeEnum.FirstTimeUser == response.data.promoCodeType) {

        this.placesService.cartPropertyGroup.forEach((value, index) => {

          this.placesService.cartPropertyGroup[index].checkoutAmount =
            this.placesService.cartPropertyGroup[index].calculatedAmount * (<number>response.data.discountedPrice / 100);
          this.placesService.cartPropertyGroup[index].checkoutAmount = this.placesService.cartPropertyGroup[index].calculatedAmount -
            this.placesService.cartPropertyGroup[index].checkoutAmount;
          this.placesService.cartPropertyGroup[index].discountedPrice = <number>response.data.discountedPrice;
        });
        this.placesService.promocodeDiscountPercentage.next(0);
        this.promoCodeDiscountPercentage = 0;
        this.disCountApplied = true;
        this.promoCodeId = response.data.promoCodeID;
        this.promoCodeType = response.data.promoCodeType;
        this.promoCode = promocode;
        // this.placesService.promocodeDiscountPercentage.next(<number>response.data.discountedPrice);
        // this.promoCodeDiscountPercentage = <number>response.data.discountedPrice;
        // this.getTotalAmount();

      }
      else if (
        PromocodeEnum.Company == response.data.promoCodeType || PromocodeEnum.Others == response.data.promoCodeType) {
        if (this.checkPromocodeIsThere(response.data.propertyGroupID, (<number>response.data.discountedPrice))) {
          this.placesService.promocodeDiscountPercentage.next(0);
          this.promoCodeDiscountPercentage = 0;
          this.disCountApplied = true;
          this.promoCodeId = response.data.promoCodeID;
          this.promoCodeType = response.data.promoCodeType;
          this.promoCode = promocode;
        }

        else {
          this.inValidPromoCodeMessage = 'Please provide valid promocode';
        }
      }
      else {
        this.inValidPromoCodeMessage = 'Please provide valid promocode';
      }


    }, (error) => {
      this.inValidPromoCodeMessage = error;
    });
  }

  checkPromocodeIsThere(propertyGroupID: string, discountedPrice: number): boolean {
    let arrayPropertyGroupId = propertyGroupID.split(',');
    let ischeck = false;
    this.placesService.cartPropertyGroup.forEach((value, index) => {

      let found = arrayPropertyGroupId.some(id => id == (<string>value.propertyGroupID));
      if (found && !ischeck) {
        ischeck = true;
        this.placesService.cartPropertyGroup[index].checkoutAmount =
          this.placesService.cartPropertyGroup[index].calculatedAmount * (discountedPrice / 100);
        this.placesService.cartPropertyGroup[index].checkoutAmount = this.placesService.cartPropertyGroup[index].calculatedAmount -
          this.placesService.cartPropertyGroup[index].checkoutAmount;
        this.placesService.cartPropertyGroup[index].discountedPrice = discountedPrice;

      }
    })
    return ischeck;

  }

  orderComplete(paymentIntent, customerId) {
    let bookingRequest = new BookingRequest();

    bookingRequest.TotalAmount = this.getTotalAmount();
    bookingRequest.CurrentAddress = localStorage.getItem("currentAddress");

    bookingRequest.PaymentRequestModel = new PaymentRequestModel();
    if (this.authenticationService.isAuthorized()) {
      bookingRequest.PaymentRequestModel.Email = this.authenticationService.userValue.email;
      bookingRequest.PhoneNumber = '';
      bookingRequest.Name = this.authenticationService.userValue.firstName;
    }
    else {
      // bookingRequest.PaymentRequestModel.Email = this.email;
      bookingRequest.PaymentRequestModel.Email = this.paymentForm.get(CART_CHECKOUT_METADATA.email).value;
      bookingRequest.PhoneNumber = this.paymentForm.get(CART_CHECKOUT_METADATA.phone).value;
      bookingRequest.Name = this.paymentForm.get(CART_CHECKOUT_METADATA.cardName).value;
    }


    if (this.authenticationService.isAuthorized()) {
      // if (this.promoCodeDiscountPercentage != 0) {
      bookingRequest.IsPromoCodeUsed = true;
      bookingRequest.PromoCodeID = this.promoCodeId;
      bookingRequest.PromoCodeType = this.promoCodeType;
      bookingRequest.PromoCode = this.promoCode;

      // }

      bookingRequest.PaymentRequestModel.IsGuestUser = false;
      bookingRequest.LoggedInUserID = this.authenticationService.userValue.id;
    }
    else {
      bookingRequest.PaymentRequestModel.IsGuestUser = true;
    }

    bookingRequest.PaymentRequestModel.PaymentMethodID = paymentIntent.payment_method;
    bookingRequest.PaymentRequestModel.CustomerID = customerId;
    bookingRequest.PaymentRequestModel.PaymentIntentID = paymentIntent.id;
    bookingRequest.PaymentRequestModel.TotalAmount = this.getTotalAmount();
    bookingRequest.PaymentRequestModel.ChargeFee = 0;
    bookingRequest.PaymentRequestModel.Net = this.getTotalAmount() - 0;
    bookingRequest.PaymentRequestModel.PaymentStatusTypeCode = PaymentStatus.PaymentSuccess;
    bookingRequest.PaymentRequestModel.PaymentModeTypeCode = PaymentMode.Stripe;

    bookingRequest.TrackPropertyGroup = [];
    this.placesService.cartPropertyGroup.forEach((val, index) => {
      let trackPropertyGroup = new TrackPropertyGroup();

      trackPropertyGroup.PropertyGroupID = val.propertyGroupID;
      if (val.searchFromDateTime)
        trackPropertyGroup.FromDate = new Date(val.searchFromDateTime);
      if (val.searchToDateTime)
        trackPropertyGroup.ToDate = new Date(val.searchToDateTime);

      if (this.authenticationService.isAuthorized()) {
        trackPropertyGroup.LoggedInUserID = this.authenticationService.userValue.id;
        trackPropertyGroup.UserID = this.authenticationService.userValue.id;
      }
      if (val.propertyName) {
        trackPropertyGroup.PropertyName = val.propertyName;
      }
      else {
        trackPropertyGroup.PropertyName = val.propertyname;
      }

      trackPropertyGroup.LocationName = val.locationName;

      trackPropertyGroup.PropertyGroupAmount = val.checkoutAmount;
      trackPropertyGroup.PropertyGroupTotalAmount=val.checkoutAmount;

      if (val.fees) {
        let feeAmount = this.feeAmountCalculate(val.fees, val.checkoutAmount);
        trackPropertyGroup.PropertyGroupTotalAmount +=feeAmount;
        trackPropertyGroup.AdditionalFee = feeAmount;
      }

      trackPropertyGroup.VechicleRequestModel = new VechicleRequestModel();
      if (this.showAddVehicleInfo) {
        trackPropertyGroup.VechicleRequestModel.VehicleLicensePlateNumber = this.paymentForm.
          get('vehicleInfo.licenseNumber').value;
        trackPropertyGroup.VechicleRequestModel.VehicleMake = this.paymentForm
          .get('vehicleInfo.vehicleMake').value;
        trackPropertyGroup.VechicleRequestModel.VehicleModel = this.paymentForm
          .get('vehicleInfo.vehicleModel').value;
        trackPropertyGroup.VechicleRequestModel.Color = this.paymentForm
          .get('vehicleInfo.vehicleColor').value;
        trackPropertyGroup.VechicleRequestModel.IsDefault = this.setDefaultFlagChecked;
        if (this.authenticationService.isAuthorized()) {
          trackPropertyGroup.VechicleRequestModel.UserId = this.authenticationService.userValue.id;
        }
        else {
          trackPropertyGroup.VechicleRequestModel.UserId = null;
        }
      }
      else {
        trackPropertyGroup.VechicleRequestModel.VehicleID = this.paymentForm.get('vehicleId').value;
      }

      bookingRequest.TrackPropertyGroup.push(trackPropertyGroup);

    });



    this.paymentService.addBookingDetails(bookingRequest).subscribe((response) => {
      console.log(response.data);
      const orderId = response.data && response.data.insertedRecordID ? response.data.insertedRecordID : 0
      this.showBookedDetails(bookingRequest);

      if (this.authenticationService.isAuthorized()) {

        let cart: number[] = [];
        this.placesService.cartPropertyGroup.forEach((val, index) => {
          if (val.cartID) {
            cart.push(val.cartID);
          }

        });


        if (cart.length > 0) {

          let cartRequest = {
            CartID: cart
          };

          this.cartService.deleteAllCart(cartRequest).subscribe((response) => {
            console.log(response);

            this.placesService.cartPropertyGroup = [];

            localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

            this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
            this.router.navigate(['/cart/order-placed', orderId]);

            // this.next.emit();

          }, (error) => {
            console.log(error);
            this.httpError = error;
            this.checkOutBtnClicked = false;
          });

        }
        else {

          this.placesService.cartPropertyGroup = [];

          localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

          this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
          this.router.navigate(['/cart/order-placed', orderId]);
          // this.next.emit();
        }

      }
      else {

        this.placesService.cartPropertyGroup = [];

        localStorage.setItem('bookedPlaces', JSON.stringify(this.placesService.cartPropertyGroup));

        this.placesService.addedCartPropertyGroup.next(this.placesService.cartPropertyGroup);
        this.router.navigate(['/cart/order-placed', orderId]);
        // this.next.emit();
      }

    }, (error) => {
      console.log(error);
      this.httpError = error;
      this.checkOutBtnClicked = false;
    });


  }


  showBookedDetails(bookingRequest) {

    let showbooked: any = {};

    if (bookingRequest.Name)
      showbooked.name = bookingRequest.Name;
    showbooked.email = bookingRequest.PaymentRequestModel.Email;

    showbooked.totalAmount = this.getTotalAmount();
    showbooked.cartPropertyGroupDetails = this.placesService.cartPropertyGroup;

    // this.placesService.cartPropertyGroup.forEach((value, index) => {
    //   if (value.propertyname)
    //     showbooked.spot = showbooked.spot ? showbooked.spot + ', ' + value.propertyname : value.propertyname;
    //   else
    //     showbooked.spot = value.propertyName;

    //   if (value.searchFromDateTime)
    //     showbooked.searchFromDateTime = value.searchFromDateTime;
    //   if (value.searchToDateTime)
    //     showbooked.searchToDateTime = value.searchToDateTime;

    // });

    this.placesService.showBookedDetails = showbooked;
  }

  public getImage(type: string): string {
    let url = './assets/images/credit-card.png';
    switch (type && type.toLowerCase()) {
      case 'visa':
        url = './assets/images/VISA.png';
        break;
      case 'mastercard':
        url = './assets/images/mastercard.png';
        break;
      case 'amex':
        url = './assets/images/amex.png';
        break;
      case 'jcb':
        url = './assets/images/jcb.png';
        break;
      default:
      // code block
    }
    return url;
  }
  reloadWindow() {
    this.router.navigateByUrl(`/`).then(
      () => { this.router.navigateByUrl('/cart;reservenow=true'); });
  }

}
