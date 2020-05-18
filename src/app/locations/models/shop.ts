import { NPC } from 'src/app/npc/models/npc';

/**
 * shop object, holds data for shops
 */
export interface Shop{

    /**
     * Required for any shop persisted in the backend
     * backend will assign this for you
     */
    id: number;

    /**
     * Required -- must be a string
     */
    name: string;

    /**
     * Required -- must be a string
     * denotes type of store
     */
    type: string;

    /**
     * NPC object to hold owner
     */
    owner: NPC;
}