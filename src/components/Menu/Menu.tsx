import * as React from 'react';
import {IEquipment, IRoom} from '../../typings';

import './Menu.css'

interface IMenuProps {
    room: IRoom;
    equipment: IEquipment[];
}

export const Menu: React.FunctionComponent<IMenuProps> = props => {
    let equipment = props.equipment.filter((eq) => eq.room === props.room.id);

    return (
        <div className={'Menu'}>
            <div className={'Menu-Room'}>{props.room.name}</div>
            <div className={'Equipments'}>
                {equipment.map((eq, i) =>
                    <div key={i} className={'Equipment'}>
                        <img className={'Equipment-Image'} src={'src/img/equipment.png'} alt={''} width={50} />
                        <div className={'Equipment-Name'}>{eq.name}:</div>
                        <div className={'Equipment-Count'}>{eq.count}</div>
                    </div>)}
            </div>
        </div>
    );
};