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
  private _broad:ICell[][];
  

  constructor() { }

  public getValues():Observable<IValues>{
    return this.broadSubject.asObservable();

  }

  public setValues( values:IValues):void{

    this.broadSubject.next(values);
    this._broad=this.broadSubject.value.size;
    this.setCells()
  }
  public setCells():void{
    this.seed();
    let times=10;
    //while(times--){
      
    //}
    

    //this.shape();
  }
  generate() {
    this._broad.map((o)=>o.map(cell=>{
      if((cell.live==CellType.live)&&(cell.neibord<2)||(cell.neibord>3)){
        cell.live=CellType.dead;
      }
      else if ((cell.live==CellType.dead)&&(cell.neibord==3)){
        cell.live=CellType.dead;
      }
    }))
    //this.toLive(row,column);
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

    let arrLen = this._broad.length;
    let noc = n*(arrLen*arrLen)/100;//random of number of cells with live status.
    while(noc--){
      let rc = this.random(arrLen*arrLen)//random cell set to live 
      let row=Math.floor(rc/arrLen)
      let column=(rc%arrLen)-1;
      if (column<0){
        column=arrLen-1
      }
     // console.log("rc",rc,"r",row,"c",column)
            this.toLive(row,column);

    }

  }
  public random(n:number):number{
   return Math.floor( Math.random()*(n));
  }
  public toLive(rn:number,cn:number):void{
    this._broad[rn][cn].live=CellType.live;
    let thisNeibord=this._broad[rn][cn].neibord;
    


    for (let r of [rn-1,rn,rn+1]){
      for (let c of [cn-1,cn,cn+1]){
        if ((!((r<0)||(r>this._broad.length-1))&&!((c<0)||(c>this._broad.length-1)))&&(r!=rn||c!=cn)){
        //  console.log("r",r,"c",c,this._broad)

          let neibord=this._broad[r][c].neibord;

          this._broad[r][c].neibord++;
        }
      }
    }
  //this._broad[rn][cn].neibord=thisNeibord;
  //console.log(this._broad)

  }
  // public shape():void{
  //   switch(this.broadSubject.value.shape){
  //     case "Rectengular":
  //       let i = Math.floor((this._broad.length-1)/2);
  //       let j=i;
  //       while(i--){
  //         console.log("i",i,"j",j)

  //         //this._broad[j-i][i]={live:CellType.wall}
  //       }
  //       break;
  //     case "Diamond" : 
  //     case "Cross":
  //     case "Circular" :
  //     case "Ring" :
  //   }
  // }
}
