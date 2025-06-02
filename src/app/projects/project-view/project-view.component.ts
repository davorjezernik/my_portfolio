import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TemplateItem, templateLayout } from '../../../models/template';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgIf, TranslateModule],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnChanges {
  @Input() templateID: string = '';

  project: TemplateItem[] = templateLayout;
  selectedProject: TemplateItem | undefined;
  projectsIds: string[] = [];
  skills: { icon: string; label: string }[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['templateID'] &&
      changes['templateID'].currentValue !== changes['templateID'].previousValue &&
      this.templateID
    ) {
      this.selectedProject = this.project.find(project => project.id === this.templateID);
      this.projectsIds = this.project.map(p => p.id);
      console.log('ID', this.templateID);
      this.skills = this.renderSkills(); 
    }
  }

  renderSkills(): { icon: string; label: string }[] {
  switch (this.templateID) {
    case 'join':
      return [
        { icon: 'assets/skill_set_img/front_end/html.svg', label: 'HTML' },
        { icon: 'assets/skill_set_img/front_end/css.svg', label: 'CSS' },
        { icon: 'assets/skill_set_img/front_end/javascript.svg', label: 'JavaScript' },
        { icon: 'assets/skill_set_img/front_end/firebase.svg', label: 'Firebase' }
      ];
    case 'pollo':
      return [
        { icon: 'assets/skill_set_img/front_end/html.svg', label: 'HTML' },
        { icon: 'assets/skill_set_img/front_end/css.svg', label: 'CSS' },
        { icon: 'assets/skill_set_img/front_end/javascript.svg', label: 'JavaScript' },
      ];
    case 'bubble':
      return [
        { icon: '', label: 'In progress...' },
      ];
    default:
      return [];
    }
  }

  goToNextProject(): void {
    let currentIndex = this.projectsIds.indexOf(this.templateID);
    if (currentIndex === -1) return;
    let nextIndex = (currentIndex + 1) % this.projectsIds.length;
    this.templateID = this.projectsIds[nextIndex];
    this.selectedProject = this.project.find(p => p.id === this.templateID);
    this.skills = this.renderSkills(); 
  }
}
