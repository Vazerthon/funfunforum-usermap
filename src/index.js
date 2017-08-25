import '../node_modules/leaflet/dist/leaflet.css';
import { initMap } from './user-map';

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
