import { CellType } from "./values-type.enum";
export interface ICell {
    live:CellType,
    neibord:number
}