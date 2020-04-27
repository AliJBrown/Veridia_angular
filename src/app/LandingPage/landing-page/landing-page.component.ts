import { Component, OnInit } from '@angular/core';
import { LinkedList } from 'src/classes/LinkedList';
import { PriorityQueue } from 'src/classes/PriorityQueue';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /**
   *EVERYTHING IN THIS METHOD IS TESTING CLASSES!!! REMOVE FOR PUBLISH!!!
   */
  public TESTLinkedList() {

    //test linked list
    //Add - good
    //IsEmpty - good
    //Delete - good
    //Index - good
    //IsPresent - good
    //RemoveAt - good
    //Set At - good
    //insert - good
    let testLL: LinkedList<string> = new LinkedList<string>();
    testLL.Add("Tasha");
    console.log(testLL);
    testLL.Add("Gadriel");
    testLL.Add("Aureus");
    console.log(testLL.Size);
    console.log(testLL);
    console.log("is empty:" + testLL.IsEmpty());
    console.log("deleted:" + testLL.Delete("tasha"));
    console.log(testLL);
    console.log("deleted:" + testLL.Delete("Gadriel"));
    console.log(testLL.Size);
    console.log(testLL);
    console.log("index 0:" + testLL.Index(0));
    console.log("index out of bounds: " + testLL.Index(3));
    console.log("test is present Tasha: " + testLL.IsPresent("Tasha"));
    console.log("test is present Gadriel: " + testLL.IsPresent("Gadriel"));
    testLL.SetAtIndex(1, "bob");
    console.log("test set at: " + testLL.Index(1));
    console.log(testLL);
    console.log("Delete: " + testLL.Delete("Tasha"));
    console.log(testLL);
    testLL.RemoveAt(0);
    console.log("test remove at 0: " + testLL.Index(0));
    console.log("is empty: " + testLL.IsEmpty());
    console.log(testLL);
    testLL.Add("a");
    console.log(testLL);
    testLL.Add("b");
    console.log(testLL);
    testLL.Add("c");
    console.log(testLL);
    testLL.Add("d");
    console.log(testLL);
    testLL.Add("e");
    console.log(testLL);
    console.log("loop detected:" + testLL.DetectLoop());
    console.log("loop detected2: " + testLL.DetectLoop());
    console.log(testLL);
    console.log("inserted" + testLL.Insert(4, "Mave"));
    console.log(testLL);
  }

  /**
   * EVERYTHING IN THIS METHOD IS TESTING CLASSES!!! REMOVE FOR PUBLISH!!!
   */
  public TESTPQ() {
    function CALC(string: string): number {
      let returnVal = 0;

      returnVal = string.charCodeAt(0);

      // for(let i = 0;i< string.length;i++){
      //   returnVal += string.charCodeAt(i);
      // }
      return returnVal;
    }

    let tasha = "Tasha";
    let tashaPriority = CALC(tasha);
    let destiny = "Destiny";
    let destinyPriority = CALC(destiny);
    let nipos = "Nipos";
    let niposPriority = CALC(nipos);
    let zoro = "Zoro";
    let zoroPriority = CALC(zoro);
    let aa = "Aa";
    let aaPriority = CALC(aa);
    let betsy = "Betsy";
    let betsyPrioriy = CALC(betsy);
    let mave = "Mave";
    let mavePriority = CALC(mave);
    let npc: PriorityQueue<string> = new PriorityQueue<string>(true);

    //count - good
    //Dequeue - good
    //Enqueue - good
    //Front - good
    //IsInQueue - good
    //PQueue - good
    console.log(npc.Size);
    npc.Enqueue(tashaPriority, tasha);
    console.log(npc.Size);
    npc.Enqueue(destinyPriority, destiny);
    console.log(npc.Size);
    npc.Enqueue(niposPriority, nipos);
    console.log(npc.Size);
    npc.PQueue();
    npc.Enqueue(zoroPriority, zoro);
    console.log(npc.Size);
    npc.PQueue();
    npc.Enqueue(aaPriority, aa);
    console.log(npc.Size);
    npc.PQueue();
    npc.Enqueue(betsyPrioriy, betsy);
    console.log(npc.Size);
    npc.PQueue();
    npc.Enqueue(mavePriority, mave);
    console.log(npc.Size);
    npc.PQueue();
    console.log("is in queue nipos: " + npc.IsInQueue(nipos));
    console.log("is in queue bb: " + npc.IsInQueue("bb"));
    console.log("TEST FRONT: " + npc.Front());
    console.log("DEQUEUE test " + npc.Dequeue());
    console.log("Dequeue " + npc.Dequeue());
    npc.PQueue();
  }

}
