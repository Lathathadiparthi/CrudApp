import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudAppService {

  AppUrl="https://jsonplaceholder.typicode.com/users"
   

  constructor(private _http:HttpClient ) { }

  GetUsers():Observable<any> {
    return this._http.get(this.AppUrl);
  }

  searchByName(name: any): Observable<any> {
    return this._http.get(`${this.AppUrl}?name=${name}`);
  }

    Add(data: { name: string; email: string; city: string; company_name: string; }): Observable<any> {
     return this._http.post(this.AppUrl, data);
   } 

   delete(id: any): Observable<any> {
     return this._http.delete(`${this.AppUrl}/${id}`);
   }

}
