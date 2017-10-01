import './styles.css';
import { initMap, addMapMarker, fetchForumData, showToast } from './services/';

initMap('map-host');

const htmlCaption = (username, caption, profileUrl) => `
  <a href="${profileUrl}">${username}</a>
  <p>${caption}</p>
`;

const combineDuplicateCoords = (user, index, users) => ({
  coords: { lat: user.lat, lng: user.lng },
  users: users.filter(l => l.lat === user.lat && l.lng === user.lng),
});

const addCaptions = user => ({
  ...user,
  captions: user.users.map(u =>
    htmlCaption(u.username, u.caption, u.profileUrl),
  ),
});

const combineCaptions = multiUserLocation => ({
  ...multiUserLocation,
  caption: multiUserLocation.captions.reduce(
    (p, c) => `${p}${p ? '<hr />' : ''}${c}`,
    '',
  ),
});

const setUsernameAndPictureUrl = location => ({
  ...location,
  username: location.users.length > 1 ? null : location.users[0].username,
  profilePicture:
    location.users.length > 1 ? null : location.users[0].profilePicture,
});

const toFlatObject = apiResult => ({
  ...apiResult.hackableJson.usermapLocation,
  profilePicture: apiResult.profilePicture,
  profileUrl: apiResult.profileUrl,
  username: apiResult.username,
  error: apiResult.hackableJson.error,
});

const addUserMarkers = async () => {
  let forumDataResult;
  try {
    forumDataResult = await fetchForumData();
  } catch (error) {
    showToast(`Problem loading forum data: ${error.message}`);
    return;
  }

  const users = await forumDataResult.data.data.users;
  if (!Array.isArray(users)) {
    showToast('Problem loading forum data: expected an array');
    return;
  }

  users
    .map(toFlatObject)
    .map(combineDuplicateCoords)
    .map(addCaptions)
    .map(combineCaptions)
    .map(setUsernameAndPictureUrl)
    .map(l =>
      addMapMarker({
        lat: l.coords.lat,
        lng: l.coords.lng,
        username: l.username,
        caption: l.caption,
        profilePicture: l.profilePicture,
      }),
    );

  showToast(`Loaded forum data for ${users.length} users`);
};

addUserMarkers();
