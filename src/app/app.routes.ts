import { RouterModule, Routes, ExtraOptions  } from '@angular/router';
import { NgModule } from '@angular/core';
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

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',          
  scrollOffset: [0, 64],               
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
