import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


import calculateMod from '../fifth-modifiers';
import { NPC } from '../models/npc';
import { NpcDbService } from '../services/npc-db.service';



@Component({
  selector: 'app-edit-npc',
  templateUrl: './edit-npc.component.html',
  styleUrls: ['./edit-npc.component.css']
})
export class EditNpcComponent implements OnInit {
  @Input() npc: Observable<NPC>;

  constructor(
    private route: ActivatedRoute,
    private service: NpcDbService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getNPC();
  }

  getNPC(): void {
    //get id from url and feed to api to retriece npc observable
    //switchmap allows it to pull the id and discard if a change was made to it before rendering
    //this is also best practice if the id will be reused to populate this component without
    //rendering the entire page again.
    this.npc = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.Get(+params.get('id')))
    )
  }

  public Update(npc: NPC): void {
    this.service.Update(npc.id, npc).subscribe(() => this.goBack());
  }

  public Deceased(npc:NPC){
    if(npc.deceased)
    {
      npc.deceased = false;
    }else{
      npc.deceased = true;
    }
    this.service.Update(npc.id, npc).subscribe();
  }

  public goBack(): void {
    this.location.back();
  }

  public calcMod(attScore: number): string {
    return calculateMod(attScore);
  }
}
