export interface Customer {
    id: Number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: {
        abbreviation: string,
        name: string
    }
    abbreviation: string;
    name: string;
    orders: [{
        productName: string,
        itemCost: string
    }]
    latitude: string;
    longitude: string;
};


