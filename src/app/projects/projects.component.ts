import { Component } from '@angular/core';
import { ProjectViewComponent } from './project-view/project-view.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectViewComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  templateID: string = '';

  checkID(element: HTMLElement) {
    this.templateID = element.id;
  }
}