export interface IRoom {
    id: string;
    name: string;
    children?: IRoom[];
    parent?: IRoom | IBuilding;
    equipment?: IEquipment[];
}

export interface IBuilding {
    name: string;
    rooms: IRoom[];
    equipment?: IEquipment[];

    createdAt: Date;
    updatedAt: Date;
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

export interface IEvents {
    addEquipment: (name: string, room: string, count: number) => void;
    deleteEquipment: (id: string) => void;
    updateEquipment: (id: string, name: string, count: number) => void;
}

export const enum Types {
    BUILDING = 'building',
    ROOM = 'room',
}

export function isBuilding(value: IBuilding | IRoom): value is IBuilding {
    return 'rooms' in value;
}


