'use strict';

import * as test from 'tape';
import { counter } from './countletter';

test('sum all elements', t => {
    var actual = JSON.stringify(counter('valami'));
    var expected = JSON.stringify({ v: 1, a: 2, l: 1, m: 1, i: 1 });

    t.equal(actual, expected);
    t.end();
});