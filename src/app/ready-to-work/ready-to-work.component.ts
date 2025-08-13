import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ready-to-work',
  imports: [FooterComponent, TranslateModule, FormsModule, NgIf],
  templateUrl: './ready-to-work.component.html',
  styleUrl: './ready-to-work.component.scss'
})
export class ReadyToWorkComponent {
  
  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    acceptTerms: false
  }

  formSubmitted = false;

  mailTest = true;

  emailSent = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.onSubmit(form);
    } else {
      console.warn('Form is invalid');
    }
  }

  post = {
    endPoint: 'http://davorjezernik.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.resetFormData(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetFormData(ngForm);
    }
  }

  private showEmailSentPopup() {
    this.emailSent = true;
    setTimeout(() => {
      this.emailSent = false;
    }, 3000); 
  }

  private resetFormData(ngForm: NgForm) {
  ngForm.resetForm(); 
  this.contactData = {  
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  };
  this.formSubmitted = false; 
  this.showEmailSentPopup();
}
}
