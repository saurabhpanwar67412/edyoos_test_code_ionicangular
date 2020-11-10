import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { LoaderService } from './shared/loader.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event } from '@angular/router';
import { AuthenticationService } from './shared/authentication/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parking-lot';
  constructor(private spinner: NgxSpinnerService, private authenticationService: AuthenticationService,
    private loaderService: LoaderService, private _router: Router) {
      
    // this.loaderService.isLoading.subscribe((v) => {
    //   if (v) {
    //     this.spinner.show();
    //   }
    //   else {
    //     this.spinner.hide();
    //   }
    // });


    // this._router.events.subscribe((routerEvent: Event) => {

    //   // On NavigationStart, set showLoadingIndicator to ture
    //   if (routerEvent instanceof NavigationStart) {
    //     this.spinner.show();
    //   }


    //   if (routerEvent instanceof NavigationEnd ||
    //     routerEvent instanceof NavigationError ||
    //     routerEvent instanceof NavigationCancel) {
    //       this.spinner.hide();
    //   }

    // });

  }

  ngOnInit(): void {
    //  environment.apiURL = this.configsLoaderService.ApiURL;
    // environment.apiURL=ApiEndPoint;
    // var assignURLS=new AssignURLS().assignUrl();
    this.authenticationService.getUserDetailsFromUrl();
  }






}
