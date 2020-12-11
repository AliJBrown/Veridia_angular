import { Observable } from "rxjs";
import { NPC } from "../models/npc";

/**
 * An interface that defines basic CRUD operations to minultate npc objects.
 * You should implement this interface in a new service whose sole responsibily is
 * to interact with the mocked "backend". You can interface with the json db using angular's http library.
 *
 * The json db is hosted on port 3000. You can manually make requests to the "database" by 
 * navigating to the routes specified in the readme in your local browser
 *
 * e.g. `http://localhost:3000/npcs` to retreive all npcs.
 *
 * To learn more: https://angular.io/tutorial/toh-pt6   https://github.com/typicode/json-server
 */
export interface INPCService {
  /**
   * Retreives all npcs from the list
   */
  GetAll(): Promise<NPC[]> | Observable<NPC[]>;

  /**
   * Retreives a npc from the list
   * @param id Id of the npc to retreive
   */
  Get(id: number): Promise<NPC> | Observable<NPC>;

  /**
   * Creates a new npc
   * @param npc The npc object to create & add to list
   */
  Create(npc: NPC): Promise<NPC> | Observable<NPC>;

  /**
   * Removes a npc
   * @param id Id of the npc you want to remove
   */
  Delete(id: number): Promise<boolean> | Observable<boolean>;

  /**
   * Updates a npc
   * @param id Id of the npc you want to update
   * @param npc the updated npc (all fields must be present)
   */
  Update(id: number, npc: NPC): Promise<NPC> | Observable<NPC>;
}
