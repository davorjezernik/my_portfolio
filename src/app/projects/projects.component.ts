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

  checkID(event: Event) {
    const target = event.target as HTMLElement;
    this.IdTemplate = target.id;
    console.log(this.IdTemplate);
  }

  sendTemplateInfo() {
    if (this.IdTemplate == 'join') {
      console.log('join template');
    } else if ( this.IdTemplate == 'pollo') {
      console.log('pollo template');
    } else {
      console.log('bubble template');
    }
  }
}