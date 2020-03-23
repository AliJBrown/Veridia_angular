import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NpcModule } from './npc/npc.module';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NpcModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ]
})
export class AppModule { 
  //Diagnostic only: inspect router config
  constructor(router: Router){
    
  }
}
