import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [NavbarComponent, TranslateModule, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  loading = true;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.loading = false;
      document.body.style.overflow = 'auto';
    }, 2000); 
  }
}
