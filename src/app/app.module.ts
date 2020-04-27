import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { NpcModule } from './npc/npc.module';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from 'src/services/confirmation-dialog.service';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NpcModule,
    AppRoutingModule,

  ],
  providers: [ConfirmationDialogService],
  bootstrap: [
    HomeComponent
  ]
})
export class AppModule {
  //Diagnostic only: inspect router config
  constructor(router: Router){

  }
}
