'use strict';

let hoursWork = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let stores = [];
let tota1 = 0 ;

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


// show as a table 


let container = document.getElementById('listOFvalues');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function tableHead() {
    // table header
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
//  let trT = document.createElement('tr');
//  tableEl.appendChild(trT);
 let thT = document.createElement('th');
 tr1.appendChild(thT);
 thT.textContent = 'Total';

}

function tableFoot() {
    // table footer 

    let trFoot = document.createElement('tr');
    tableEl.appendChild(trFoot);
    let thfoot = document.createElement('th');
    trFoot.appendChild(thfoot);
    thfoot.textContent = 'Total';

    
    for (let index = 0; index < hoursWork.length; index++) {
       
       let total = 0 ;
       
        for (let i = 0; i < stores.length; i++) {
          
             total += stores[i].cookiesNumEachH[index];
            
        }
         let thFootEl2= document.createElement('td');
             trFoot.appendChild(thFootEl2);
             thFootEl2.textContent = total 
            //  tota1 = tota1 + total
    //  tota1 = tota1 + ( thFootEl.textContent = Seattle.cookiesNumEachH[index] + tokyo.cookiesNumEachH[index] + dubai.cookiesNumEachH[index] + paris.cookiesNumEachH[index] + lima.cookiesNumEachH[index] );
    
    }

    let tdFT = document.createElement('th');
    trFoot.appendChild(tdFT);

    for (let i = 0; i < stores.length; i++) {
          
        tota1 += stores[i].cookiesNumEachH[i];
       
   }
   tdFT.textContent = tota1 ;
    // tdFT.textContent = Seattle.Summation + tokyo.Summation + dubai.Summation + paris.Summation + lima.Summation; 



}
Store.prototype.render = function () {

    // let container = document.getElementById('listOFvalues');
    // let tableEl = document.createElement('table');
    // container.appendChild(tableEl);


    // table body 

    let tr2 = document.createElement('tr');
    tableEl.appendChild(tr2);
    let thElB = document.createElement('th');
    tr2.appendChild(thElB);
    thElB.textContent = `${this.locationName}`
    for (let index = 0; index < this.cookiesNumEachH.length; index++) {

        let tdEl = document.createElement('td');
        tr2.appendChild(tdEl);
        tdEl.textContent = this.cookiesNumEachH[index];
    }

    let tdT = document.createElement('th');
    tr2.appendChild(tdT);
    tdT.textContent = this.Summation ;

    console.log(this.Summation);
    // footer line
    //   let trf = document.createElement('tr');
    //   tableEl.appendChild


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

////////////////////////////////////////////////////////////////////////////

let Seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);


tableHead();


Seattle.RandomNum();
Seattle.salesCookies();
Seattle.render();

tokyo.RandomNum();
tokyo.salesCookies();
tokyo.render();

dubai.RandomNum();
dubai.salesCookies();
dubai.render();

paris.RandomNum();
paris.salesCookies();
paris.render();

lima.RandomNum();
lima.salesCookies();
lima.render();




// console.log(stores);
// console.log(tota1);

tableFoot();

/////////////////////////////////////////////////////////////////
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


let storeFORM = document.getElementById('storeForm');
storeFORM.addEventListener('submit',AddStore);
function AddStore (event){
 event.preventDefault();

 let locationName = event.target.locationName.value;
 let minCustomersperH = event.target.minCustomersperH.value;
 let maxCustomersperH = event.target.maxCustomersperH.value;
 let avgCookiesperC = event.target.avgCookiesperC.value;

 tableEl.removeChild(tableEl.lastChild);

 let newLocation = new Store(locationName,minCustomersperH,maxCustomersperH,avgCookiesperC)

//  stores.push(newLocation);


 newLocation.RandomNum();
 newLocation.salesCookies();
 newLocation.render();


 tableFoot();

console.log(locationName,minCustomersperH,maxCustomersperH,avgCookiesperC);
console.log(stores);
}


