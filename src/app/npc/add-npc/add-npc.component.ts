import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NpcDbService } from '../services/npc-db.service';
import { NPC } from '../models/npc';
import { FormsModule } from '@angular/forms';
import calculateMod from '../fifth-modifiers';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrls: ['./add-npc.component.css']
})
export class AddNpcComponent implements OnInit {
  @Input() npc: NPC;

  constructor(
    private formsModule: FormsModule,
    private service: NpcDbService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.npc = <NPC>{};
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
}
