import { Component, OnInit } from '@angular/core';

import {NPC} from '../models/npc';
import { NpcDbService} from '../services/npc-db.service';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {
  npcs: NPC[];

  constructor(private service: NpcDbService) { }

  ngOnInit(): void {
    this.getNPCs();
  }

  getNPCs(){
    this.service.GetAll()
    .subscribe(npcs => this.npcs = npcs)
  }

}
