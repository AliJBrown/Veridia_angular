import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NpcDbService } from '../services/npc-db.service';
import { NPC } from '../models/npc';
import calculateMod from '../fifth-modifiers';
import * as NameGen from '../npc-name-gen';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrls: ['./add-npc.component.css']
})
export class AddNpcComponent implements OnInit {
  @Input() npc: NPC;
  decisionObject : NameGen.NameDecisionObject;

  constructor(
    private formsModule: FormsModule,
    private service: NpcDbService,
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

  public generate(){
    this.decisionObject.gender = this.npc.gender;
    this.decisionObject.race = this.npc.race;
    console.info(this.decisionObject.gender + ", " + this.decisionObject.race);

    let nameTree = new NameGen.NameGenTree();
    let url = nameTree.Evaluate(this.decisionObject);
    console.info(url)

  }
}
