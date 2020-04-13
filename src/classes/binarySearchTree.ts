import { isDevMode } from '@angular/core';

/**TODO modify to take more than one search value and match to query object, return url string */

export class Vertex {
    private _sData?: string;
    public get sData(): string {
        return this._sData;
    }
    public set sData(value: string) {
        this._sData = value;
    }
    private _iData?: number;
    public get iData(): number {
        return this._iData;
    }
    public set iData(value: number) {
        this._iData = value;
    }
    private _leftChild: Vertex;
    public get leftChild(): Vertex {
        return this._leftChild;
    }
    public set leftChild(value: Vertex) {
        this._leftChild = value;
    }
    private _rightChild: Vertex;
    public get rightChild(): Vertex {
        return this._rightChild;
    }
    public set rightChild(value: Vertex) {
        this._rightChild = value;
    }

    constructor(intData: number, stringData: string) {
        this.iData = intData;
        this.sData = stringData;
    }
}

export class BinarySearchTree {
    /**root of tree */
    private _root: Vertex;
    /**holds root Vertex of tree */
    public get root(): Vertex {
        return this._root;
    }

    /**store for count */
    private _count: number;
    /**holds count of binary tree Vertexs */
    public get count(): number {
        return this._count;
    }

    constructor() {
        this._root = null;
        this._count = 0;
    }

    /**calls recursive insert
     * @param intData optional number data
     * @param stringData optional string data
     */
    public Insert(intData: number, stringData: string) {
        this._root = this.InsertRec(this._root, intData, stringData);
        this._count++;
    }
    /**recursively inserts Vertex into tree
     * @returns root node
     */
    private InsertRec(root: Vertex, intData: number, stringData: string): Vertex {

        //if empty return new node
        if (root == null) {
            root = new Vertex(intData, stringData);
            return root;
        }

        //otherwise recur down the tree
        if (intData < root.iData) {
            root.leftChild = this.InsertRec(root.leftChild, intData, stringData);
        }
        else if (intData > root.iData) {
            root.rightChild = this.InsertRec(root.rightChild, intData, stringData);
        }
        else {
            console.error("Insert Failed");
        }

        //return unchanged node pointer
        return root;
    }

    /**calls recursive function to traverse in order*/
    public InOrder() {
        this.InOrderRec(this._root);
    }
    // in order traversal of tree & print info to console
    private InOrderRec(root: Vertex) {
        if (root != null) {
            this.InOrderRec(root.leftChild);
            if (isDevMode) {
                console.info(root.iData + " | " + root.sData);
            }
            this.InOrderRec(root.rightChild);
        }
    }

    /**Post Order Traversal (only in dev environment)*/
    public printPostOrder() {
        this.PrintPostOrderRec(this._root);
    }
    private PrintPostOrderRec(vertex: Vertex) {
        if (vertex == null) {
            return;
        }

        //only if development mode
        if (isDevMode) {
            //first recur on left subtree
            this.PrintPostOrderRec(vertex.leftChild);

            //then recur on right subtree
            this.PrintPostOrderRec(vertex.rightChild);

            //now deal with the node

            console.info(vertex.sData + " | " + vertex.iData);
        }
    }

    /**Pre Order Traversal (only in dev environment) */
    public PrintPreOrder() {
        this.PrintPreOrderRec(this._root);
    }
    private PrintPreOrderRec(vertex: Vertex) {
        if (vertex == null) {
            return;
        }

        //only if development mode
        if (isDevMode) {

            //print data of node
            console.info(vertex.sData + " | " + vertex.iData);

            //recur left subtree
            this.PrintPreOrderRec(vertex.leftChild);

            //recur right subtree
            this.PrintPreOrderRec(vertex.rightChild);
        }
    }

    /**
     * Search tree for string value
     * @param searchedValue string to match
     * @returns vertex
    */
    public SearchString(searchedValue: string): Vertex {
        return this.SearchStringRec(this._root, searchedValue);
    }
    //search tree for given key, to be recursive must be called with current
    //vertex pointer
    //initial is this.root
    ///@returns vertex or null if not found in tree
    private SearchStringRec(vertex: Vertex, searchedValue: string): Vertex {
        let temp: Vertex = vertex;
        let compare: number;
        //base case vertex is null or key is present at vertex
        if (temp != null) {
            compare = searchedValue.localeCompare(temp.sData);
            if (compare == 0) {
                return temp;
            }

            //value is greater than root key
            if (compare < 0) {
                return this.SearchStringRec(temp.leftChild, searchedValue);
            }
            else {
                return this.SearchStringRec(temp.rightChild, searchedValue);
            }
        }
        else {
            return null;
        }
    }

    /**
     * search tree for int value
     * @param searchedValue integer to match
     * @returns vertex
     */
    public SearchNumber(searchedValue: number): Vertex {
        return this.SearchNumberRec(this._root, searchedValue);
    }
    //search tree for given key, to be recursive must be called with current
    //vertex pointer
    //initial is this.root
    ///@returns vertex or null if not found in tree
    private SearchNumberRec(vertex: Vertex, searchedValue: number) {
        let temp: Vertex = vertex;
        //base case is null vertex or key matches vertex
        if (temp != null) {
            if (temp.iData == searchedValue) {
                return temp;
            }

            if (temp.iData > searchedValue) {
                return this.SearchNumberRec(temp.leftChild, searchedValue);
            }
            else {
                return this.SearchNumberRec(temp.rightChild, searchedValue);
            }
        }
        else {
            return null;
        }
    }

    public BFS() {
        //TODO need typescript queue then convert this from c#
        // Queue<Node> q = new Queue<Node>();
        // q.Enqueue(_root);

        // while (q.Count > 0)
        // {
        //     Node current = q.Dequeue();
        //     if (current == null)
        //     {
        //         continue;
        //     }
        //     q.Enqueue(current.LeftChild);
        //     q.Enqueue(current.RightChild);
        //     Console.WriteLine(current.SData + " " + current.IData);
        // }
    }

    public DFS() {
        //TODO need typescript stack then convert this from c#
        // Stack<Node> s = new Stack<Node>();
        // s.Push(_root);

        // while (s.Count > 0)
        // {
        //     Node current = s.Pop();
        //     if (current == null)
        //     {
        //         continue;
        //     }
        //     s.Push(current.LeftChild);
        //     s.Push(current.RightChild);
        //     Console.WriteLine(current.SData + " " + current.IData);
        // }
    }
}