import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessegesComponent } from './messeges/messeges.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HeroService } from './hero.service';
import { WeatherComponent } from './weather/weather.component';
import { GetWeatherService } from './get-weather.service';
import { ChildcomponenetComponent } from './childcomponenet/childcomponenet.component';
import { ApigetComponent } from './apiget/apiget.component';
import { ParentComponent } from './parent/parent.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessegesComponent,
    DashboardComponent,
    WeatherComponent,
    ChildcomponenetComponent,
    ApigetComponent,
    ParentComponent,
    FormsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'heroes',
      component: HeroesComponent
    },
    { path: 'dashboard', 
    component: DashboardComponent
    },
    { path: 'getapi', 
    component: ApigetComponent
    },
    {
      path:'weather',
      component: WeatherComponent
    },
    {
      path:'parent',
      component: ParentComponent

    },
    {
      path:'forms',
      component: FormsComponent

    },
  ])
  ],
  providers: [HeroService, GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
