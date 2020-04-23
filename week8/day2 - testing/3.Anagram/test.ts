'use strict';

import * as test from 'tape';
import { Anagram } from './anagram';

test('sum all elements', t => {
    var actual = Anagram('toma', 'atom');
    var expected = true;

    t.equal(actual, expected);
    t.end();
});