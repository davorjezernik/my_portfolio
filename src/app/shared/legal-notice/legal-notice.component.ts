import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [NavbarComponent, TranslateModule, FooterComponent, RouterModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }

  constructor(private router: Router) {}

  scrollToContact() {
    this.router.navigate(['/'], { fragment: 'contact' });
  }
}
