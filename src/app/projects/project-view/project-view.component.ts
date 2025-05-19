import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TemplateItem, templateLayout } from '../../../models/template';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [NavbarComponent, NgIf],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnChanges {
  @Input() templateID: string = '';

  project: TemplateItem[] = templateLayout;
  selectedTemplate: TemplateItem | undefined;
  templateMap: Map<string, TemplateItem> = new Map();

  constructor() {
    this.project.forEach(item => this.templateMap.set(item.id, item));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['templateID'] &&
      changes['templateID'].currentValue !== changes['templateID'].previousValue &&
      this.templateID
    ) {
      let foundTemplate = this.templateMap.get(this.templateID);
      if (foundTemplate) {
        this.selectedTemplate = foundTemplate;
        console.log('Template data', this.selectedTemplate)
      }
    }
  }


}
