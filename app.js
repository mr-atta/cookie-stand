'use strict';

let hoursWork = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

let Seattle = {
    Summation: 0
    LocationName: 'Seattle',
    minCustomersperH: 23,
    maxCustomersperH: 65,
    avgCookiesperC: 6.3,

    cookiesNumEachH: [],
    RandomNumArrayForCperH: [],



    RandomNum: function () {

        for (let i = 0; i < hoursWork.length; i++) {

            getRandom(this.minCustomersperH, this.maxCustomersperH)

                .push(getRandom(this.minCustomersperH, this.maxCustomersperH));

            this.cookiesNumEachH.push(Math.floor(this.RandomNumArrayForCperH[i] * this.avgCookiesperC));


            this.Summation += this.RandomNumArrayForCperH[i];

        }
        console.log(this.RandomNumArrayForCperH);
        console.log(this.cookiesNumEachH);
        console.log(this.Summation);

    }


  let container = document.getElementById('listOFvalues'),

    let h2El = document.createElement('h2'),
    container.appendchild(h2El),
    h2El.textContent = this.locationName,

    let ulEl = document.createElement('ul'),
    container.appendchild(ulEl),

    for(let index = 0; index< this.hoursWork.length; index++) {

        let liEl = document.createElement('li');
liEl.textContent = this.hoursWork[index];
ulEl.appendchild(liEl);
  }

let liEl2 = document.createElement('li'),
    ulEl.appendchild(liEl2);
liEl2.textContent = this.Summation,



}

Seattle.RandomNum();


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}