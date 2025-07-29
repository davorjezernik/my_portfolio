import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ready-to-work',
  imports: [FooterComponent, TranslateModule, FormsModule, NgIf],
  templateUrl: './ready-to-work.component.html',
  styleUrl: './ready-to-work.component.scss'
})
export class ReadyToWorkComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    acceptTerms: false
  }

  formSubmitted = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.onSubmit();
    } else {
      console.warn('Form is invalid');
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.contactData);
  }
}
