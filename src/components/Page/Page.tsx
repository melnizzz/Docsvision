import * as React from 'react';
import {Map} from '../Map/Map'
import {IBuilding, IEquipment} from '../../typings';

import './Page.css'

interface IPageProps {
    buildings: IBuilding[];
    equipment: IEquipment[];
}

export const Page: React.FunctionComponent<IPageProps> = props => {
    return (
        <div className={'Page'}>
            <Map buildings={props.buildings} equipment={props.equipment} />
            {/*<div className={'Menu'} />*/}
        </div>
    );
};