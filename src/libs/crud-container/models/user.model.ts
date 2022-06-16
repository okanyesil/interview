export interface UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Adress;
    phone: string;
    website: string;
    company: Company;
}


export interface Adress {
    street: string;
    suite: string;
    zipcode: string;
    geo: Geograph;
    city: string;
}

export interface Geograph {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}