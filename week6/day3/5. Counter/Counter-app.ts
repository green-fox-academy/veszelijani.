'use strict';

import { Counter } from './Counter';

let numb = new Counter()
numb.add(10)
numb.add()
console.log(numb.get())
numb.reset();
console.log(numb.get())