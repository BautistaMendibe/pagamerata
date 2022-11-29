import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { CuantoPusoComponentComponent } from './components/cuanto-puso-component/cuanto-puso-component.component';
import { RepartirComponentComponent } from './pages/repartir-component/repartir-component.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'repartir', component:RepartirComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CuantoPusoComponentComponent,
    RepartirComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent
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
