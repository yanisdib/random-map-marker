import faker from "@faker-js/faker";

import { Mappable } from "./interfaces/Mappable";


export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    color: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.color = 'green';
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <div>
                <h4 style="color: ${this.color};">${this.name}</h4> 
                <p>${this.catchPhrase}</p>
            </div>
        `;
    }
}