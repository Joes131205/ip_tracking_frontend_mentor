import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
    return (
        <MapContainer
            center={[props.lat, props.lng]}
            zoom={5}
            scrollWheelZoom={true}
            className="w-full h-[69.8%] z-0 absolute overflow-hidden"
        >
            <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
            <Marker position={[props.lat, props.lng]}>
                <Popup>{`${props.lat}, ${props.lng}`}</Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
