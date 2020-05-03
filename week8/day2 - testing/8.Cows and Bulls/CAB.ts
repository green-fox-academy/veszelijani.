'use strict';

import { finished } from "stream";

class CAB {
    private _randomNumber: number = Math.floor(Math.random() * 9000) + 1000;
    private _guessedNumber: number;
    private _cows: number = 0;
    private _bulls: number = 0;
    private _chance: number = 0;

    public guess(number: number): void {
        this._guessedNumber = number;
    }

    public playing(): string {
        this._chance++
        if (this._chance > 4) {
            return 'Thanks for playing, noob!'
        }
        this._bulls = 0;
        this._cows = 0;

        let splitted: string[] = this._randomNumber.toString().split('');
        let guessSplitted: string[] = this._guessedNumber.toString().split('');
        if (guessSplitted.length !== 4 || splitted.length !== 4) {
            return 'Invalid number';
        } else {
            for (let i: number = 0; i < 4; i++) {
                if (guessSplitted[i] === splitted[i])
                    this._cows++;
                else {
                    for (let j: number = 0; j < 4; j++) {
                        let counter: number = 0;
                        if (guessSplitted[i] === splitted[j]) {
                            counter++;
                            this._bulls++;
                            if (counter === 1) {
                                i++;
                                j++;
                            }
                        }
                    }
                }
            }
            if (this._cows === 4) {
                return 'GG you won!!';
            } else {
                if (this._chance >= 4 && this._cows < 4) {
                    return `Game Over the number was ${this._randomNumber}`;
                }
                return `cow(s): ${this._cows} bull(s): ${this._bulls}`
            }
        }
    }
    public finished(): number{
        this._chance = 0
        this._randomNumber = Math.floor(Math.random() * 9000) + 1000;
        return this._randomNumber;
    }
}
