import { map, tileLayer } from 'leaflet';
import '../node_modules/leaflet/dist/leaflet.css';

const initMap = (hostId) => {
  const userMap = map(hostId);

  const tiles = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 8,
    maxZoom: 12,
  });

  userMap.setView([51.505, -0.09], 13);
  userMap.addLayer(tiles);
};

const initDom = (hostId) => {
  const mapHost = document.createElement('div');
  mapHost.id = hostId;

  const style = `
    border: 1px solid #000;
    width: 800px;
    height: 600px;
    margin: 0 auto;
  `;

  mapHost.setAttribute('style', style);

  document.body.appendChild(mapHost);
};

initDom('mapHost');
initMap('mapHost');
