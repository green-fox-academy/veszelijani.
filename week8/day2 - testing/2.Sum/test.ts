'use strict';

import * as test from 'tape';
import { Random } from './sum';

test('sum all elements', t => {
    const BigRandom = new Random
    var actual = BigRandom.sumAll([1, 2, 3, 4]);
    var expected = 10;

    t.equal(actual, expected);
    t.end();
});

test('one element', t => {
    const BigRandom = new Random
    var actual = BigRandom.sumAll([1]);
    var expected = 1;

    t.equal(actual, expected);
    t.end();
});

test('zero element', t => {
    const BigRandom = new Random
    var actual = BigRandom.sumAll([]);
    var expected = 0;

    t.equal(actual, expected);
    t.end();
});