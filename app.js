"use strict";
exports.__esModule = true;
var scorocode = fetch('https://raw.githubusercontent.com/Scorocode/scorocode-SDK-JS/master/lib/browser/scorocode.js')
    .then(function (res) { return res.text(); })
    .then(function (text) { return eval("(function(){" + text + "})()"); })
    .then(function () {
    var Scorocode = window['Scorocode'];
    Scorocode.Init({
        ApplicationID: '3196b2e873234547ad8b06ed636d3538',
        JavaScriptKey: '5e85f685a23e44e6abad95accc1dd2ea',
        MasterKey: '659d718ff9664f6fafbdb79efc93cb34'
    });
    function addEquipment(name, room, count) {
        var comp = new Scorocode.Object('equipment');
        comp.set('name', name);
        comp.set('room', room); // значение поля id комнаты
        comp.set('count', count);
        comp.save().then(function () {
            console.info('Done');
        });
    }
    function deleteEquipment(id) {
        var equip = new Scorocode.Object('equipment');
        equip.getById(id).then(function (item) {
            equip.remove(item).then(function () {
                console.info('Done');
            });
        });
    }
    function updateEquipment(id, name, count) {
        var equip = new Scorocode.Object('equipment');
        equip.set('_id', id).set('name', name).set('count', count);
        equip.save().then(function () { return console.info('done'); });
    }
    function getBuildings() {
        return new Scorocode.Query('buildings')
            .find()
            .then(function (found) { return found.result; });
    }
    function getEquipment() {
        return new Scorocode.Query('equipment')
            .find()
            .then(function (found) { return found.result; });
    }
    var buildings = getBuildings();
    var equipment = getBuildings();
    />;;
});
