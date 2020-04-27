import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { NPC } from '../models/npc';
import { NpcDbService } from '../services/npc-db.service';
import { PriorityQueue } from 'src/classes/PriorityQueue';

@Component({
  selector: 'app-npc-list',
  templateUrl: './npc-list.component.html',
  styleUrls: ['./npc-list.component.css']
})
export class NpcListComponent implements OnInit {
  npcs: Observable<NPC[]>;
  selectedId: number;
  sortedNPCs: NPC[];

  constructor(
    private service: NpcDbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getNPCs();
    this.sortedNPCs = new Array<NPC>();
    this.get();
  }

  /**
   * Implement Priority queue to alphabetize NPCs
   */
  get(){
    let pq: PriorityQueue<NPC> = new PriorityQueue<NPC>(true);

    this.npcs.subscribe(element => {
      for (let i = 0; i < element.length; i++) {
        if (element != null && element[i] != null) {
          let priority = element[i].name.charCodeAt(0) + element[i].name.charCodeAt(1);
          pq.Enqueue(priority, element[i]);
        }
      }
      while (pq.Size > 0) {
        // console.log(sortedNPCs.push(pq.Dequeue()));
        this.sortedNPCs.push(pq.Dequeue());
      }
    });

    console.log(this.sortedNPCs);
  }

  getNPCs() {
    this.npcs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = + params.get('id');
        return this.service.GetAll();
      })
    );
    // this.service.GetAll()
    // .subscribe(npcs => this.npcs = npcs)
  }

}
