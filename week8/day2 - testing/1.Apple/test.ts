'use strict';

import * as test from 'tape';
import { Apple } from './apple';

test('new file', t => {
    const BigApple = new Apple
    var actual = BigApple.getApple();
    var expected = 'Apple'

    t.equal(actual, expected);
    t.end();
});