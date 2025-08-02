import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-legal-notice',
  imports: [NavbarComponent, TranslateModule, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
