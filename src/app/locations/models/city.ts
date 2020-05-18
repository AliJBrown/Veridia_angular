import { Tavern } from './tavern';
import { Shop } from './shop';

/**
 * city object. this will hold data for cities
 */
export interface City{
    /**
     * Must be a number, is required for city items persisted in backend
     * backend will create this field for you when you CREATE a city
     * each city will have a unique id
     */
    id: number;

    /**
     * Required -- must be a string
     */
    name: string;

    /**
     * Required -- must be string
     * denotes continent its located on
     */
    continent: string;

    /**
     * String denoting government type
     */
    government: string;

    /**
     * array of taverns connected to this city
     */
    taverns: Tavern[];

    /**
     * array of shops connected to this city
     */
    shops: Shop[];

        //TODO add collections for shops/taverns/npcs etc
}