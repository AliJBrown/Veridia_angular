import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NPCNAME } from '../models/npcName';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IGenService } from './igen.service';
import { UrlObject } from '../models/url-object';


@Injectable({
  providedIn: 'root'
})
export class GenService implements IGenService {

  httpOptions = {
    header: new HttpHeaders({
      'content-type':
        'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  async GetName(url: string){
    //fetch name from api
    return this.http.get<NPCNAME>(url)
      .pipe(
        catchError(this.handleError<NPCNAME>(`GetName id=${url}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //handle errors
    return (error: any): Observable<T> => {
      //log error in console
      console.error(error);
      console.error(`${operation} failed`);

      // window.alert(`${operation} failed`);

      //let app continue
      return of(result as T);
    }

  }
}
