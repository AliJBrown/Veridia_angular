import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NpcDbService } from '../services/npc-db.service';
import * as NameGen from '../npc-name-gen-tree';
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

    let fUrl = url.fURL + "/" + url.fnum;
    let lUrl = url.lURL + "/" + url.lnum;

    //dirty name gen but it works 99% of the time
    //first call gets first name and appends to npc
    this.genService.GetName(fUrl).then(res => {
      res.subscribe(result => {
        this.npc.name = result.name;
      });
    });
    //second call gets last name and appends to npc
    this.genService.GetName(lUrl).then(res => {
      res.subscribe(result => {
        this.npc.name += " " + result.name;
      });
    });
  }
}
