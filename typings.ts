export interface IRoom {
    id: string;
    name: string;
}

export interface IFloor {
    id: string;
    name: string;
    children: IRoom[];
}

export interface IBuilding {
    name: string;
    rooms: IRoom[] | IFloor[];

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
