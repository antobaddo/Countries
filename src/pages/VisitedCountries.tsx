import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";
import {useGetVisitedCountriesQuery} from "../redux/api";
import {Typography} from "antd";


const AMSTERDAM_POSITION: L.LatLngExpression = [52.35, 4.92]
export default function VisitedCountries() {

    const {data} = useGetVisitedCountriesQuery()

    return <div style={{width: '100%', height: "calc(100vh - 63.99px)"}}>
        <MapContainer
            center={AMSTERDAM_POSITION}
            zoom={4}
            scrollWheelZoom={false}
            attributionControl={false}
            preferCanvas={true}
            style={{width: '100%', height: '100%'}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data?.map(marker => {
                return marker?.latlng && <Marker key={marker.name.common}
                icon={new L.Icon({
                    iconUrl: marker?.flags.png,
                    iconSize: [40, 20],
                    iconAnchor: [19, 38],
                    popupAnchor: [0, -38]
                })}
                position={{lat: marker.latlng[0], lng: marker.latlng[1]}}>
                    <Popup>
                        <Typography.Title style={{margin: 0}} level={5}>Trip notes</Typography.Title>
                        <Typography.Paragraph italic>{marker.trip_notes || "No notes inserted"}</Typography.Paragraph>
                    </Popup>
                </Marker>
                }
            )}
        </MapContainer>
    </div>
}