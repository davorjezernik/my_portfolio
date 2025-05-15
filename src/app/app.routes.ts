import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectsViewComponent } from './projects/projects-view/projects-view.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'project-view-route', component: ProjectsViewComponent }
];
