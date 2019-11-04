import * as React from 'react';
import {IEquipment} from '../../typings';

import './Equipments.css';

interface IEquipmentsProps {
    equipment: IEquipment[];
    onClick?: (elem: IEquipment) => () => void;
}

export const Equipments: React.FunctionComponent<IEquipmentsProps> = props => {
    return (<div className={'Equipments'}>
        {props.equipment.map((eq, i) =>
            <div key={i} className={'Equipment'} onClick={props.onClick(eq)}>
                <img className={'Equipment-Image'} src={'src/img/equipment.png'} alt={''} width={50}/>
                <div className={'Equipment-Name'}>{eq.name}:</div>
                <div className={'Equipment-Count'}>{eq.count}</div>
            </div>)}
    </div>);
};