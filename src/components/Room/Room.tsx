import * as React from 'react';
import {IRoom} from '../../typings';

import './Room.css'

interface IRoomProps {
    room: IRoom;
    onClick: React.MouseEventHandler;
}

export const Room: React.FunctionComponent<IRoomProps> = props => {
    return (
        <div className={'Room'} onClick={props.onClick}>
            <img className={'Room-Image'} src={'src/img/room.png'} alt={''} width={150} />
            <div className={'Room-Name'}>
                {props.room.name}
            </div>
        </div>
    );
};