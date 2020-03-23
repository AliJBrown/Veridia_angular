import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import {NPC} from '../models/npc';
import { NpcDbService } from 'src/app/npc/services/npc-db.service';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.css']
})
export class NpcDetailComponent implements OnInit {
  @Input() npc: NPC;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: NpcDbService
  ) { }

  ngOnInit(): void {
    this.getNPC();
  }

  getNPC(): void{
    //get id from url and feed to api to retriece npc observable
    //switchmap allows it to pull the id and discard if a change was made to it before rendering
    //this is also best practice if the id will be reused to populate this component without
    //rendering the entire page again.
    let id = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.service.Get(+params.get('id')))
    ).subscribe(npc => this.npc = npc);
  }

  gotoNpcs(npc: NPC): void{
    let npcId = npc ? npc.id: null;
    //pass along the npc id if available
    //NpcListComponent can select that npc.
    this.router.navigate(['/npcs', {id: npc.id}]);
  }

}
