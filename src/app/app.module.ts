import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { NumRollComponent } from './component/num-roll/num-roll.component';
import { ResetComponent } from './component/reset/reset.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    title: 'Rolling Number',
    component: NumRollComponent
  },
  {
    path: '',
    title: 'Rolling Number',
    component: NumRollComponent
  },
  {
    path: 'reset',
    title: 'Reset',
    component: ResetComponent
  },
  {
    path: '**',
    redirectTo: "home",
    pathMatch: 'full'
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    NumRollComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
