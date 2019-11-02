export interface IRoom {
    id: string;
    name: string;
    children?: IRoom[];
    parent?: IRoom | IBuilding;
}

export interface IBuilding {
    name: string;
    rooms: IRoom[];

    createdAt: Date;
    updatedAt: Date;
}

export function isBuilding(value: IBuilding | IRoom): value is IBuilding {
    return 'rooms' in value;
}

export interface IEquipment {
    count: number;
    name: string;
    room: string;
    _id: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface IData {
    buildings: IBuilding[];
    equipment: IEquipment[];
}

export const enum Types {
    BUILDING = 'building',
    ROOM = 'room',
}

