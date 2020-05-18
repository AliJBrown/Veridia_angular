/**
 * landmark object. this will hold data for landmarks
 */
export interface Landmark{

    /**
     * Must be a number, is required for landmark items persisted in backend
     * backend will create this field for you when you CREATE a landmark
     * each landmark will have a unique id
     */
    id: number;

    /**
     * Required -- must be a string
     */
    name: string;

    /**
     * Required -- must be a string
     * denotes continent its located on
     */
    continent: string;

    //TODO finish landmark requirements

}