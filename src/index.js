import './styles.css';
import {
  initMap,
  addMapMarker,
  addGroupMarker,
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

// const uniqueByCoords = (prev, current) => {
//   const existing = prev.some(
//     i => i.coords && i.coords.lat === current.coords.lat && i.coords.lng === current.coords.lng,
//   );
//   return [...prev, existing ? null : current];
// };

const addUserMarkers = (forumData) => {
  const userLocationData = extractUserLocations(forumData);
  userLocationData.map(addCaptions).map(combineCaptions).map(l =>
    addMapMarker({
      lat: l.coords.lat,
      lng: l.coords.lng,
      username: l.username,
      caption: l.caption,
    }),
  );

  return userLocationData.length;
};

const addGroupMarkers = (forumData) => {
  const userLocationData = extractUserLocations(forumData, 1.2);
  userLocationData
    .map(addCaptions)
    .map(combineCaptions)
    .filter(l => l.users.length > 1)
    // .reduce(uniqueByCoords, [])
    .map(
      l =>
        (l
          ? addGroupMarker({
            lat: l.coords.lat,
            lng: l.coords.lng,
            caption: l.caption,
            count: l.users.length,
          })
          : null),
    );

  return userLocationData.length;
};

const loadMapData = async () => {
  const forumDataResult = await fetchForumData();
  if (!forumDataResult.ok) {
    showToast(`Problem loading forum data: ${forumDataResult.statusText}`);
    return;
  }
  const forumData = await forumDataResult.json();
  if (!Array.isArray(forumData)) {
    showToast('Problem loading forum data: expected an array');
  }

  const usersWithLocations = addUserMarkers(forumData);
  addGroupMarkers(forumData);

  showToast(
    `Loaded forum data for ${forumData.length} users, ${usersWithLocations} of them have a location set`,
  );
};

loadMapData();
