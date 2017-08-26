import { initMap, addMarker } from './user-map';

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

[
  { lat: 55.9485, lng: -3.2, content: "Just chillin' at Edinburgh Castle" },
  { lat: 51.508, lng: -0.128, content: "Hangin' at Trafalgar Square" },
].map(marker => addMarker(marker));
