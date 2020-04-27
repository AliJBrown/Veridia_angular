import { isDevMode } from "@angular/core";
import { first } from 'rxjs/operators';

class Node<T>{
    private _object: T;
    public get Object(): T { return this._object; }
    public set Object(value: T) { this._object = value; }

    private _index?: number;
    public get Index(): number { return this._index; }
    public set Index(value: number) { this._index = value; }

    private _next: Node<T>;
    public get Next(): Node<T> { return this._next; }
    public set Next(value: Node<T>) { this._next = value; }

    private _previous: Node<T>;
    public get Previous(): Node<T> { return this._previous; }
    public set Previous(value: Node<T>) { this._previous = value; }

    private _visited: boolean;
    public get Visited(): boolean { return this._visited; }
    public set Visited(value: boolean) { this._visited = value; }

    constructor(object: T) {
        this.Object = object;
    }
}

export class LinkedList<T>{
    private _first: Node<T>;
    private _last: Node<T>;
    private _size: number;
    public get Size(): number { return this._size; }

    constructor() {
        this._size = 0;
    }

    public Add(object: T): T {

        let temp: Node<T> = new Node<T>(object);
        temp.Previous = this._last;
        temp.Next = null;
        temp.Index = this.Size;

        this._size++;

        if (this._first == null) {
            temp.Previous = null;
            this._first = temp;
            this._last = this._first;

        }
        else {
            let previous: Node<T> = this._last;
            this._last = temp;
            previous.Next = this._last;
        }

        return this._last.Object;
    }

    public Delete(object: T): boolean {
        let deleted: boolean = false;
        let temp: Node<T> = this._first;
        if (temp == null) {
            return false;
        }
        while (temp != null) {
            if (temp.Object === object) {
                if (this._first === temp && this._last === temp) {
                    this._first = null;
                    this._last = null;
                    this._size = 0;
                    break;
                } else if (this._first === temp) {
                    this._first = this._first.Next;
                }
                if (temp.Next != null) {
                    temp.Next.Previous = temp.Previous;
                }
                if (temp.Previous != null) {
                    temp.Previous.Next = temp.Next;
                }
                this._size--;
                deleted = true;
            }
            if (deleted) {
                temp.Index -= 1;
            }
            temp = temp.Next;
        }
        return deleted;
    }

    public RemoveAt(i: number): boolean {
        let deleted: boolean = false;
        let temp: Node<T> = this._first;
        while (temp != null) {
            if (temp.Index === i) {
                if (this._first === temp && this._last === temp) {
                    this._first = null;
                    this._last = null;
                    this._size = 0;
                    break;
                } else if (this._first === temp) {
                    this._first = this._first.Next;
                }
                if (temp.Next != null) {
                    temp.Next.Previous = temp.Previous;
                }
                if (temp.Previous != null) {
                    temp.Previous.Next = temp.Next;
                }
                this._size--;
                deleted = true;
            }
            if (deleted) {
                temp.Index -= 1;
            }
            temp = temp.Next;
        }
        return deleted;
    }

    public SetAtIndex(i: number, object: T) {
        let temp: Node<T> = this._first;
        while (temp != null) {
            if (temp.Index == i) {
                temp.Object = object;
                break;
            }
            temp = temp.Next;
        }

    }

    /**
     * insert object after index
     * @param index - index to insert after
     * @param object - object to insert
     */
    public Insert(index: number, object: T): boolean {
        let temp: Node<T> = this._first;
        let newNode: Node<T> = new Node<T>(object);
        let inserted: boolean = false;
        while (temp != null) {
            if (temp.Index == index) {
                newNode.Previous = temp;
                if(this._last !== temp){
                newNode.Next = temp.Next;
                temp.Next.Previous = newNode;
                }else{
                    this._last = newNode;
                }
                temp.Next = newNode;
                inserted = true;
                temp = temp.Next;
                temp.Index = index;
                this._size++;
            }
            if (inserted) {
                temp.Index++;
            }
            temp = temp.Next;
        }
        return inserted;
    }


    public Index(i: number): T {
        let temp: Node<T> = this._first;

        if (temp == null) {

            if (isDevMode) {
                console.error("no such index in LinkedList")
            }

            return null;
        }

        while (temp != null) {
            if (temp.Index == i) {
                return temp.Object;
            }
            temp = temp.Next;
        }
        return null;
    }

    public DetectLoop(): boolean {
        //returns true if loop detected
        let detected: boolean = false;
        let temp: Node<T> = this._first;
        while (temp != null) {
            if (temp.Visited == true) {
                detected = true;
                temp = this._first;
                while (temp != null) {
                    temp.Visited = false;
                    temp = temp.Next;
                }
                break;
            }
            else {
                temp.Visited = true;
                temp = temp.Next;
            }
        }
        temp = this._first;
        while (temp != null) {
            temp.Visited = false;
            temp = temp.Next;
        }
        return detected;
    }

    public IsPresent(objectToFind: T): boolean {
        let temp: Node<T> = this._first;
        if (temp == null) {
            return false;
        }
        while (temp != null) {
            if (temp.Object === objectToFind) {
                return true;
            }
            temp = temp.Next;
        }
        return false;
    }

    public IsEmpty(): boolean {
        return this._first == null;
    }
}

//TODO TEST CLASS
export class Queue<T>{
    private _first: Node<T>;
    private _last: Node<T>;

    constructor() { }

    public Enqueue(object: T): T {
        //TODO double check functioning correctly on previous
        let temp: Node<T> = new Node<T>(object);
        temp.Previous = this._last;
        temp.Next = null;

        if (this._first == null) {
            this._first = temp;
            this._last = this._first;
        }
        else {
            let previous: Node<T> = this._last;
            this._last = temp;
            previous.Next = this._last;
        }

        return this._last.Object;
    }

    public Dequeue(): T {
        //check for empty
        if (this._first == null) {
            if (isDevMode) {
                console.debug('Queue Empty')
            }
            return null;
        }
        let result: Node<T> = this._first;
        this._first = this._first.Next;

        return result.Object;
    }

    public Peek(): T {
        return this._first.Object;
    }

    public DetectLoop(): boolean {
        //returns true if loop detected
        let detected: boolean = false;
        let temp: Node<T> = this._first;
        while (temp != null) {
            if (temp.Visited == true) {
                detected = true;
                break;
            }
            else {
                temp.Visited = true;
                temp = temp.Next;
            }
        }
        return detected;
    }

    public Print(): void {
        if (isDevMode) {
            let temp: Node<T> = this._first;
            if (temp == null) {
                console.error('Empty List');
            }
            else {
                while (temp != null) {
                    console.debug("", temp.Object)

                    temp = temp.Next;
                }
            }
        }
    }

    public Size(): number {
        let temp: Node<T> = this._first;
        let count: number = 0;
        while (temp != null) {
            count++;
            temp = temp.Next;
        }
        return count;
    }

    public IsEmpty(): boolean {
        return this._first == null;
    }
}

//TODO TEST CLASS
export class Stack<T>{
    private _first: Node<T>;

    constructor() { }

    public Push(object: T): void {

        //create new node
        let temp: Node<T> = new Node<T>(object);
        temp.Previous = null;
        temp.Next = this._first;

        //if empty
        if (this._first == null) {
            this._first = temp;
        } else {
            this._first.Previous = temp;
            this._first = temp
        }
    }

    public Pop(): T {
        //check for empty
        if (this._first == null) {
            if (isDevMode) {
                console.error("List Empty");
            }
            return null;
        }

        let temp: Node<T> = this._first;
        if (isDevMode) {
            console.log("node removed from list")
        }
        this._first = this._first.Next;
        this._first.Previous = null;

        return temp.Object;
    }

    public Peek(): T {
        return this._first.Object;
    }

    //loop detector returns true if there is a loop
    public DetectLoop(): boolean {
        let detected: boolean = false;
        let temp: Node<T> = this._first;
        while (temp != null) {
            if (temp.Visited == true) {
                detected = true;
                break;
            }
            else {
                temp.Visited = true;
                temp = temp.Next;
            }
        }
        return detected;
    }

    public Print(): void {
        if (isDevMode) {
            let temp: Node<T> = this._first;
            if (temp == null) {
                console.error('Empty List');
            }
            else {
                while (temp != null) {
                    console.debug("", temp.Object)

                    temp = temp.Next;
                }
            }
        }
    }

    public Size(): number {
        let temp: Node<T> = this._first;
        let count: number = 0;
        while (temp != null) {
            count++;
            temp = temp.Next;
        }
        return count;
    }

    public IsEmpty(): boolean {
        return this._first == null;
    }
}