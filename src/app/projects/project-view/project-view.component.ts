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

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['templateID'] &&
      changes['templateID'].currentValue !== changes['templateID'].previousValue &&
      this.templateID
    ) {
      console.log('Template to use:', this.templateID);
    }
  }
}
