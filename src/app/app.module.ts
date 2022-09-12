import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { BgComponent } from './bg/bg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLiveWorkoutComponent } from './dashboard-live-workout/dashboard-live-workout.component';
import { CommunityComponent } from './community/community.component';
import { PlanComponent } from './plan/plan.component';
import { MyComponent } from './my/my.component';
import { AchievementComponent } from './achievement/achievement.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';





@NgModule({
  declarations: [AppComponent, FirstpageComponent, NavbarComponent, LoginComponent, DashboardComponent, DashboardLiveWorkoutComponent, CommunityComponent,
    PlanComponent, MyComponent, AchievementComponent, SuggestionsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
