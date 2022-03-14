import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IValues } from '../models/values.interface';

@Injectable({
  providedIn: 'root'
})
export class BroadService {
  
  public random:number = Math.floor( Math.random()*100 );
  private broadSubject: BehaviorSubject<IValues> = new BehaviorSubject(null);
  private _values!: IValues;

  constructor() { }

  public getValues():Observable<IValues>{
    return this.broadSubject.asObservable();
  }

  public setValues( values:IValues):void{
    this.broadSubject.next(values);
  }
}
