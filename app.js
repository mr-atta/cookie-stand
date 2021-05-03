'use strict';

let hoursWork = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

// obj Seattle

let Seattle = {
    Summation: 0,
    locationName: 'Seattle',
    minCustomersperH: 23,
    maxCustomersperH: 65,
    avgCookiesperC: 6.3,

    RandomNumArrayForCperH: [],
    cookiesNumEachH: [],




    RandomNum: function () {
        for (let i = 0; i < hoursWork.length; i++) {
            this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
        }
    },

    salesCookies: function () {
        for (let index = 0; index < hoursWork.length; index++) {
            this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
            this.Summation += this.cookiesNumEachH[index];

        }
    },

    render: function () {
        let container = document.getElementById('listOFvalues');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locationName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hoursWork.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
        }

        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.Summation} cookies`
    }
}
// call Seattle
  Seattle.RandomNum();

  Seattle.salesCookies();

  Seattle.render();


// obj tokyo

let tokyo = {
    Summation: 0,
    locationName: 'Tokyo',
    minCustomersperH: 3,
    maxCustomersperH: 24,
    avgCookiesperC: 1.2,

    RandomNumArrayForCperH: [],
    cookiesNumEachH: [],




    RandomNum: function () {
        for (let i = 0; i < hoursWork.length; i++) {
            this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
        }
    },

    salesCookies: function () {
        for (let index = 0; index < hoursWork.length; index++) {
            this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
            this.Summation += this.cookiesNumEachH[index];

        }
    },

    render: function () {
        let container = document.getElementById('listOFvalues');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locationName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hoursWork.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
        }

        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.Summation} cookies`
    }
}

// call tokyo
  tokyo.RandomNum();

  tokyo.salesCookies();

  tokyo.render();

// obj dubai

let dubai = {
    Summation: 0,
    locationName: 'Dubai',
    minCustomersperH: 11,
    maxCustomersperH: 38,
    avgCookiesperC: 3.7,

    RandomNumArrayForCperH: [],
    cookiesNumEachH: [],




    RandomNum: function () {
        for (let i = 0; i < hoursWork.length; i++) {
            this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
        }
    },

    salesCookies: function () {
        for (let index = 0; index < hoursWork.length; index++) {
            this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
            this.Summation += this.cookiesNumEachH[index];

        }
    },

    render: function () {
        let container = document.getElementById('listOFvalues');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locationName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hoursWork.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
        }

        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.Summation} cookies`
    }
}

// call dubai
  dubai.RandomNum();

  dubai.salesCookies();

  dubai.render();


// obj paris

let paris = {
    Summation: 0,
    locationName: 'Paris',
    minCustomersperH: 20,
    maxCustomersperH: 38,
    avgCookiesperC: 2.3,

    RandomNumArrayForCperH: [],
    cookiesNumEachH: [],




    RandomNum: function () {
        for (let i = 0; i < hoursWork.length; i++) {
            this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
        }
    },

    salesCookies: function () {
        for (let index = 0; index < hoursWork.length; index++) {
            this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
            this.Summation += this.cookiesNumEachH[index];

        }
    },

    render: function () {
        let container = document.getElementById('listOFvalues');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locationName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hoursWork.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
        }

        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.Summation} cookies`
    }
}

// call paris
  paris.RandomNum();

  paris.salesCookies();

  paris.render();

// obj lima

let lima = {
    Summation: 0,
    locationName: 'Lima',
    minCustomersperH: 2,
    maxCustomersperH: 16,
    avgCookiesperC: 4.6,

    RandomNumArrayForCperH: [],
    cookiesNumEachH: [],




    RandomNum: function () {
        for (let i = 0; i < hoursWork.length; i++) {
            this.RandomNumArrayForCperH.push(Math.floor(Math.random() * (this.maxCustomersperH - this.minCustomersperH + 1) + this.minCustomersperH));
        }
    },

    salesCookies: function () {
        for (let index = 0; index < hoursWork.length; index++) {
            this.cookiesNumEachH.push(Math.ceil(this.RandomNumArrayForCperH[index] * this.avgCookiesperC));
            this.Summation += this.cookiesNumEachH[index];

        }
    },

    render: function () {
        let container = document.getElementById('listOFvalues');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.locationName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hoursWork.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hoursWork[i]}:${this.cookiesNumEachH[i]} cookies`
        }

        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.Summation} cookies`
    }
}

// call lima
  lima.RandomNum();

  lima.salesCookies();

  lima.render();