import {
  initMap,
  addMapMarker,
  fetchForumData,
  extractUserLocations,
  renderMapHost,
} from './services/';
import './styles.css';

renderMapHost('mapHost');
initMap('mapHost');

const addUserMarkers = async () => {
  const forumDataResult = await fetchForumData();
  const forumData = await forumDataResult.json();
  const userLocationData = extractUserLocations(forumData);
  userLocationData.map(l => addMapMarker(l));
};

addUserMarkers();
