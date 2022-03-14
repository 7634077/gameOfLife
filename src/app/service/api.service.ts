import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IValues } from '../models/values.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }
  public getBroad(): Observable<IValues>{
    const url: string="https://localhost:44350/api/Person";
    return this.http.get(url, {}) as Observable<IValues>;
  }
}
