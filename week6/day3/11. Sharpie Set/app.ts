'use strict';

import { SharpieSet } from './sharpieSet';
import { Sharpie } from '/Users/nopen/OneDrive/Desktop/greenfox/week6/day3/4. Sharpie/Sharpie';

let setOfSharpies: SharpieSet = new SharpieSet;
let sharpie1: Sharpie = new Sharpie('Black', 3);
let sharpie2: Sharpie = new Sharpie('green', 4);
let sharpie3: Sharpie = new Sharpie('red', 10);
sharpie1.use(10);
setOfSharpies.add(sharpie1);
setOfSharpies.add(sharpie2);
setOfSharpies.add(sharpie3);
console.log(setOfSharpies.countUsable());
console.log(setOfSharpies);
setOfSharpies.removeTrash();
console.log(setOfSharpies);