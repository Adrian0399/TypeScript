(() => {

    const fullName = ( fristName:string , lastName:string ): string => {
        return `${ fristName } ${ lastName }`;
    }

    const name = fullName( 'Adrian', 'Olvera' );

    console.log({name});

})()