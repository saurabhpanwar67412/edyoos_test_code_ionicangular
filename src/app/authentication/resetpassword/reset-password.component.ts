import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { ApiResponse } from 'src/app/model/apiresponse.model';
import { LoginService } from '../../shared/authentication/login/login.service';
import { ResetPassword } from 'src/app/model/login/reset_password.model';
import { ErrorModel } from 'src/app/model/login/error.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted: boolean = false;
  httpError:string;
  submitBtnDisable:boolean=false;
  resetPassword: ResetPassword = new ResetPassword();


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {

    this.resetPasswordForm = this.fb.group({
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', [Validators.required]]
      }, { validator: matchPassword }),
    });

    this.route.queryParams.subscribe(params => {
      debugger
      this.resetPassword.Email = params['email'];
      this.resetPassword.Token = params['token'];
    });

    this.resetPasswordForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.resetPasswordForm);
    })

  }

  formErrors = {
    password: '',
    passwordConfirmation:'',
    passwordGroup: ''
  };

  validationMessages = {
    password: {
      required: 'Password is required.'
     
    },
    passwordConfirmation:{
      required: 'Confirm Password is required.',
      passwordMismatch: 'Password and Confirm Password do not match.'
    },
    passwordGroup: {
      passwordMismatch: 'Password and Confirm Password do not match.'
    }

  };
  showSwal(title) {
   
      swal({
        title: title,
        // text: "You clicked the button!",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-fill btn-success",
        type: "success"

      }).then((result) => {
        if (result.value) {
          this.router.navigate(['pages/login']);
        }
        else {
          this.router.navigate(['pages/login']);
        }
      });
  }

  logValidationErrors(group: FormGroup = this.resetPasswordForm): void {

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

  onSubmit(): void {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      this.logValidationErrors(this.resetPasswordForm);
    }
    else {
      this.submitBtnDisable=true;
      this.resetPassword.Password=this.resetPasswordForm.get('passwordGroup').get('password').value;

      this.loginService.resetPassword(this.resetPassword).subscribe((response: ApiResponse<string>) => {
        this.submitBtnDisable=false;
        if (response.data) {        
          this.showSwal(response.data);
        }
       
      },(error)=>{
        this.submitBtnDisable=false;
        this.httpError=error;
      })
    }
  }

}
function matchPassword(group: AbstractControl): { [key: string]: any } | null {

  const passwordControl = group.get('password');
  const confirmPasswordControl = group.get('passwordConfirmation');

  if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
    confirmPasswordControl.setErrors(null);
    return null;
  } else {
    confirmPasswordControl.setErrors({'passwordMismatch': true});
    return { 'passwordMismatch': true };
  }
}