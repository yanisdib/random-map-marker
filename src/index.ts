import { Company } from './Company';
import { Map } from './Map';
import { User } from './User';


const user = new User;
const company = new Company;
const map = new Map('map-canvas');

function initMap(): void {
    map.addMarker(user);
    map.addMarker(company);
}

initMap()
