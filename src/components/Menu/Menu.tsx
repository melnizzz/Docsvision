import * as React from 'react';
import {IBuilding, IEquipment, IRoom} from '../../typings';

import './Menu.css'

interface IMenuProps {
    elem: IRoom | IBuilding;
    equipment: IEquipment[];
}

export const Menu: React.FunctionComponent<IMenuProps> = props => {
    if (props.elem === null) return null;
    return (
        <div className={'Menu'}>
            <div className={'Menu-Room'}>
                <div className={'Menu-Room-Name'}>{props.elem.name}</div>
                <div className={'Equipments'}>
                    {props.elem.equipment.map((eq, i) =>
                        <div key={i} className={'Equipment'}>
                            <img className={'Equipment-Image'} src={'src/img/equipment.png'} alt={''} width={50} />
                            <div className={'Equipment-Name'}>{eq.name}:</div>
                            <div className={'Equipment-Count'}>{eq.count}</div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};