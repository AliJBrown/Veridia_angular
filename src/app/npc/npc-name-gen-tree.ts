import * as decisions from './abstract-decision';
import { getLocaleWeekEndRange } from '@angular/common';
import { strictEqual } from 'assert';
import { isDevMode } from '@angular/core';
import { UrlObject } from './models/url-object';

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
                console.info("Race = " + this.compareValue);
                return this.positive.Evaluate(decisionObject);
            }
            else {
                return this.negative.Evaluate(decisionObject);
            }
        } else {
            if (decisionObject.gender.toUpperCase() === this.compareValue) {
                console.info("Gender = " + this.compareValue);
                return this.positive.Evaluate(decisionObject);
            }
            else {
                return this.negative.Evaluate(decisionObject);
            }
        }
    }
}

class NameDecisionResult extends decisions.DecisionResult {

    public Evaluate(decisionObject: NameDecisionObject): any {
        if (isDevMode) {
            console.info(this.result);
        }
        return this.result;
    }
}

/**
 * decision tree to choose which array to pull name from
 */
export class NameGenTree {
    constructor() { }

    // private humanFemaleName = <NameDecisionResult>{ title: "human female", result: "http://localhost:3000/HumanFemaleName" };

    public Evaluate(decisionObject: NameDecisionObject): any {
        //define human male url
        let humanMaleURL = <UrlObject>{};
        humanMaleURL.fURL = "http://localhost:3000/HumanMaleName";
        humanMaleURL.lURL = "http://localhost:3000/HumanFamilyName";
        humanMaleURL.fnum = this.GetRandomInt(30 + 1);
        humanMaleURL.lnum = this.GetRandomInt(63 + 1);

        //define human female url
        let humanFemaleURL = <UrlObject>{};
        humanFemaleURL.fURL = "http://localhost:3000/HumanFemaleName";
        humanFemaleURL.lURL = "http://localhost:3000/HumanFamilyName";
        //random numbers generate ID based on JSON file max items -1
        humanFemaleURL.fnum = this.GetRandomInt(31 + 1);
        humanFemaleURL.lnum = this.GetRandomInt(63 + 1);

        //male decision result, returns url assigned to result
        let humanMaleName: NameDecisionResult = new NameDecisionResult;
        humanMaleName.result = humanMaleURL;
        humanMaleName.title = "human male";

        //test male gender, if yes send to humanMaleName result
        //if no send to NB test
        let humanMale: NameDecisionQuery = new NameDecisionQuery;
        humanMale.type = "GENDER";
        humanMale.compareValue = "MALE";
        humanMale.positive = humanMaleName;
        humanMale.negative = null; //TODO fill in when ready to use NB names

        //female decision result, returns url assigned to result
        let humanFemaleName: NameDecisionResult = new NameDecisionResult;
        humanFemaleName.result = humanFemaleURL;
        humanFemaleName.title = "human female";

        //test female gender, if yes send to humanFemaleName result
        //if no send to male test
        let humanFemale: NameDecisionQuery = new NameDecisionQuery;
        humanFemale.type = "GENDER";
        humanFemale.compareValue = "FEMALE";
        humanFemale.positive = humanFemaleName;
        humanFemale.negative = humanMale;

        //test human race, if yes step to test for female
        //if no step to next race
        let human: NameDecisionQuery = new NameDecisionQuery;
        human.type = "RACE";
        human.compareValue = "HUMAN";
        human.positive = humanFemale;
        human.negative = null; //TODO fill in when ready for next race

        let url: decisions.DecisionResult = human.Evaluate(decisionObject);
        return url;
    }

    private GetRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

}
