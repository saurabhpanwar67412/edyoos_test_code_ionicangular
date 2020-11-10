import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {
  emailUsFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService,private dialogService: ConfirmDialogService) { }

  ngOnInit() {

    this.emailUsFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
      phone: ['', [Validators.pattern("^[1234567890][0-9]{9}$")]]
    });

    this.emailUsFormGroup.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.emailUsFormGroup);
    });
  }

  sendMessage() {

    const body = {
      SentFrom: this.emailUsFormGroup.get('email').value,
      SentMessage: this.emailUsFormGroup.get('message').value,
      FirstName: this.emailUsFormGroup.get('firstName').value,
      LastName: this.emailUsFormGroup.get('lastName').value,
      PhoneNumber: this.emailUsFormGroup.get('phone').value,
      FromBusiness: true
    };

    this.userService.EmailUs(body).subscribe((response) => {
      this.emailUsFormGroup.reset();
      const options = {
        title: 'Message',
        message: 'Your Message has been sent',
        confirmText: 'OK'
      };
      this.dialogService.open(options);
      this.dialogService.confirmed().subscribe(confirmed => {
        if (confirmed) {

        }
      });

    }, (error) => {
      console.log(error);

    })
  }

  formErrors = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: ''
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    email: {
      required: 'Email is required!',
      email: 'Enter a valid email address!'
    },
    firstName: {
      required: 'FirstName is required!'
    },
    lastName: {
      required: 'Last Name is required!'
    },
    phone: {
      pattern: 'Phone must be a valid phone number'
    },
    message: {
      required: 'Message is required!'
    }
  };

  logValidationErrors(group: FormGroup = this.emailUsFormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';

      if (abstractControl && !abstractControl.valid && abstractControl.touched) {
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

}
