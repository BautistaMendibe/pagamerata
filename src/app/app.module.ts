import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CuantoPusoComponentComponent } from './cuanto-puso-component/cuanto-puso-component.component';
import { RepartirComponentComponent } from './repartir-component/repartir-component.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes:Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'cuantopusieron', component:CuantoPusoComponentComponent},
  {path:'repartir', component:RepartirComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CuantoPusoComponentComponent,
    RepartirComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
