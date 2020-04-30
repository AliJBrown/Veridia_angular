import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NPCNAME } from '../models/npcName';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IGenService } from './igen.service';


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


  GetName(url: string) {
    //fetch name from api
    const r = this.GetRandomInt(17);
    const urlEnd = `${url}/${r}`;

    //TODO test line
    console.log(urlEnd);

    return this.http.get<NPCNAME>(urlEnd)
      .pipe(
        catchError(this.handleError<NPCNAME>(`GetName id=${r}`))
      );
  }

  private GetRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
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
