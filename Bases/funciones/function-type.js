"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    // myFunction = 10;
    // console.log(myFunction);
    let myFunction1;
    let myFunction2;
    let myFunction3;
    myFunction1 = addNumbers;
    console.log(myFunction1(1, 4));
    myFunction2 = greet;
    console.log(myFunction2('Adrian'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
//# sourceMappingURL=function-type.js.map