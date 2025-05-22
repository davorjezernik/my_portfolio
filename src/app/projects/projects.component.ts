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

  checkID(id: string) {
  this.templateID = id;
  console.log('Id =', id);
}
}