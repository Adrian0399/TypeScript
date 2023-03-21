(() => {

    const fullName = ( fristName:string , lastName?:string, upper: boolean = false ): string => {

        if(upper) {
            return `${ fristName } ${ lastName || '----'}`.toUpperCase();
        } else {
            return `${ fristName } ${ lastName || '----'}`;
        } 
    }

    const name = fullName( 'Adrian', 'Olvera', true);

    console.log({name});
    
})()