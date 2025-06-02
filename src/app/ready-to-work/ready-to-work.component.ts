import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ready-to-work',
  imports: [FooterComponent, TranslateModule],
  templateUrl: './ready-to-work.component.html',
  styleUrl: './ready-to-work.component.scss'
})
export class ReadyToWorkComponent {

}
