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
  if (!forumDataResult.ok) {
    showToast(`Problem loading forum data: ${forumDataResult.statusText}`);
    return;
  }
  const forumData = await forumDataResult.json();
  if (!Array.isArray(forumData)) {
    showToast('Problem loading forum data: expected an array');
    return;
  }
  const userLocationData = extractUserLocations(forumData);
  userLocationData
    .map(l => ({ lat: l.lat, lng: l.lng, caption: htmlCaption(l.username, l.caption) }))
    .map(l => addMapMarker(l));

  showToast(
    `Loaded forum data for ${forumData.length} users, ${userLocationData.length} of them have a location set`,
  );
};

addUserMarkers();
