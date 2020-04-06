'use strict';

import { Car } from './car';
import { Station } from './station';

let ferrari: Car = new Car;
console.log(ferrari);
let shell: Station = new Station(1000);
shell.refill(ferrari);
shell.refill(ferrari)
console.log(ferrari);
console.log(shell);

