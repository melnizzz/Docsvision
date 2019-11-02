import * as React from 'react';
import {IBuilding, IRoom, isBuilding} from '../../typings';
import './Breadcrumbs.css';

interface IBreadcrumbsProps {
    element: IBuilding | IRoom;
    onClick: (elem: IBuilding | IRoom) => void;
}

export const Breadcrumbs: React.FunctionComponent<IBreadcrumbsProps> = props => {
    let path = [];
    let curElem = props.element;
    while (true) {
        let cur = curElem;
        path.unshift(
            <div key={curElem.name} className={'Breadcrumbs-Crumb'} onClick={() => props.onClick(cur)}>
                / {curElem.name}
            </div>
        );
        if (!isBuilding(curElem)) curElem = curElem.parent;
        else break;
    }
    path.unshift(
        <div key={'main'} className={'Breadcrumbs-Crumb'} onClick={() => props.onClick(null)}>
            Здания
        </div>);

    return (
        <div className={'Breadcrumbs'}>
            {path}
        </div>
    );
};