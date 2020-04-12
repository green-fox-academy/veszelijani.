'use strict';

export class Pirate {
    private _drinkRum: number = 0
    private _stillAlive: boolean = true;

    constructor(drinkRum: number = 0, name?:string) {
        this._stillAlive = true
        this._drinkRum = drinkRum

    }
    public drinkSomeRum(): void {
        if (this._stillAlive === false) {
            console.log("he's dead.");
        } else {
            this._drinkRum++;
        }
    }
    public howsItGoingMate(): void {
        if (this._stillAlive === false) {
            console.log("he's dead.");
        } if (this._drinkRum <= 4 && this._stillAlive === true) {
            let reply = "Pour me anudder!";
            console.log(reply);
            this.parrot(reply);
        } else if (this._drinkRum >= 5 && this._stillAlive === true) {
            let reply = "Arghh, I'ma Pirate. How d'ya d'ink its goin?";
            console.log(reply);
            this.parrot(reply);
        }
    }
    public die(): boolean {
        return this._stillAlive = false;

    }
    public brawl(anotherPirate) {
        if (this._stillAlive === false) {
            let reply = 'You cannot fight because you are already dead!!';
            console.log(reply);
            this.parrot(reply);
        } else {
            let randomNumber: number = Math.floor(Math.random() * 3) + 1;
            if (randomNumber === 1) {
                anotherPirate.die();
                let reply = "Our pirate is the winner";
                console.log(reply);
                this.parrot(reply);
            } if (randomNumber === 2) {
                this.die();
                let reply = "Another pirate is the winner";
                console.log(reply);
                this.parrot(reply);
            } else if (randomNumber === 3) {
                this.die();
                anotherPirate.die();
                let reply = "Draw! Both are dead";
                console.log(reply);
                this.parrot(reply);
            }
        }
    }
    public parrot(reply) {
        console.log(reply);
    }
    public get drinkThatRum(): number{
        return this._drinkRum;
    }
    public get IsThePirateStillAlive(): boolean{
        return this._stillAlive;
    }
}
let captain: Pirate = new Pirate;
let jimmy: Pirate = new Pirate(5);
captain.drinkSomeRum()
console.log(captain)
//captain.howsItGoingMate()
//captain.drinkSomeRum()
//captain.drinkSomeRum()
//captain.drinkSomeRum()
//captain.drinkSomeRum()
//captain.howsItGoingMate()
//console.log(captain)
//captain.brawl(jimmy)
//console.log(captain)
console.log(jimmy)
