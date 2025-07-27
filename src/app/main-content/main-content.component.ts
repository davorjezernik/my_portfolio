import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from '../headline/headline.component';
import { AboutMeComponent } from '../about-me/about-me.component'; 
import { SkillSetComponent } from '../skill-set/skill-set.component'; 
import { ProjectsComponent } from '../projects/projects.component'; 
import { ThoughtsComponent } from '../thoughts/thoughts.component'; 
import { ReadyToWorkComponent } from '../ready-to-work/ready-to-work.component'; 

@Component({
  selector: 'app-main-content',
  imports: [
    RouterOutlet,
    HeadlineComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ThoughtsComponent,
    ReadyToWorkComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {}
