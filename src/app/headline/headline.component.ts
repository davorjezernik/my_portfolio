import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-headline',
  imports: [NavbarComponent, TranslateModule, NgIf],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {
  loading = false;

 ngOnInit() {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      this.loading = true;
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        this.loading = false;
        document.body.style.overflow = 'auto';
        sessionStorage.setItem('hasVisited', 'true'); 
      }, 2000);
    }
  }
}
