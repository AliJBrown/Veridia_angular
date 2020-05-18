import { NPC } from 'src/app/npc/models/npc';

export interface Tavern{

    /**
     * Must be a number, is required for Taverns persisted in backend
     * backend will create this field for you when you CREATE a tavern
     * each tavern will have a unique id.
     */
    id: number;

    /**
     * Required -- must be a string
     */
    name: string;

    /**
     * NPC object for owner
     */
    owner: NPC;

    /**
     * Array of NPC objects for other patrons
     */
    patrons: NPC[];

    //TODO finish tavern requirements

}