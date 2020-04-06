'use strict';

import { Sharpie } from '/Users/nopen/OneDrive/Desktop/greenfox/week6/day3/4. Sharpie/Sharpie';

export class SharpieSet {
    listOfSharpies: Sharpie[] = [];

    public add(sharpie: Sharpie) {
        this.listOfSharpies.push(sharpie)
    }
    public countUsable(): number {
        let counter: number = 0
        for (let i: number = 0; i < this.listOfSharpies.length; i++) {
            if (this.listOfSharpies[i].InkAmount != 0) {
                counter++
            }
        } return counter
    }
    public removeTrash() {
        for (let i: number = 0; i < this.listOfSharpies.length; i++) {
            if (this.listOfSharpies[i].InkAmount === 0) {
                this.listOfSharpies.splice(i, 1)
            }
        }
    }
}


