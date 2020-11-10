import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service ';
import { PaymentService } from 'src/app/shared/payment.service';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.scss']
})
export class CartConfirmationComponent implements OnInit {
  myDate = Date.now();
  orderDetails: any[] = [];
  isSpinner = false;
  currentloc;
  currentAdd: string;
  constructor(private route: ActivatedRoute, public commonService: CommonService, public paymentService: PaymentService) { }
  ngOnInit(): void {
    this.currentloc = localStorage.getItem("latandlong");
    this.currentAdd = localStorage.getItem("currentAddress");

    this.route.params.subscribe(params => {
      const orderID = params && params.id;
      this.paymentService.getBookingDetailsById(orderID).subscribe((details) => {
        this.orderDetails = details.data as unknown as any[];
        console.log(details.data);
        this.isSpinner = true;
      }, () => this.isSpinner = true);
    });
  }

  public get additionalFee(): number {
    let additionalFees:number=0;
    if(this.orderDetails && this.orderDetails.length > 0){
      this.orderDetails.forEach((val,index)=>{
        additionalFees+=val.additionalFee;
      });
     return additionalFees;
    }
      
  }

  public get totalAmount(): number {
    return this.orderDetails && this.orderDetails.length > 0
      && this.orderDetails[0].totalAmount ? this.orderDetails[0].totalAmount : 0
  }
  public get name(): number {
    return this.orderDetails && this.orderDetails.length > 0
      && this.orderDetails[0].name ? this.orderDetails[0].name : '';
  }
  getImage(order: any): string {
    return order && order.files && order.files[0] && order.files[0].filePath ? order.files[0].filePath : '';
  }

}
