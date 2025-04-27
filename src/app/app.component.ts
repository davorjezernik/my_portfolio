import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { ReadyToWorkComponent } from './ready-to-work/ready-to-work.component';


@Component({
  selector: 'app-root',
  imports: [HeadlineComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ThoughtsComponent, ReadyToWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myPortfolio';
}
