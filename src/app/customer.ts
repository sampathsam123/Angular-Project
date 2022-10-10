export interface Customer {
    id: Number;
    firstName: Number;
    lastName: string;
    gender: string;
    address: number, string: any;
    city: string;
    state: {
        abbreviation: string,
        name: string
    }
    abbreviation: string;
    name: string;
    orders: [{
        productName: string,
        itemCost: number
    }]
    latitude: number;
    longitude: number;
};


