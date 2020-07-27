import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';

import { City } from '../models/city';
import { ICityService}  from './icity.service';

@Injectable({
  providedIn: 'root'
})
export class CityDbService implements ICityService {
  citiesUrl: string = "http://localhost:3000/City";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':
      'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  GetAll(){
    //fetch cities from api'
    return this.http.get<City[]>(this.citiesUrl)
    .pipe(
      catchError(this.handleError<City[]>('getCities', []))
    );
  }

  Get(id: number){
    //fetch city by id
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get<City>(url)
    .pipe(
    catchError(this.handleError<City>(`getCity id=${id}`))
    );
  }

  Create(city:City){
    //create new city id provided by api
    return this.http.post<City>(this.citiesUrl, city, this.httpOptions)
    .pipe(
      tap(_=>this.log('City Added')),
      catchError(this.handleError<City>('addCity'))
    );
  }

  Delete(id:number){
    //delete city by id
    const url = `${this.citiesUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions)
    .pipe(
      tap(_=>this.log(`City id=${id} deleted`)),
      catchError(this.handleError<any>('deleteCity'))
    );
  }

  Update(id: any, city: City) {
    //update city by id and pass city object
    const url = `${this.citiesUrl}/${id}`;
    return this.http.put(url, city, this.httpOptions)
    .pipe(
      tap(_=>this.log(`City id=${id} updated`)),
      catchError(this.handleError<any>('updateCity'))
    );
  }

  private log(message: string){
    //pop window of browser with alert message
    window.alert(message);
  }

  private handleError<T>(operation = 'operation', result?: T){
    //handle errors
    return (error: any): Observable<T> => {
      //log error in console
      console.error(error);

      window.alert(`${operation} failed`);

      //let app continue
      return of(result as T);
    }

  }
}
