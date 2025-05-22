import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TemplateItem, templateLayout } from '../../../models/template';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnChanges {
  @Input() templateID: string = '';

  project: TemplateItem[] = templateLayout;
  selectedProject: TemplateItem | undefined;

  ngOnChanges(changes: SimpleChanges): void {
  if (
    changes['templateID'] &&
    changes['templateID'].currentValue !== changes['templateID'].previousValue &&
    this.templateID
  ) {
    this.selectedProject = this.project.find(project => project.id === this.templateID);
    if (this.selectedProject) {
      console.log('Name',this.selectedProject.name)
    }
    }
  }

}
