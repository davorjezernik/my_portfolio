import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [TranslateModule, NgClass],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
showImg2 = false;
  hideImg2 = false;
  hideImg1 = false;
  hideImg1Text = false;

  startPeelOff() {
    if (this.showImg2 || this.hideImg1) return;
    this.hideImg1 = true;
    this.hideImg1Text = true;
    this.showImg2 = true;
    setTimeout(() => {
      this.hideImg2 = true;
      setTimeout(() => {
        this.showImg2 = false;
        this.hideImg2 = false;
      }, 500);
    }, 1000);
  }
}
