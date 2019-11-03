import * as React from 'react';
import {Building} from '../Building/Building';
import {IBuilding, IEquipment, IRoom, isBuilding, Types} from '../../typings';

import './Map.css'
import {Room} from '../Room/Room';
import {Breadcrumbs} from '../Breadcrumbs/Breadcrumbs';
import {Menu} from '../Menu/Menu';

interface IMapProps {
    buildings: IBuilding[];
    equipment: IEquipment[];
}

interface IMapState {
    type: Types;
    children: JSX.Element[];
    cur: null | IBuilding |IRoom;
}

export class Map extends React.Component<IMapProps, IMapState> {
    buildings = this.props.buildings.map((b, i) => <Building key={i} building={b} onClick={() => this.renderChildren(b)}/>);

    renderChildren = (elem: IBuilding | IRoom | null) => {
            let children = null;
            let type = Types.ROOM;
            let cur = null;

            if (elem === null) {
                type = Types.BUILDING;
                children = this.buildings;

            } else if (isBuilding(elem)) {
                cur = elem;
                children = elem.rooms.map((room, i) => {
                    room.parent = elem;
                    if (!room.children && !room.equipment) room.equipment = this.props.equipment.filter((eq) => eq.room === room.id);
                    return <Room key={i} room={room} onClick={() => this.renderChildren(room)}/>;
                })

            } else {
                cur = elem;
                if (elem.children) {
                    children = elem.children.map((room, i) => {
                        room.parent = elem;
                        if (!room.children && !room.equipment) room.equipment = this.props.equipment.filter((eq) => eq.room === room.id);
                        return <Room key={i} room={room} onClick={() => this.renderChildren(room)}
                        />;
                    })
                } else {
                    children = this.state.children;
                    if (!elem.equipment) elem.equipment = this.props.equipment.filter((eq) => eq.room === elem.id)
                }
            }

            this.setState({
                children,
                type,
                cur,
            });
    };

    constructor(props) {
        super(props);
        this.state = {
            children: this.buildings,
            type: Types.BUILDING,
            cur: null,
        };
    }

    render() {
        const {children, type, cur} = this.state;
        console.log('cur', cur);
        return (
            <div className={'Page'} >
                <div className={'Map'}>
                    {type === Types.ROOM ?
                        (<React.Fragment>
                            <Breadcrumbs element={cur} onClick={this.renderChildren}/>
                            <div className={'Back'} onClick={() => this.renderChildren(isBuilding(cur) ? null : cur.parent)}>
                                <img src={'src/img/back.png'} alt={''} width={50} />
                            </div>
                        </React.Fragment>) :
                        null}
                    {children}
                </div>
                {(!cur || isBuilding(cur) || cur.children) ? null : <Menu equipment={this.props.equipment} room={cur}/>}
            </div>
        );
    }
}