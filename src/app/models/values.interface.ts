import { PolicyType, SeedType, ShapeType, SizeType, SpeedType, WallsType } from "./values-type.enum"
import { ICell} from "./cells.interface"

export interface IValues {
    shape:ShapeType,
    policy:PolicyType,
    size:Boolean[][],
    speed:SpeedType,
    seed:SeedType,
    walls:WallsType
}