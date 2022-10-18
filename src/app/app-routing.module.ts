import { importProvidersFrom, NgModule, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//backend
import { AuthGuard } from "./login/auth.guard";

import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { TeachingComponent } from './teaching/teaching.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLiveWorkoutComponent } from './dashboard-live-workout/dashboard-live-workout.component';
import { CommunityComponent } from './community/community.component';

import { MyComponent } from './my/my.component';
import { PlanComponent } from './plan/plan.component';
import { AchievementPageComponent } from './achievement-page/achievement-page.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { SnackComponent } from './snack/snack.component';
import { SetGoalComponent } from './set-goal/set-goal.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SettingComponent } from './setting/setting.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import{ExerciseLiveVideoComponent}from'./exercise-live-video/exercise-live-video.component';
import {DashboardExerciseFinishedComponent} from "./dashboard-exercise-finished/dashboard-exercise-finished.component";

var entry_route: string = "firstpage";
if (localStorage.getItem('user_email') != null){
  entry_route = "dashboard";
}

const routes: Routes = [
  {
    path:'exerciselivevideo',
    component:ExerciseLiveVideoComponent
  },
  {
    path: 'firstpage',
    component: FirstpageComponent
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: entry_route,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signup2',
    component: Signup2Component
  },
  {
    path: 'signup3',
    component: Signup3Component
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'verifyemail',
    component: VerifyemailComponent
  },
  {
    path: 'resetpw',
    component: ResetpwComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboardliveworkout',
    component: DashboardLiveWorkoutComponent
  },
  {
    path: 'dashboardexercisefinished',
    component: DashboardExerciseFinishedComponent
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
    path: 'achievement-page',
    component: AchievementPageComponent
  },
  {
    path: 'breakfast',
    component: BreakfastComponent
  },
  {
    path: 'lunch',
    component: LunchComponent
  },
  {
    path: 'dinner',
    component: DinnerComponent
  },
  {
    path: 'snack',
    component: SnackComponent
  },
  {
    path: 'set-goal',
    component: SetGoalComponent
  },
  {
    path: 'calculate',
    component: CalculateComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'teaching',
    component: TeachingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  ngOnInit(): void {
    console.log(`Enter App!!!`);
  }
}
