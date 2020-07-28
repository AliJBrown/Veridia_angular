import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { AddCityComponent } from './add-city/add-location.component';
import { EditCityComponent } from './edit-city/edit-location.component';
import { AddLandmarkComponent } from './add-landmark/add-landmark.component';
import { EditLandmarkComponent } from './edit-landmark/edit-landmark.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { LandmarkDetailComponent } from './landmark-detail/landmark-detail.component';


const locationRoutes: Routes = [
  { path: 'city', component: CitiesComponent },
  { path: 'city/add', component: AddCityComponent },
  { path: 'city/edit:id', component: EditCityComponent },
  { path: 'city/:id', component:CityDetailComponent },
  { path: 'landmark', component: LandmarksComponent },
  { path: 'landmark/add', component: AddLandmarkComponent },
  { path: 'landmark/edit/:id', component: EditLandmarkComponent },
  { path: 'landmark/:id', component: LandmarkDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(locationRoutes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
