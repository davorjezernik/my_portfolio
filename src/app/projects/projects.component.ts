import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

// href="project-view-route"

export class ProjectsComponent {

  IdTemplate: string = '';

  checkID(element: HTMLElement) {
    this.IdTemplate = element.id;
    if (this.IdTemplate === 'join') {
      console.log('Use template', this.IdTemplate);
    } else if (this.IdTemplate === 'pollo') {
      console.log('Use template', this.IdTemplate)
    } else {
      console.log('Use template', this.IdTemplate)
    }
  }



}