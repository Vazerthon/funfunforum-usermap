import { initMap, addMapMarker, fetchUserLocations, renderMapHost } from './services/';
import './styles.css';

renderMapHost('mapHost');
initMap('mapHost');

const addUserMarkers = async () => {
  const userLocationResult = await fetchUserLocations();
  userLocationResult.value.map(l => addMapMarker(l));
};

addUserMarkers();
