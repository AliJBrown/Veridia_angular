import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { NPC } from '../models/npc';
import { NpcDbService } from 'src/app/npc/services/npc-db.service';
import calculateMod from '../fifth-modifiers';

@Component({
  selector: 'app-npc-detail',
  templateUrl: './npc-detail.component.html',
  styleUrls: ['./npc-detail.component.css']
})
export class NpcDetailComponent implements OnInit {
  @Input() npc: Observable<NPC>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: NpcDbService
  ) { }

  ngOnInit(): void {
    this.getNPC();
  }

  getNPC(): void {
    //get id from url and feed to api to retrieve npc observable
    //switchmap allows it to pull the id and discard if a change was made to it before rendering
    //this is also best practice if the id will be reused to populate this component without
    //rendering the entire page again.
    this.npc = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.Get(+params.get('id')))
    )
  }

  gotoNpcs(npc: NPC): void {
    let npcId = npc ? npc.id : null;
    //pass along the npc id if available
    //NpcListComponent can select that npc.
    this.router.navigate(['/npcs', { id: npc.id }]);
  }

  public Deceased(npc: NPC) {
    if (npc.deceased) {
      npc.deceased = false;
    } else {
      npc.deceased = true;
    }
    this.service.Update(npc.id, npc).subscribe();
  }

  public calcMod(attScore: number): string {
    return calculateMod(attScore);
  }

}
