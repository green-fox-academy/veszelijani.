'use strict';

import * as test from 'tape';
import { CAB } from './CAB';

test('Testing guess method' , t =>{
    const expected = 3000;
    const expected2 = 'Invalid number';
    const result1: CAB = new CAB()

    t.equal(result1.guess(3000), expected, 'checking the guess with 4 digits number');
    t.equal(result1.guess(231), expected2, 'Using a 3 digits number' );
    t.end();

})