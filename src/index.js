import { initMap, addMapMarker, fetchUserLocations, renderMapHost } from './services/';
import './styles.css';

renderMapHost('mapHost');
initMap('mapHost');

const addUserMarkers = async () => {
  const userLocationData = await fetchUserLocations();
  userLocationData.map(l => addMapMarker(l));
};

addUserMarkers();
