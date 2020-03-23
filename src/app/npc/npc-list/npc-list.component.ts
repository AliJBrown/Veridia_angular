import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {NPC} from '../models/npc';
import { NpcDbService} from '../services/npc-db.service';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {
  npcs: Observable<NPC[]>;
  selectedId: number;

  constructor(
    private service: NpcDbService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getNPCs();
  }

  getNPCs(){
    this.npcs = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => {
      this.selectedId= + params.get('id');
      return this.service.GetAll();
      })
    );
    // this.service.GetAll()
    // .subscribe(npcs => this.npcs = npcs)
  }

}
