import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { NPC } from '../models/npc';
import { INPCService } from './Inpc.service';

@Injectable({
  providedIn: 'root'
})
export class NpcDbService implements INPCService {
  npcsUrl: string = "http://localhost:3000/npcs";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':
      'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  GetAll(){
    //fetch npcs from api
    return this.http.get<NPC[]>(this.npcsUrl)
    .pipe(
      catchError(this.handleError<NPC[]>('getNPCs', []))
    );
  }

  Get(id: number){
    //fetch npc by id
    const url = `${this.npcsUrl}/${id}`;
    return this.http.get<NPC>(url)
    .pipe(
      catchError(this.handleError<NPC>(`getNPC id=${id}`))
    );
  }

  Create(npc:NPC){
    //create new npc id provided by api
    return this.http.post<NPC>(this.npcsUrl, npc, this.httpOptions)
    .pipe(
      tap(_=>this.log('NPC added')),
      catchError(this.handleError<NPC>('addNPC'))
    );
  }

  Delete(id: number){
    // delete npc by id
    const url = `${this.npcsUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions)
    .pipe(
      tap(_=>this.log(`NPC id=${id} deleted`)),
      catchError(this.handleError<any>('deleteNPC'))
    );
  }

  Update(id: any, npc: NPC) {
    //update npc by id and pass npc object
    const url = `${this.npcsUrl}/${id}`;
    return this.http.put(url, npc, this.httpOptions )
    .pipe(
      tap(_=>this.log(`NPC id=${id} updated`)),
      catchError(this.handleError<any>('updateNPC'))
    );
  }

  private log(message:string){
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
