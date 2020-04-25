import { Queue, LinkedList } from './LinkedList';
import { switchMap } from 'rxjs/operators';

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
    private queue: LinkedList<PriorityNode<T>> = new LinkedList<PriorityNode<T>>();
    private _heapSize:number;
    private _isMinPriorityQueue:boolean;

    private _count:number;
    public get Count():number{return this._count;}

    /**
     * constructor
     * @param isMinPriorityQueue
     */
    constructor(isMinPriorityQueue:boolean)
    {
        this._isMinPriorityQueue = isMinPriorityQueue;
    }

    /**
     * Enqueue an object with priority
     * @param priority
     * @param object
     */
    public Enqueue(priority:number,object:T){
        let node:PriorityNode<T> = new PriorityNode<T>(priority,object);
        this.queue.Add(node);
        this._heapSize++;
        //Maintain heap
        if(this._isMinPriorityQueue){
            this.BuildHeapMin(this._heapSize);
        }
        else{
            this.BuildHeapMax(this._heapSize);
        }
    }

    /**
     * Dequeue an object
     * @returns object of type 'T'
     */
    public Dequeue():T{
        if(this._heapSize > -1){
            var returnVal = this.queue.Index(0).Object;
            this.queue.SetAtIndex(0,this.queue.Index(this._heapSize));
            this.queue.RemoveAt(this._heapSize);
            this._heapSize--;

            //maintain lowest or highest at root based on min or max queue
            if(this._isMinPriorityQueue){
                this.MinHeapify(0);
            }else{
                this.MaxHeapify(0);
            }

            return returnVal;
        }else{
             console.error('Queue is Empty');
        }
    }

    /**
     * update priority of a specific object
     * @param object - object to update
     * @param priority - new priority
     */
    public UpdatePriority(object:T, priority:number){
        for (let i = 0; i <= this._heapSize; i++){
            let node:PriorityNode<T> = this.queue.Index(i);
            if(node.Object === object){
                node.Priority = priority;
                if(this._isMinPriorityQueue){
                    this.BuildHeapMin(i);
                    this.MinHeapify(i);
                }else{
                    this.BuildHeapMax(i);
                    this.MaxHeapify(i);
                }
            }
        }
    }

    /**
     * check if an object is in queue
     * @param object - object to search for
     * @returns boolean
     */
    public IsInQueue(object:T):boolean{
        for(let i = 0; i < this._heapSize; i++){
            if(this.queue.Index(i).Object === object){
                return true;
            }
        }
        return false;
    }

    /**
     * maintain max heap
     * @param i - index
     */
    private BuildHeapMax(i:number):void{
        while(i >= 0 && this.queue.Index((i - 1) / 2).Priority < this.queue.Index(i).Priority);
        this.Swap(i, (i-1) / 2);
        i = (i-1) / 2;
    }

    /**
     * maintain min heap
     * @param i - index
     */
    private BuildHeapMin(i:number):void{
        while(i >= 0 && this.queue.Index((i-1) / 2).Priority > this.queue.Index(i).Priority){
            this.Swap(i, (i-1)/2);
            i = (i-1)/2;
        }
    }

    /**
     * heapify array max at root
     * @param i - index
     */
    private MaxHeapify(i:number){
        let left:number = this.ChildL(i);
        let right:number = this.ChildR(i);

        let highest:number = i;

        if(left <= this._heapSize && this.queue.Index(highest).Priority < this.queue.Index(left).Priority){
            highest = left;
        }
        if(right <= this._heapSize && this.queue.Index(highest).Priority < this.queue.Index(right).Priority){
            highest = right;
        }

        if(highest != i)
        {
            this.Swap(highest,i);
            this.MaxHeapify(highest);
        }
    }

    /**
     * heapify array min at root
     * @param i - index
     */
    private MinHeapify(i:number){
        let left:number = this.ChildL(i);
        let right:number = this.ChildR(i);

        let lowest = i;

        if(left <= this._heapSize && this.queue.Index(lowest).Priority > this.queue.Index(left).Priority){
            lowest = left;
        }
        if(right <= this._heapSize && this.queue.Index(lowest).Priority > this.queue.Index(right).Priority){
            lowest = right;
        }

        if (lowest != i)
        {
            this.Swap(lowest, i);
            this.MinHeapify(lowest);
        }
    }

    /**
     * swap queue items
     * @param i - index 1
     * @param j - index 2
     */
    private Swap(i:number, j:number):void{
        var temp = this.queue.Index(i);
        this.queue.SetAtIndex(i,this.queue.Index[j]);
        this.queue.SetAtIndex(j,temp);
    }

    private ChildL(i:number):number{
        return i * 2 + 1;
    }

    private ChildR(i:number):number{
        return i * 2 + 2;
    }

}