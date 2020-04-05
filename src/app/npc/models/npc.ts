/**
 * npc object. this will hold data for npcs
 */
export interface NPC {

    /**
     * Must be a number, is required for npc items persisted in backend
     * backend will create this field for you when you CREATE an npc
     * each npc will have a unique id.
     */
    id: number;

    /**
     * Required -- must be a string
     */
    name: string;

    /**
     * String denoting gender
     */
    gender: string;

    /**
     *Must be a string
     */
    race: string;

    /**
     *Required -- Must be a number
     */
    str: number;

    /**
     * Required -- Must be a number
     */
    dex: number;

    /**
     * Required -- Must be a number
     */
    con: number;

    /**
     * Required -- Must be a number
     */
    int: number;

    /**
     * Required -- Must be a number
     */
    wis: number;

    /**
     * Required -- must be a number
     */
    cha: number;

    /**
     * Required -- must be a number
     */
    age: number;

    /**
     * must be a string to describe hair style and color
     */
    hair: string;

    /**
     * must be a string to describe skin tone
     */
    skin: string;

    /**
     * must be a string in the format #'#"
     */
    height: string;

    /**
     * must be a string to describe body type
     */
    build: string;

    /**
     * must be a string to describe face
     */
    face: string;

    /**
     * must be a string to describe how they smell
     */
    smell: string;

    /**
     * must be a string for god and worship style
     */
    faith: string;

    /**
     * must be a string to describe garb
     */
    garb: string;

    /**
     * must be a string for remaining description
     */
    description: string;

    /**
     * must be a string to describe personality
     */
    personality: string;

    /**
     * must be a string
     */
    alignment: string;

    /**
     * must be a string to offer plothooks
     */
    plothook: string;

    /**
     * must be a string, will be searchable to connect to
     * groups of people
     */
    people: string;

    /**
     * must be a string, will be searchable to connect to
     * various locations
     */
    location: string;

    /**
     * must be a string, will hold all other info
     */
    notes: string;

    /**
     * boolean for dead or alive
     */
    deceased: boolean;
}