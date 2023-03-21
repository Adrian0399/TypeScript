(() => {

    const addNumbers = ( a: number, b: number) => a + b;
    const greet = ( name: string) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo esta salvado!`;

    // myFunction = 10;
    // console.log(myFunction);

    let myFunction1: (y:number, z:number) => number;
    let myFunction2: (y:string) => string;
    let myFunction3: () => string;

    myFunction1 = addNumbers;
    console.log( myFunction1(1, 4) );

    myFunction2 = greet;
    console.log( myFunction2('Adrian') );

    myFunction3 = saveTheWorld;
    console.log( myFunction3() );

})()