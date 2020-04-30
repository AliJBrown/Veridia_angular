import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NpcDbService } from '../services/npc-db.service';
import * as NameGen from '../npc-name-gen';
import { GenService } from '../services/gen.service';
import calculateMod from '../fifth-modifiers';
import { NPC } from '../models/npc';
import { switchMap } from 'rxjs/operators';
import { NPCNAME } from '../models/npcName';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrls: ['./add-npc.component.css']
})
export class AddNpcComponent implements OnInit {
  @Input() npc: NPC;
  decisionObject: NameGen.NameDecisionObject;

  constructor(
    private route: ActivatedRoute,
    private formsModule: FormsModule,
    private service: NpcDbService,
    private genService: GenService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.npc = <NPC>{};
    this.decisionObject = <NameGen.NameDecisionObject>{};
  }

  public Create(npc: NPC): void {
    this.service.Create(npc).subscribe(() => this.goBack());
  }

  public goBack(): void {
    this.location.back();
  }

  public calcMod(attScore: number): string {
    return calculateMod(attScore);
  }

  public generate() {
    this.decisionObject.gender = this.npc.gender;
    this.decisionObject.race = this.npc.race;
    console.info(this.decisionObject.gender + ", " + this.decisionObject.race);

    //get url from decision tree
    let nameTree = new NameGen.NameGenTree();
    let url = nameTree.Evaluate(this.decisionObject);

    //get id from name gen and feed to api to retrieve npc observable
    //switchmap allows it to pull the id and discard if a change was made to it before rendering
    //this is also best practice if the id will be reused to populate this component without
    //rendering the entire page again.
    let npcName:string;
    this.genService.GetName(url).subscribe(res =>{
      npcName = res.name;
      this.npc.name = npcName;
      // if(isDevMode){
      //   console.debug(npcName);
      // }
    });



  }
}
