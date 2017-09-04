import "./styles.css";
import {
  initMap,
  addMapMarker,
  fetchForumData,
  extractUserLocations,
  showToast
} from "./services/";

initMap("map-host");

const htmlCaption = (username, caption) => `
  <a href="https://www.funfunforum.com/u/${username}/">${username}</a>
  <p>${caption}</p>
`;

const combineDuplicateCoords = (location, index, locations) => ({
  coords: { lat: location.lat, lng: location.lng },
  users: locations.filter(l => l.lat === location.lat && l.lng === location.lng)
});

const addCaptions = location => ({
  ...location,
  captions: location.users.map(u => htmlCaption(u.username, u.caption))
});

const combineCaptions = multiUserLocation => ({
  ...multiUserLocation,
  caption: multiUserLocation.captions.reduce(
    (p, c) => `${p}${p ? "<hr />" : ""}${c}`,
    ""
  )
});

const setUsername = location => ({
  ...location,
  username: location.users.length > 1 ? null : location.users[0].username
});

const addUserMarkers = async () => {
  const forumDataResult = await fetchForumData();
  if (!forumDataResult.ok) {
    showToast(`Problem loading forum data: ${forumDataResult.statusText}`);
    return;
  }
  const forumData = await forumDataResult.json();
  if (!Array.isArray(forumData)) {
    showToast("Problem loading forum data: expected an array");
    return;
  }
  const userLocationData = extractUserLocations(forumData);
  userLocationData
    .map(combineDuplicateCoords)
    .map(addCaptions)
    .map(combineCaptions)
    .map(setUsername)
    .map(l => {
      return addMapMarker({
        lat: l.coords.lat,
        lng: l.coords.lng,
        username: l.username,
        caption: l.caption,
        hideProfilePicture: l.hideProfilePicture
      });
    });

  showToast(
    `Loaded forum data for ${forumData.length} users, ${userLocationData.length} of them have a location set`
  );
};

addUserMarkers();
