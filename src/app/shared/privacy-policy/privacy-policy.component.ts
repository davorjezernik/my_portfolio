import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [NavbarComponent, TranslateModule, FooterComponent, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }
}
