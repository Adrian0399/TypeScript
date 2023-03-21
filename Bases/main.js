"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Adrian',
        age: 23,
        address: {
            id: 123,
            zip: '56535',
            city: 'Ixtapaluca'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Celeste',
        age: 20,
        address: {
            id: 123,
            zip: '56530',
            city: 'Chalco'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map