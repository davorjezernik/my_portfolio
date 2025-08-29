import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  showImg2 = false;
  hideImg2 = false;
  hideImg1 = false;
  hideImg1Text = false;

  @ViewChild('bgAnim', { static: true }) bgAnim!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.bgAnim.nativeElement.classList.add('animate');
          observer.unobserve(this.bgAnim.nativeElement); 
        }
      });
    }, { threshold: 0.5 }); 

    observer.observe(this.bgAnim.nativeElement);
  }

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

