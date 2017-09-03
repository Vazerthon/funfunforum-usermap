import { map, tileLayer, marker, icon, divIcon, layerGroup, control } from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';
import markerIcon2x from '../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import markerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import { profileImage } from './';

let userMap;
let userMarkers;
let groupMarkers;

const defaultIcon = icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  popupAnchor: [0, -38],
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

const userIcon = username =>
  divIcon({
    popupAnchor: [0, -20],
    iconSize: [28, 36],
    iconAnchor: [14, 28],
    className: 'marker-user-icon',
    html: `<img class="marker-user-icon__image" src="${profileImage(username)}" />`,
  });

const groupMarker = count =>
  divIcon({
    popupAnchor: [0, -50],
    iconSize: [100, 100],
    iconAnchor: [50, 50],
    className: 'marker-group-icon',
    html: `<h3>${count}</h3>`,
  });

export const initMap = (hostId) => {
  userMap = map(hostId, { worldCopyJump: true });
  userMap.setView([55.942, -3.21], 3);

  const tiles = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 3,
    maxZoom: 18,
  });

  userMap.addLayer(tiles);

  userMarkers = layerGroup([]);
  groupMarkers = layerGroup([]);

  const baseMaps = {
    'Open Street Map': tiles,
  };

  const overlayMaps = {
    Users: userMarkers,
    Groups: groupMarkers,
  };

  control.layers(baseMaps, overlayMaps).addTo(userMap);
};

export const addMapMarker = ({ username, lat, lng, caption }) => {
  const mark = marker([lat, lng], {
    icon: username ? userIcon(username) : defaultIcon,
  }).addTo(userMarkers);
  mark.bindPopup(caption);
};

export const addGroupMarker = ({ lat, lng, caption, count }) => {
  const mark = marker([lat, lng], {
    icon: groupMarker(count),
  }).addTo(groupMarkers);
  mark.bindPopup(caption);
};
