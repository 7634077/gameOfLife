import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IValues } from '../models/values.interface';
import { SeedType } from '../models/values-type.enum';
@Injectable({
  providedIn: 'root'
})
export class BroadService {
  
  private broadSubject: BehaviorSubject<IValues> = new BehaviorSubject(null);
  private _values!: IValues;
  private _broad!: Boolean[][];

  constructor() { }

  public getValues():Observable<IValues>{
    return this.broadSubject.asObservable();

  }

  public setValues( values:IValues):void{

    this.broadSubject.next(values);
    this.setCells()
  }
  public setCells():void{
    this.seed();
    this.shape();
  }
  public seed (): void{

    let n:number=0 ;
    switch (this.broadSubject.value.seed){
      case "Low":
        n=this.random(10);
        break;
    case "Medium":
        n=this.random(30);
        break;
    case "Large":
        n=this.random(50);
        break;
    }

    let arrLen = this.broadSubject.value.size.length;
    let noc = n*(arrLen*arrLen)/100;//random of number of cells with live status.
    while(noc--){
      let rc = this.random(arrLen*arrLen)//random cell set to live status
      this.broadSubject.value.size[Math.floor(rc/arrLen)][rc%arrLen]=true;
    }

  }
  public random(n:number):number{
   return Math.floor( Math.random()*(n));
  }

  public shape():void{
    
  }
}
