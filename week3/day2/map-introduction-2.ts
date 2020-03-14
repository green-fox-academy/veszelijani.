'use strict';

let map = {
    "978-1-60309-452-8" : 'A Letter to Jo',
    "978-1-60309-459-7" : "Lupus",
    "978-1-60309-444-3" : "Red Panda and Moon Bear",
    "978-1-60309-461-0" : "The Lab"
}
Object.keys(map).forEach(function(e, i){
    console.log(Object.values(map)[i] + (' (ISBN:' + e + ')'))
})
delete map["978-1-60309-444-3"];

Object.keys(map).forEach(function(e) {
    if (map[e] === "The Lab"){
        delete map[e];
    }
})
map["978-1-60309-450-4"] = "They Called Us Enemy";
map["978-1-60309-453-5"] = "Why Did We Trust Him?";
console.log(map);

console.log("Is the key 478-0-61159-424-8 associated to any value?  " + map.hasOwnProperty("478-0-61159-424-8"));