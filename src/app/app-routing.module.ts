import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MyComponent } from './my/my.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {
    path: 'firstpage',
    component: FirstpageComponent
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'plan',
    component: PlanComponent
  },
  {
    path: 'my',
    component: MyComponent
  },
  {
    path: '',
    redirectTo: 'firstpage',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
