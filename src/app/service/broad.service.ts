import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IValues } from '../models/values.interface';
import { SeedType, CellType } from '../models/values-type.enum';
import { ICell } from '../models/cells.interface';
import { TemplatePortalDirective } from '@angular/cdk/portal';
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
    console.log("1",this.broadSubject.value.size)

    //this.shape();
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
    //let noc = n*(arrLen*arrLen)/100;//random of number of cells with live status.
    let noc=1
    while(noc--){
      let rc = this.random(arrLen*arrLen)//random cell set to live status
      //this.toLive(Math.floor(rc/arrLen),rc%arrLen);
            this.toLive(Math.floor(rc/arrLen),rc%arrLen);

    }

  }
  public random(n:number):number{
   return Math.floor( Math.random()*(n));
  }
  public toLive(rn:number,cn:number):void{
    console.log("cell:",this.broadSubject.value.size[rn][cn],"rn:",rn,"cn",cn)

    this.broadSubject.value.size[rn][cn].live=CellType.live;
    console.log("cell:",this.broadSubject.value.size[rn][cn],"rn:",rn,"cn",cn)
    // for (let r of [rn-1,rn,rn+1]){
    //   for (let c of [cn-1,cn,cn+1]){
    //     console.log("r:",r,"c:",c)

    //     if (!(r<0)&&!(c<0)){
    //           console.log("cell:",this.broadSubject.value.size[r][c],"rn:",rn,"cn",cn)
     
    //       this.broadSubject.value.size[r][c].neibord++;
    //     }
    // }
  }
  // public shape():void{
  //   switch(this.broadSubject.value.shape){
  //     case "Rectengular":
  //       let i = Math.floor((this.broadSubject.value.size.length-1)/2);
  //       let j=i;
  //       while(i--){
  //         console.log("i",i,"j",j)

  //         //this.broadSubject.value.size[j-i][i]={live:CellType.wall}
  //       }
  //       break;
  //     case "Diamond" : 
  //     case "Cross":
  //     case "Circular" :
  //     case "Ring" :
  //   }
  // }
}
