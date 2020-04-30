'use strict';

import * as test from 'tape';
import { Sharpie } from '/Users/nopen/OneDrive/Desktop/greenfox/week6/day3/4. Sharpie/Sharpie';

test('Sharpie testing', t => {

    const color: string = 'Red';
    const width: number = 3;
    const expectedDefaultInkAmount: number = 100;
    const result1: Sharpie = new Sharpie('Red', 3);


    t.equal(result1.Color, color, 'checking the color');
    t.equal(result1.Width, width, 'checking width');
    t.equal(result1.InkAmount, expectedDefaultInkAmount, 'checking inkAmount');
    t.end();

    test('Use method', t => {
        const expectedDefaultRemainingAmount: number = 90;
        const inkUsing2: number = 3;
        const expectedNumber2: number = 70;
        const inkUsing3: number = 10;
        const expectedNumber3: number = 0;
        const inkUsing4: number = -1;
        const expectedNumber4: number = undefined;
        const result = new Sharpie('Red', 3).use();
        const result2 = new Sharpie('Red', 3).use(inkUsing2);
        const result3 = new Sharpie('Red', 3).use(inkUsing3);
        const result4 = new Sharpie('Red', 3).use(inkUsing4);

        t.equal(result, expectedDefaultRemainingAmount, 'without parameter');
        t.equal(result2, expectedNumber2, 'With 3');
        t.equal(result3, expectedNumber3, 'With 10');
        t.equal(result4, expectedNumber4, 'With negative number');
        t.end();
    })
});