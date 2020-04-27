import { LinkedList } from './LinkedList';
import { isDevMode } from '@angular/core';

class PriorityNode<T>{
    private _priority: number;
    public get Priority(): number { return this._priority; }
    public set Priority(value: number) { this._priority = value; }
    private _object: T;
    public get Object(): T { return this._object; }
    public set Object(value: T) { this._object = value; }

    constructor(priority: number, object: T) {
        this.Priority = priority;
        this.Object = object;
    }
}

/**
 * priority queue implementation
 * @typeparam T - type of object being queued
 */
export class PriorityQueue<T>{

    ///Object Array
    private queue: LinkedList<PriorityNode<T>>;
    public get Size() { return this.queue.Size; }
    private _isMinPriorityQueue: boolean;

    constructor(isMinPriorityQueue: boolean) {
        this._isMinPriorityQueue = isMinPriorityQueue;
        this.queue = new LinkedList<PriorityNode<T>>();
    }

    public Enqueue(priority: number, object: T) {

        //create new node
        var newNode: PriorityNode<T> = new PriorityNode<T>(priority, object);
        var contain = false;

        //iterate through to add element at
        //correct location
        for (let i = 0; i < this.Size; i++) {

            if (this._isMinPriorityQueue) {
                if (this.queue.Index(i).Priority < newNode.Priority) {
                    //Once the correct location is found it is enqueued
                    this.queue.Insert(i, newNode);
                    contain = true;
                    break;
                }
            } else {

                if (this.queue.Index(i).Priority > newNode.Priority) {
                    //Once the correct location is found it is enqueued
                    this.queue.Insert(i, newNode);
                    contain = true;
                    break;
                }
            }
        }

        //if elemenet is highest priority
        //it is added at the end of the queue
        if (!contain) {
            this.queue.Add(newNode);
        }
        this.Sort();
    }

    /**
     * remove element from queue
     * @returns object not node
     */
    public Dequeue(): T {
        var returnVal;

        if (this.isEmpty()) {
            console.error("Queue empty");
            return null;
        }
        if (this._isMinPriorityQueue) {
            let lowest = 0;

            for (let i = 0; i < this.queue.Size; i++) {
                if (this.queue.Index(i).Priority < this.queue.Index(lowest).Priority) {
                    lowest = i;
                }
            }
            returnVal = this.queue.Index(lowest).Object;
            this.queue.RemoveAt(lowest);
        } else {
            let highest = 0;

            for (let i = 0; i < this.queue.Size; i++) {
                if (this.queue.Index(i).Priority > this.queue.Index(highest).Priority) {
                    highest = i;
                }
            }
            returnVal = this.queue.Index(highest).Object;
            this.queue.RemoveAt(highest);
        }
        return returnVal;
    }

    /**
     * Peek function
     */
    public Front(): T {
        if (this.isEmpty()) {
            console.error("Queue empty");
            return null;
        }
        return this.queue.Index(0).Object;
    }

    public IsInQueue(object: T): boolean {
        for (let i = 0; i < this.queue.Size; i++) {
            if (this.queue.Index(i).Object === object) {
                return true;
            }
        }
        return false;
    }

    /**
     * check if empty
     * @returns boolean
     */
    public isEmpty(): boolean {
        return this.queue.Size == 0;
    }

    /**
     * printQueue function
     * prints all elements as priority nodes
     */
    public PQueue() {
        if (isDevMode) {
            console.log("Start debug print PQueue")
            console.log(this.queue);
            for (let i = 0; i < this.queue.Size; i++) {
                console.log(this.queue.Index(i));
            }
            console.log("end PQueue print");
        }
    }

    private Swap(index1: number, index2: number) {
        let temp = this.queue.Index(index1);
        this.queue.SetAtIndex(index1, this.queue.Index(index2));
        this.queue.SetAtIndex(index2, temp);
    }

    private Sort() {
        if (this.isEmpty()) {
            console.error("Queue empty");
            return null;
        }
        if (this._isMinPriorityQueue) {
            let lowest = -1;
            while (lowest != 0) {
                if (lowest = -1) {
                    lowest = 0;
                }
                for (let i = 0; i < this.queue.Size; i++) {
                    if (this.queue.Index(i).Priority < this.queue.Index(lowest).Priority) {
                        this.Swap(lowest, i);
                        lowest = i;
                    }
                }
            }
        } else {
            let highest = -1;
            while (highest != 0) {
                if (highest = -1) {
                    highest = 0;
                }
                for (let i = 0; i < this.queue.Size; i++) {
                    if (this.queue.Index(i).Priority > this.queue.Index(highest).Priority) {
                        this.Swap(highest, i);
                        highest = i
                    }
                }
            }
        }

    }

}