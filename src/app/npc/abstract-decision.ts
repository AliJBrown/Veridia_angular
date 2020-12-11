/**
 * allows decision to expect an absract type
 */
export abstract class DecisionObject { }

/**
 * allows tree to expect Decision and hold either query or result
 */
abstract class Decision {
    public abstract Evaluate(decisionObject: DecisionObject);
}

/**
 * class to hold a decision result
 */
export abstract class DecisionResult extends Decision {
    private _title: string;
    get title(): string { return this._title; }
    set title(value: string) { this._title = value; }

    /**store for resulting value */
    private _result: any;
    /**holds value to use as result */
    get result(): any { return this._result; }
    set result(value: any) { this._result = value; }

    /**
     * override to return actual result
     * @param decisionObject
     */
    public abstract Evaluate(decisionObject: DecisionObject);
}

/**
 * class to hold decision query
 */
export abstract class DecisionQuery extends Decision {
    /**store for type */
    private _type:string;
    /**hold a type to define if more than one value needs compared on an object in the tree*/
    get type(): string { return this._type;}
    set type(value:string){this._type = value;}
    /**store for compareValue */
    private _compareValue: string;
    /**exact value to compare object parameter to*/
    get compareValue(): string { return this._compareValue; }
    set compareValue(value: string) { this._compareValue = value; }

    /**store for positive value*/
    private _positive: Decision;
    /**holds next node resulting from positive decision*/
    get positive(): Decision { return this._positive; }
    set positive(value: Decision) { this._positive = value; }

    /**store for negative value */
    private _negative: Decision;
    /**holds next node resulting from negative decision*/
    get negative(): Decision { return this._negative; }
    set negative(value: Decision) { this._negative = value; }

    /**
     * override to evaluate actual object
     * @param decisionObject
     */
    public abstract Evaluate(decisionObject: DecisionObject);
}