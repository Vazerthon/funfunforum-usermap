import { map, tileLayer } from 'leaflet';

export const initMap = (hostId) => {
  const userMap = map(hostId);

  const tiles = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 8,
    maxZoom: 12,
  });

  userMap.setView([55.942, -3.21], 13);
  userMap.addLayer(tiles);
};

export const addMarker = () => {};
