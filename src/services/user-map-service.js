import { map, tileLayer, marker, icon } from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import markerIcon2x from '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import markerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import markerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';

let userMap;

// without this the default icon won't show
// https://github.com/PaulLeCam/react-leaflet/issues/255
const defaultIcon = icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  popupAnchor: [0, -38],
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

export const initMap = (hostId) => {
  userMap = map(hostId);

  const tiles = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 3,
    maxZoom: 18,
  });

  userMap.setView([55.942, -3.21], 3);
  userMap.addLayer(tiles);
};

export const addMapMarker = ({ lat, lng, caption }) => {
  const mark = marker([lat, lng], { icon: defaultIcon }).addTo(userMap);
  mark.bindPopup(caption).openPopup();
};
