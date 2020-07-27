import { Observable } from "rxjs";
import { City } from "../models/city";

/**
 * An interface that defines basic CRUD operations to minultate npc objects.
 * You should implement this interface in a new service whose sole responsibily is
 * to interact with the mocked "backend". You can interface with the json db using angular's http library.
 *
 * The json db is hosted on port 3000. You can manually make requests to the "database" by
 * navigating to the routes specified in the readme in your local browser
 *
 * e.g. `http://localhost:3000/cities` to retreive all cities.
 *
 * To learn more: https://angular.io/tutorial/toh-pt6   https://github.com/typicode/json-server
 */

export interface ICityService {

  /**
   * Retrieves all cities from the list
   */
  GetAll(): Promise<City[]> | Observable<City[]>;

  /**
   * Retrieves a city from the list
   * @param id ID of the City to retrieve
   */
  Get(id:number): Promise<City> | Observable<City>;

  /**
   * Creates a new city
   * @param city The city object to create & add to the list
   */
  Create(city: City): Promise<City> | Observable<City>;

  /**
   * Removes a city
   * @param id ID of the city you want to remove
   */
  Delete(id: number): Promise<boolean> | Observable<boolean>;

  /**
   * Updates a city
   * @param id ID of the city you want to update
   * @param city the updated city (all fields must be present)
   */
  Update(id: number, city: City): Promise<City> | Observable<City>;
}
