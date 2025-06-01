import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-headline',
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {

}
