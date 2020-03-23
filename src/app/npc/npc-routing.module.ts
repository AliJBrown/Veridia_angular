import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpcListComponent } from './npc-list/npc-list.component';
import { NpcDetailComponent } from './npc-detail/npc-detail.component';


const npcRoutes: Routes = [
  { path: 'npcs', component:NpcListComponent},
  { path: 'npc/:id', component: NpcDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(npcRoutes)],
  exports: [RouterModule]
})
export class NpcRoutingModule { }
