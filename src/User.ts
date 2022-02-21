import faker from '@faker-js/faker';

import { Mappable } from './interfaces/Mappable';


export class User implements Mappable {
    name: string;
    color: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.color = 'blue';
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <h4 style="color: ${this.color};">
                ${this.name}
            </h4>
        `;
    }
}