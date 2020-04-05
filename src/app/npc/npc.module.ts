import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NpcRoutingModule } from './npc-routing.module';
import {NpcListComponent } from './npc-list/npc-list.component';
import { NpcDetailComponent } from './npc-detail/npc-detail.component';
import { AddNpcComponent } from './add-npc/add-npc.component';
import { EditNpcComponent } from './edit-npc/edit-npc.component';


@NgModule({
  declarations: [
    NpcListComponent,
    NpcDetailComponent,
    AddNpcComponent,
    EditNpcComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NpcRoutingModule
  ]
})
export class NpcModule { }
