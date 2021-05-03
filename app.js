'use strict';

let hoursWork = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let stores = [];

function Store(locationName, minCustomersperH, maxCustomersperH, avgCookiesperC) {
    this.locationName = locationName;
    this.minCustomersperH = minCustomersperH;
    this.maxCustomersperH = maxCustomersperH;
    this.avgCookiesperC = avgCookiesperC;

    this.RandomNumArrayForCperH = [];
    this.cookiesNumEachH = [];
    this.Summation = 0;
    stores.push(this);

}

Store.prototype.RandomNum = function () {
    for (let i = 0; i < hoursWork.length; i++) {

        this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
    }
}
Store.prototype.salesCookies = function () {

    for (let index = 0; index < hoursWork.length; index++) {
        this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
        this.Summation += this.cookiesNumEachH[index];

    }

}





Store.prototype.render = function () {

    let container = document.getElementById('listOFvalues');
    let tableEl = document.createElement('table');
    container.appendChild(tableEl);

// line 1
    let tr1 = document.createElement('tr');
    tableEl.appendChild(tr1);
     let th1 = document.createElement('th');
     tr1.appendChild(th1);
     th1.textContent = 'Store Name';

     for (let index = 0; index < hoursWork.length; index++) {

        let thEl = document.createElement('th');
        tr1.appendChild(thEl);
        thEl.textContent = `${hoursWork[index]}`
      }
// line 2

    let tr2 = document.createElement('tr');
    tableEl.appendChild(tr2);
    tr2.textContent = `${this.locationName}`
    for (let index = 0; index < this.cookiesNumEachH.length; index++) {

        let tdEl = document.createElement('td');
        tr2.appendChild(tdEl);
        tdEl.textContent = `${this.cookiesNumEachH[index]}`
      }




    //  let trEl2 = document.createElement('tr');
    //  tableEl.appendChild(trEl2);
    // for (let i = 0; i < this.cookiesNumEachH.length; i++) {

    //   let tdEl = document.createElement('td');
    //      trEl2.appendChild(tdEl);
    //      tdEl.textContent = `${this.cookiesNumEachH[i]}`
    //  }




    //  let trEl3 = document.createElement('tr');
    //  tableEl.appendChild(trEl3);
    // for (let i = 0; i < this.Summation.length; i++) {

    //     let tfooterEl = document.createElement('tfoot');
    //        trEl3.appendChild(tfooterEl);
    //        tfooterEl.textContent = this.Seattle.salesCookies[i] + this.tokyo.salesCookies[i] + this.dubai.salesCookies[i] + this.paris.salesCookies[i] + this.lima.salesCookies[i] ;
    //    }


}

// thiis code below for constacter function with lists , and it's worke 

// Store.prototype.render = function () {

//     let container = document.getElementById('listOFvalues');
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.locationName;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hoursWork.length; i++) {
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
//     }

//     let totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = `Total: ${this.Summation} cookies`

// }


let Seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);


Seattle.RandomNum();
Seattle.salesCookies();
Seattle.render();

tokyo.RandomNum();
tokyo.salesCookies();
// tokyo.render();

dubai.RandomNum();
dubai.salesCookies();
// dubai.render();

paris.RandomNum();
paris.salesCookies();
paris.render();

lima.RandomNum();
lima.salesCookies();
lima.render();

console.log(stores);



// obj Seattle

// let Seattle = {
//     Summation: 0,
//     locationName: 
//     minCustomersperH: 23,
//     maxCustomersperH: 65,
//     avgCookiesperC: 6.3,

//     RandomNumArrayForCperH: [],
//     cookiesNumEachH: [],




//     RandomNum: function () {
//         for (let i = 0; i < hoursWork.length; i++) {
//             this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
//         }
//     },

//     salesCookies: function () {
//         for (let index = 0; index < hoursWork.length; index++) {
//             this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
//             this.Summation += this.cookiesNumEachH[index];

//         }
//     },

//     render: function () {
//         let container = document.getElementById('listOFvalues');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locationName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hoursWork.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
//         }

//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Summation} cookies`
//     }
// }
// // call Seattle
//   Seattle.RandomNum();

//   Seattle.salesCookies();

//   Seattle.render();


// // obj tokyo

// let tokyo = {
//     Summation: 0,
//     locationName: 'Tokyo',
//     minCustomersperH: 3,
//     maxCustomersperH: 24,
//     avgCookiesperC: 1.2,

//     RandomNumArrayForCperH: [],
//     cookiesNumEachH: [],




//     RandomNum: function () {
//         for (let i = 0; i < hoursWork.length; i++) {
//             this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
//         }
//     },

//     salesCookies: function () {
//         for (let index = 0; index < hoursWork.length; index++) {
//             this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
//             this.Summation += this.cookiesNumEachH[index];

//         }
//     },

//     render: function () {
//         let container = document.getElementById('listOFvalues');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locationName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hoursWork.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
//         }

//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Summation} cookies`
//     }
// }

// // call tokyo
//   tokyo.RandomNum();

//   tokyo.salesCookies();

//   tokyo.render();

// // obj dubai

// let dubai = {
//     Summation: 0,
//     locationName: 'Dubai',
//     minCustomersperH: 11,
//     maxCustomersperH: 38,
//     avgCookiesperC: 3.7,

//     RandomNumArrayForCperH: [],
//     cookiesNumEachH: [],




//     RandomNum: function () {
//         for (let i = 0; i < hoursWork.length; i++) {
//             this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
//         }
//     },

//     salesCookies: function () {
//         for (let index = 0; index < hoursWork.length; index++) {
//             this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
//             this.Summation += this.cookiesNumEachH[index];

//         }
//     },

//     render: function () {
//         let container = document.getElementById('listOFvalues');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locationName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hoursWork.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
//         }

//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Summation} cookies`
//     }
// }

// // call dubai
//   dubai.RandomNum();

//   dubai.salesCookies();

//   dubai.render();


// // obj paris

// let paris = {
//     Summation: 0,
//     locationName: 'Paris',
//     minCustomersperH: 20,
//     maxCustomersperH: 38,
//     avgCookiesperC: 2.3,

//     RandomNumArrayForCperH: [],
//     cookiesNumEachH: [],




//     RandomNum: function () {
//         for (let i = 0; i < hoursWork.length; i++) {
//             this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
//         }
//     },

//     salesCookies: function () {
//         for (let index = 0; index < hoursWork.length; index++) {
//             this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
//             this.Summation += this.cookiesNumEachH[index];

//         }
//     },

//     render: function () {
//         let container = document.getElementById('listOFvalues');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locationName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hoursWork.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
//         }

//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Summation} cookies`
//     }
// }

// // call paris
//   paris.RandomNum();

//   paris.salesCookies();

//   paris.render();

// // obj lima

// let lima = {
//     Summation: 0,
//     locationName: 'Lima',
//     minCustomersperH: 2,
//     maxCustomersperH: 16,
//     avgCookiesperC: 4.6,

//     RandomNumArrayForCperH: [],
//     cookiesNumEachH: [],




//     RandomNum: function () {
//         for (let i = 0; i < hoursWork.length; i++) {
//             this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
//         }
//     },

//     salesCookies: function () {
//         for (let index = 0; index < hoursWork.length; index++) {
//             this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
//             this.Summation += this.cookiesNumEachH[index];

//         }
//     },

//     render: function () {
//         let container = document.getElementById('listOFvalues');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.locationName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let i = 0; i < hoursWork.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
//         }

//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.Summation} cookies`
//     }
// }

// // call lima
//   lima.RandomNum();

//   lima.salesCookies();

//   lima.render();