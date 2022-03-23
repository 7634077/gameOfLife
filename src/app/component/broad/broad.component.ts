import { AfterViewInit, Component, Input, OnDestroy, OnInit,SimpleChange } from '@angular/core';
import { BroadService } from '../../service/broad.service';
import { IValues } from '../../models/values.interface';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { CellType, SizeType } from 'src/app/models/values-type.enum';
import { ICell } from 'src/app/models/cells.interface';
@Component({
  selector: 'app-broad',
  templateUrl: './broad.component.html',
  styleUrls: ['./broad.component.scss']
})
export class BroadComponent implements OnInit,OnDestroy {

  public values:IValues ;
  private subscription: Subscription = new Subscription();

  constructor( private broadService : BroadService, private api: ApiService) { }
  
  ngOnInit(): void {
    this.api.getBroad().subscribe((data)=>{
      console.log("data,",data);
    })
    this.subscription.add(
      this.broadService.getValues().subscribe(data => {
        this.values = data;
      })  
    )
    
  }
    
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  public broad ():Array<Array<CellType>>{
    console.log("1",this.values)
    
      let copy =this.values.size.map((o)=>o.map((item)=>item.live));
      console.log("copy",copy)
     return copy;
  }
  counter(i: number) {
    
    
    return new Array(i);
}
}
