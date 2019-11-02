import * as React from 'react';
import {IBuilding} from '../../typings';

import './Building.css'

interface IBuidingProps {
    building: IBuilding;
    onClick: React.MouseEventHandler;
}

export const Building: React.FunctionComponent<IBuidingProps> = props => {
    return (
        <div className={'Building'} onClick={props.onClick}>
            <img className={'Building-Image'} src={'src/img/building.png'} alt={''} width={150} />
            <div className={'Building-Name'}>
                {props.building.name}
            </div>
        </div>
    );
};