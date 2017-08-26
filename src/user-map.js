import { map, tileLayer, marker, icon } from 'leaflet';
import '../node_modules/leaflet/dist/leaflet.css';
import markerIcon2x from '../node_modules/leaflet/dist/images/marker-icon-2x.png';
import markerIcon from '../node_modules/leaflet/dist/images/marker-icon.png';
import markerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png';

let userMap;

// without this the default icon won't show
// https://github.com/PaulLeCam/react-leaflet/issues/255
const defaultIcon = icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  popupAnchor: [12, -2],
});

export const initMap = (hostId) => {
  userMap = map(hostId);

  const tiles = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 4,
    maxZoom: 20,
  });

  userMap.setView([55.942, -3.21], 13);
  userMap.addLayer(tiles);
};

export const addMarker = ({ lat, lng, content }) => {
  const mark = marker([lat, lng], { icon: defaultIcon }).addTo(userMap);
  mark.bindPopup(content).openPopup();
};
