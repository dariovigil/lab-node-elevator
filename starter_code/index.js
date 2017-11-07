const Person = require ('./person.js');
const Elevator = require('./elevator.js');

let Martin  = new Person('Martin',  2, 7);
let Francis  = new Person('Francis',  1, 4);
let Steven = new Person('Steven', 3, 10);
let Lars  = new Person('Lars',  9, 0);

let myElevator = new Elevator;

myElevator.start();
myElevator.call(Martin);
myElevator.call(Francis);
myElevator.call(Steven);
myElevator.call(Lars);
