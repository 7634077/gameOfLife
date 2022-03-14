import { PolicyType, SeedType, ShapeType, SizeType, SpeedType, WallsType } from "./values-type.enum"

export interface IValues {
    shape:ShapeType,
    policy:PolicyType,
    size:number,
    speed:SpeedType,
    seed:SeedType,
    walls:WallsType
}