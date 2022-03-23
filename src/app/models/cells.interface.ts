import { CellType } from "./values-type.enum";
export interface ICell {
    live:CellType,
    neibord:number
}
export interface ICell1 {
    live:string,
    neibord:number
}