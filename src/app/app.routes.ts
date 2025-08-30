import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { LegalNoticeComponent } from './shared/legal-notice/legal-notice.component'; 
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'project-view/:templateID', component: ProjectViewComponent },
    { path: 'legalnotice', component: LegalNoticeComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent },
];
