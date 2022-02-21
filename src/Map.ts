import { Mappable } from './interfaces/Mappable';


export class Map {
    private googleMap: google.maps.Map;

    constructor(elementID: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(elementID),
            {
                zoom: 4,
                center: { lat: 0, lng: 0 }
            }
        );
    }

    private addInfoWindow(content: string): google.maps.InfoWindow {
        return new google.maps.InfoWindow({ content: content });
    }

    addMarker(mappable: Mappable): void {
        const { location } = mappable;

        const content = mappable.markerContent();

        const marker = new google.maps.Marker({ position: location, map: this.googleMap });

        marker.addListener('click', () => {
            const infoWindow = this.addInfoWindow(content);

            infoWindow.open({ map: this.googleMap, shouldFocus: true }, marker)
        });
    }
}