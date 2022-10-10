import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CuantoPusoComponentComponent } from './cuanto-puso-component/cuanto-puso-component.component';
import { RepartirComponentComponent } from './repartir-component/repartir-component.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const appRoutes:Routes = [
  {path:'', component:HomeComponentComponent},
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
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
