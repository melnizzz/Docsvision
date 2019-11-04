import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Equipments} from '../Equipments/Equipments';
import {Editor} from '../Editor/Editor';
import {IBuilding, IEquipment, IEvents, IRoom, isBuilding} from '../../typings';

import './Menu.css'

interface IMenuProps {
    elem: IRoom | IBuilding;
    equipment: IEquipment[];
    events: IEvents;
}

export const Menu: React.FunctionComponent<IMenuProps> = props => {
    const openEditor = (elem: IEquipment | null) => () => {
        ReactDOM.render(
            //@ts-ignore see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
            <Editor room={props.elem as IRoom} elem={elem} events={props.events} onClose={closeEditor}/>,
            document.getElementsByClassName('Modal')[0]
        );
    };

    const closeEditor = () => {
        ReactDOM.render(
            null,
            document.getElementsByClassName('Modal')[0]
        );
    };

    if (props.elem === null) return null;
    return (
        <div className={'Menu'}>
            <div className={'Menu-Room-Name'}>{props.elem.name}</div>
            <Equipments equipment={props.elem.equipment} onClick={(isBuilding(props.elem) || props.elem.children) ? ()=>()=>{} : openEditor}/>
            {isBuilding(props.elem) || props.elem.children ? null :
                <div className={'Menu-Add'}>
                    <button className={'Add'} onClick={openEditor(null)}>Add new equipment</button>
                </div>}
        </div>
    );
};