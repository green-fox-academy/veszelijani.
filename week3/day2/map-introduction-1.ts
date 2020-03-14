'use strict';

let map = {}

map[97] = "a";
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";

console.log('The list of the keys:', Object.values(map), Object.keys(map));

if (Object.keys(map).length === 0) {
    console.log('the map is empty!');
} else {
    console.log('The number of the keys are : ' + Object.keys(map).length);
}
map[68] = "D";

console.log('The number of the key-value pairs are: ' + Object.keys(map).length);

console.log("value associated with key 99: " + map[99]);

delete map[97];

console.log(Object.keys(map));

console.log("associated value with key 100? " + map.hasOwnProperty(100));

Object.keys(map).forEach(function (e) {
    delete map[e];
});