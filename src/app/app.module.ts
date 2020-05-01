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
import { CitiesComponent } from './locations/cities/cities.component';
import { LandmarksComponent } from './locations/landmarks/landmarks.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
    LandingPageComponent,
    CitiesComponent,
    LandmarksComponent,
    AddLocationComponent,
    EditLocationComponent
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
