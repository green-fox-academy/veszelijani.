'use strict'

import { Flower } from './Flower';
import { Tree } from './Tree';

export class Garden {
    private _lilGarden = [];

    public wateringAll(amount: number):void {
        console.log(`Watering with ${amount}`)
        let counter: number = 0;
        this._lilGarden.forEach(function (e) {
            if (e.NeedWater) {
                counter++;
            }
        })
        let wateringAmount = amount / counter;
        this._lilGarden.forEach(function (e) {
            e.Watering(wateringAmount)
            e.info()
        })
    }
    public addTree(Tree: Tree):void {
        this._lilGarden.push(Tree);
    }
    public addFlower(Flower: Flower):void {
        this._lilGarden.push(Flower);
    }
    public infoAll():void{
        this._lilGarden.forEach(function(e){
            e.info();
        })
    }
}