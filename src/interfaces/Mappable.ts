// Properties required to addMarker
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    markerContent(): string;
}