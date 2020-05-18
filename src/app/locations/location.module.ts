import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationRoutingModule } from './location-routing.module';
import { CitiesComponent } from './cities/cities.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { AddCityComponent } from './add-city/add-location.component';
import { EditCityComponent } from './edit-city/edit-location.component';
import { AddLandmarkComponent } from './add-landmark/add-landmark.component';
import { EditLandmarkComponent } from './edit-landmark/edit-landmark.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { LandmarkDetailComponent } from './landmark-detail/landmark-detail.component';


@NgModule({
  declarations: [
    CitiesComponent,
    LandmarksComponent,
    AddCityComponent,
    EditCityComponent,
    AddLandmarkComponent,
    EditLandmarkComponent,
    CityDetailComponent,
    LandmarkDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
