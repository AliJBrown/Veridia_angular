import { Observable } from "rxjs";
import { NPCNAME } from "../models/npcName";

/**
 * interface defines CRUD operations for name generator
 *
 * the json db is hosted on port 3000. you can manually make requests to the
 * api by navigating to the routes specified in the readme in your local browser
 *
 * e.g. 'http://localhost:3000/HumanFemaleNames' to retrieve all names for human female
 *
 * To learn more: https://angular.io/tutorial.toh-pt6
 */
export interface IGenService{
  /**
   * Retrieves names by id
   */
  GetName(url:string): Promise<NPCNAME> | Observable<NPCNAME>;
}
