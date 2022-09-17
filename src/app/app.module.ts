import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { BgComponent } from './bg/bg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { ResetpwComponent } from './resetpw/resetpw.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLiveWorkoutComponent } from './dashboard-live-workout/dashboard-live-workout.component';
import { CommunityComponent } from './community/community.component';
import { CommunitySearchFriendsComponent } from './community-search-friends/community-search-friends.component';
import { DashboardExerciseFinishedComponent } from './dashboard-exercise-finished/dashboard-exercise-finished.component';

import { PlanComponent } from './plan/plan.component';
import { MyComponent } from './my/my.component';
import { AchievementComponent } from './achievement/achievement.component';
import { BgInterfacesComponent } from './bg-interfaces/bg-interfaces.component';
import { AchievementPageComponent } from './achievement-page/achievement-page.component';
import { BackComponent } from './back/back.component';

import { MealComponent } from './meal/meal.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { SnackComponent } from './snack/snack.component';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SettingComponent } from './setting/setting.component';
import { VideosComponent } from './videos/videos.component';
import { SetGoalComponent } from './set-goal/set-goal.component';




@NgModule({

  declarations: [AppComponent, FirstpageComponent, BgComponent, NavbarComponent, LoginComponent, SignupComponent, Signup2Component, Signup3Component, PrivacyPolicyComponent, VerifyemailComponent, ResetpwComponent, DashboardComponent, DashboardLiveWorkoutComponent, DashboardExerciseFinishedComponent, DashboardLiveWorkoutComponent, CommunityComponent, CommunitySearchFriendsComponent
    , PlanComponent, MyComponent, AchievementComponent, SuggestionsComponent, BgInterfacesComponent, AchievementPageComponent, BackComponent, MealComponent, BreakfastComponent, LunchComponent, DinnerComponent, SnackComponent, VideosComponent, SetGoalComponent, LeaderboardComponent, CalculateComponent,
    SettingComponent],



  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SwiperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

