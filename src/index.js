import { initMap, addMapMarker, fetchUserLocations, renderMapHost } from './services/';

renderMapHost('mapHost');
initMap('mapHost');

[
  { lat: 55.9485, lng: -3.2, content: "Just chillin' at Edinburgh Castle" },
  { lat: 51.508, lng: -0.128, content: "Hangin' at Trafalgar Square" },
].map(marker => addMapMarker(marker));

const addUserMarkers = async () => {
  const x = await fetchUserLocations();
  console.log(JSON.stringify(x));
};

addUserMarkers();
