'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function getNameAndBalance(accNumber: number): any[] {
    let isItMatch: any[] = []
    for (let i: number = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber === accNumber) {
            isItMatch.push(accounts[i].clientName, accounts[i].balance)
        }
    }
    return isItMatch
}
console.log(getNameAndBalance(23456311));

function transferAmount(clientName: string, fromAccNumber: number, toAccNumber: number, amount: number): any[] {
    let counter: number = 0
    for (let i: number = 0; i < accounts.length; i++) {
        if (accounts[i].clientName === clientName && accounts[i].accountNumber === fromAccNumber) {
            counter++
            if (accounts[i].balance >= amount) {
                accounts[i].balance -= amount;
            } else {
                console.log('Insufficient money,tho');
                //break;
            }
            for (let j: number = 0; j < accounts.length; j++) {
                if (accounts[j].accountNumber === toAccNumber) {
                    accounts[j].balance += amount;
                }
            }
        }
    }if(counter < 1){
        console.log('ERROR : Invalid account');
    }
     return accounts
}
console.log(transferAmount('Sergei', 23456311, 43546731, 2000));


