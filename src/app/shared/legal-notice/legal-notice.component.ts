import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  imports: [NavbarComponent, TranslateModule, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  loading = true;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.loading = false;
      document.body.style.overflow = 'auto';
    }, 2000); 
  }
}
