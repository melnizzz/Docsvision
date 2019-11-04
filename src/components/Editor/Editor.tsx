import * as React from 'react';
import {IEquipment, IEvents, IRoom} from '../../typings';

import './Editor.css';

interface IEditorProps {
    room: IRoom;
    events: IEvents;
    onClose: React.MouseEventHandler;
    elem: IEquipment;
}

export class Editor extends React.Component<IEditorProps> {
    nameRef = React.createRef<HTMLInputElement>();
    countRef = React.createRef<HTMLInputElement>();

    clickHandler = (event: React.MouseEvent) => {
        this.props.elem ?
            this.props.events.updateEquipment(
                this.props.elem._id,
                this.nameRef.current.value,
                parseInt(this.countRef.current.value, 10)
            ) :
            this.props.events.addEquipment(
                this.nameRef.current.value,
                this.props.room.id,
                parseInt(this.countRef.current.value, 10)
            );

        this.props.onClose(event);
    };

    closeHandler = (event: React.MouseEvent) => {
        if ((event.target as HTMLDivElement).className !== 'Editor-Wrapper') return;

        this.props.onClose(event);
    };

    deleteHandler = (event: React.MouseEvent) => {
        this.props.events.deleteEquipment(this.props.elem._id);

        this.props.onClose(event);
    };

    render() {
        return (
            <div className={'Editor-Wrapper'} onClick={this.closeHandler}>
                <div className={'Editor'}>
                    <input className={'Editor-Name'} placeholder={'Name'} ref={this.nameRef} defaultValue={this.props.elem ? this.props.elem.name : null}/>
                    <input className={'Editor-Count'} placeholder={'Count'} type={'number'} ref={this.countRef} defaultValue={this.props.elem ? this.props.elem.count : null}/>
                    <button className={'Editor-Submit'} onClick={this.clickHandler}>{this.props.elem ? 'Save' : 'Add'}</button>
                    {this.props.elem ? <button className={'Editor-Delete'} onClick={this.deleteHandler}>Delete</button> : null}
                </div>
            </div>
        );
    }
}
