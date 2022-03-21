import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl,Form} from '@angular/forms';
import { IValues } from '../../models/values.interface';
import { ICell } from '../../models/cells.interface'
import { ShapeType,PolicyType,SizeType,SeedType,SpeedType,WallsType  } from '../../models/values-type.enum';
import { BroadService } from 'src/app/service/broad.service';


@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  
  constructor( private broadService : BroadService) { }

  ngOnInit(): void {
  }
  
public sendValues():void{
  let n =Number(this.selectedSize.slice(0,this.selectedSize.length/2));
  const Cell : Boolean[][] = new Array(n).fill(false).map(()=> new Array(n).fill(false))
  const values: IValues ={
  
    shape : this.selectedShape,
    policy : this.selectedPolicy,
    size : Cell,
    speed : this.selectedSpeed,
    seed : this.selectedSeed,
    walls : this.selectedWalls
    }      
    console.log(values.size.length)

    this.broadService.setValues(values);
}

public shape = ShapeType;
public policy = PolicyType;
public size = SizeType;
public speed = SpeedType;
public seed = SeedType;
public walls = WallsType;


public selectedShape = ShapeType.Rectengular;
public selectedPolicy = PolicyType.Conway;
public selectedSize = SizeType['10 x 10'];
public selectedSpeed = SpeedType.Normal;
public selectedSeed = SeedType.Large;
public selectedWalls = WallsType.Alive;



// selectShape(event: Event) {
//   this.values.shape = (event.target as HTMLSelectElement).value as ShapeType;
// }selectPolicy(event: Event) {
//   this.values.policy = (event.target as HTMLSelectElement).value as PolicyType;
// }selectSize(event: Event) {
//   this.values.size = (event.target as HTMLSelectElement).value as unknown as SizeType;
// }selectSpeed(event: Event) {
//   this.values.speed = (event.target as HTMLSelectElement).value as SpeedType;
// }selectSeed(event: Event) {
//   this.values.seed = (event.target as HTMLSelectElement).value as SeedType;
// }selectWalls(event: Event) {
//   this.values.walls = (event.target as HTMLSelectElement).value as WallsType;
//   }
}
