import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NpcListComponent } from './npc/npc-list/npc-list.component';
import { LandingPageComponent } from './LandingPage/landing-page/landing-page.component';


const appRoutes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:"full"},
  {path: 'home', component:LandingPageComponent},
  {path: 'npcs', component:NpcListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, //<-- debugging purposes only)
        // preloadingStrategy: SelectivePreLoadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
