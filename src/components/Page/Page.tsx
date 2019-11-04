import * as React from 'react';
import {Map} from '../Map/Map'
import {IBuilding, IEquipment, IEvents, IRoom, isBuilding} from '../../typings';

import './Page.css'

interface IPageProps {
    buildings: IBuilding[];
    equipment: IEquipment[];
    events: IEvents;
}

const matchEquipment = (elem: IRoom | IBuilding, equipment: IEquipment[]): IEquipment[] => {
    elem.equipment = [];

    if (isBuilding(elem)) {
        for (let i in elem.rooms) {
            let eq = matchEquipment(elem.rooms[i], equipment);
            elem.equipment.push(...eq);
        }
    } else {
        if (elem.children) {
            for (let i in elem.children) {
                let eq = matchEquipment(elem.children[i], equipment);
                elem.equipment.push(...eq);
            }
        } else {
            elem.equipment = equipment.filter(e => e.room === elem.id);
        }
    }

    return elem.equipment;
};

export const Page: React.FunctionComponent<IPageProps> = props => {
    for (let p in props.buildings) matchEquipment(props.buildings[p], props.equipment);
    return (
        <div className={'Page'}>
            <Map buildings={props.buildings} equipment={props.equipment} events={props.events}/>
            <div className={'Modal'} />
        </div>
    );
};