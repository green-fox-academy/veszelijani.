'use strict';

import { Animal } from '/Users/nopen/OneDrive/Desktop/greenfox/week6/day3/3. Animal/Animal'
import { Farm } from './farm'


let BigFarm = new Farm;

let Tiger = new Animal;
let Cow = new Animal;
let Zebra = new Animal;

BigFarm.add(Cow);
BigFarm.add(Tiger);
BigFarm.add(Zebra);
Tiger.eat(10)
Cow.eat(5)
console.log(BigFarm)
BigFarm.breed()
console.log(BigFarm)
BigFarm.breed()
console.log(BigFarm)
BigFarm.slaughter()
console.log(BigFarm)
