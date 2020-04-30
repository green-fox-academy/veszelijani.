'use strict';

import { fibonacci } from '/Users/nopen/OneDrive/Desktop/greenfox/week7/day1/fibonacci'
import * as test from 'tape';

test('fibonacci testing', t => {
    const actual1 = fibonacci(2);
    const actual2 = fibonacci(0);
    const actual3 = fibonacci(-1)
    const expected1 = 1;
    const expected2 = 0;
    const expected3 = 0;

    t.equal(actual1, expected1, 'using a whole number');
    t.equal(actual2, expected2, 'using zero');
    t.equal(actual3, expected3, 'using a minus number');
    t.end();
});