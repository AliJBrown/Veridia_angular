import * as decisions from './abstract-decision';
import { getLocaleWeekEndRange } from '@angular/common';
import { strictEqual } from 'assert';

export class NameDecisionObject extends decisions.DecisionObject {
    /**store for race*/
    private _race: string;
    /**holds race value*/
    get race(): string { return this._race; }
    set race(value: string) { this._race = value; }

    /**store for gender*/
    private _gender: string;
    /**holds gender value*/
    get gender(): string { return this._gender; }
    set gender(value: string) { this._gender = value; }
}

class NameDecisionQuery extends decisions.DecisionQuery {

    public Evaluate(decisionObject: NameDecisionObject): any {
        if (this.type.toUpperCase() === "RACE") {
            if (decisionObject.race.toUpperCase() === this.compareValue) {
                console.info("race = human");
                return this;//.positive.Evaluate(decisionObject);
            }
            else {
                this.negative.Evaluate(decisionObject);
            }
        } else {
            if (decisionObject.gender.toUpperCase() === this.compareValue) {
                console.info("gender = female");
                this.positive.Evaluate(decisionObject);
            }
            else {
                this.negative.Evaluate(decisionObject);
            }
        }
    }
}

class NameDecisionResult extends decisions.DecisionResult {

    public Evaluate(decisionObject: NameDecisionObject): string {
        console.info(this.result);
        return this.result;
    }
}

/**
 * decision tree to choose which array to pull name from
 */
export class NameGenTree {
    constructor(){}

    // private humanFemaleName = <NameDecisionResult>{ title: "human female", result: "http://localhost:3000/HumanFemaleName" };

    public Evaluate(decisionObject: NameDecisionObject): any {
        let humanFemaleURL: string = "http://localhost:3000/HumanFemaleName";

        let humanFemaleName: NameDecisionResult = new NameDecisionResult;
        humanFemaleName.result = humanFemaleURL;
        humanFemaleName.title = "human female";

        let humanFemale: NameDecisionQuery = new NameDecisionQuery;
        humanFemale.type = "GENDER"
        humanFemale.compareValue = "FEMALE";
        humanFemale.positive = humanFemaleName;
        humanFemale.negative = null;

        let human: NameDecisionQuery = new NameDecisionQuery;
        human.type = "RACE";
        human.compareValue = "HUMAN";
        human.positive = humanFemale;
        human.negative = null;

        human.Evaluate(decisionObject);

        // let test = human;
        // let hold = test;
        // while (test instanceof NameDecisionQuery) {
        //     hold = test;
        //     test = test.Evaluate(decisionObject);
        // }

        // let url =  hold.Evaluate(decisionObject);
        // console.info(url);
    }

}
