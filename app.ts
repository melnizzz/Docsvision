import React from 'react';
import {IBuilding, IEquipment} from './typings';

const scorocode = fetch('https://raw.githubusercontent.com/Scorocode/scorocode-SDK-JS/master/lib/browser/scorocode.js')
    .then(res => res.text())
    .then(text => eval(`(function(){${text}})()`))
    .then(() => {
        let Scorocode = window['Scorocode'];
        Scorocode.Init({
            ApplicationID: '3196b2e873234547ad8b06ed636d3538',
            JavaScriptKey: '5e85f685a23e44e6abad95accc1dd2ea',
            MasterKey: '659d718ff9664f6fafbdb79efc93cb34'
        });

        function addEquipment(name: string, room: string, count: number): void {
            let comp = new Scorocode.Object('equipment');
            comp.set('name', name);
            comp.set('room', room); // значение поля id комнаты
            comp.set('count', count);
            comp.save().then(() => {
                console.info('Done');
            });
        }

        function deleteEquipment(id: string): void {
            let equip = new Scorocode.Object('equipment');
            equip.getById(id).then((item) => {
                equip.remove(item).then(() => {
                    console.info('Done');
                });
            });
        }

        function updateEquipment(id: string, name: string, count: number): void {
            let equip = new Scorocode.Object('equipment');
            equip.set('_id', id).set('name', name). set('count', count);
            equip.save().then(() => console.info('done'));
        }

        function getBuildings(): IBuilding[] {
            return new Scorocode.Query('buildings')
                .find()
                .then(found => found.result);
        }

        function getEquipment(): IEquipment[] {
            return new Scorocode.Query('equipment')
                .find()
                .then(found => found.result);
        }

        let buildings = getBuildings();
        let equipment = getBuildings();

        <Page />;
    });
