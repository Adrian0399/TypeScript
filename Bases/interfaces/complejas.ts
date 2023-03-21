(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string,
    }

    const client = {
        name: 'Adrian',
        age: 23,
        address: {
            id: 123,
            zip: '56535',
            city: 'Ixtapaluca'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Celeste',
        age: 20,
        address: {
            id: 123,
            zip: '56530',
            city: 'Chalco'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

})()