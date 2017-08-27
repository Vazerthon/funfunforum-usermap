import {
  initMap,
  addMapMarker,
  fetchForumData,
  extractUserLocations,
  renderMapHost,
  showToast,
} from './services/';
import './styles.css';

renderMapHost('mapHost');
initMap('mapHost');

const htmlCaption = (username, caption) => `
  <p><b><center>${username}</center></b></p>
  <p>${caption}</p>
`;

const addUserMarkers = async () => {
  const forumDataResult = await fetchForumData();
  const forumData = await forumDataResult.json();
  const userLocationData = extractUserLocations(forumData);
  userLocationData
    .map(l => ({ lat: l.lat, lng: l.lng, caption: htmlCaption(l.username, l.caption) }))
    .map(l => addMapMarker(l));
};

addUserMarkers();
showToast('hello toast');
