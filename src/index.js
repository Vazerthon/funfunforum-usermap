import './styles.css';
import {
  initMap,
  addMapMarker,
  fetchForumData,
  extractUserLocations,
  showToast,
  profileImage,
} from './services/';

initMap('map-host');

const htmlCaption = (username, caption) => `
  <div class="profile-container">
    <a class="profile-link" href="https://www.funfunforum.com/u/${username}/">${username}</a>
    <img class="profile-image" src="${profileImage(username)}" />
    <span class="profile-caption">${caption}</span>
  </div>
`;

const addCaptions = location => ({
  ...location,
  captions: location.users.map(u => htmlCaption(u.username, u.caption)),
});

const combineCaptions = multiUserLocation => ({
  ...multiUserLocation,
  caption: `
    <div class="profiles-container">
      ${multiUserLocation.captions.reduce((p, c) => `${p}${p ? '' : ''}${c}`, '')}
    </div>
  `,
});

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
  const userLocationData = extractUserLocations(forumData, 1.2);
  userLocationData.map(addCaptions).map(combineCaptions).map(l =>
    addMapMarker({
      lat: l.coords.lat,
      lng: l.coords.lng,
      username: l.username,
      caption: l.caption,
    }),
  );

  showToast(
    `Loaded forum data for ${forumData.length} users, ${userLocationData.length} of them have a location set`,
  );
};

addUserMarkers();
