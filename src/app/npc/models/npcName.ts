/**
 * name object for NPCs. this will hold data for naming npcs from generator
 */
export interface NPCNAME {

    /**
     * Must be a number, is required for npc names persisted in backend
     * backend will create this field for you when you CREATE an npcName
     * each npcName will have a unique id.
     */
    id: number;

    /**
     * Required -- must be a string
     */
    name: string;
}