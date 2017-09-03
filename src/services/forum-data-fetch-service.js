import { isValidUserData } from '../schema/';

export const fetchForumData = () => fetch('https://ffforumautomator.herokuapp.com/hackable-data');

const between = (x, min, max) => x >= min && x <= max;
const filterInvalidUserData = data => data.filter(isValidUserData);
const parseLocation = user => JSON.parse(user.hackable_json).usermap_location;
const mapUserToLocationData = user => ({
  username: user.username,
  ...parseLocation(user),
});

const combineDuplicateCoords = threshold => (location, index, locations) => ({
  coords: { lat: location.lat, lng: location.lng },
  users: locations.filter(
    l =>
      between(l.lat, location.lat - threshold, location.lat + threshold) &&
      between(l.lng, location.lng - threshold, location.lng + threshold),
  ),
});

const findCentroid = (coords) => {
  const x = coords.map(c => c.lat);
  const y = coords.map(c => c.lng);
  const lat = (Math.min(...x) + Math.max(...x)) / 2;
  const lng = (Math.min(...y) + Math.max(...y)) / 2;
  return { lat, lng };
};

const setCoordsToCentroid = location => ({
  ...location,
  coords: findCentroid(location.users.map(u => ({ lat: u.lat, lng: u.lng }))),
});

const setUsername = location => ({
  ...location,
  username: location.users.length > 1 ? null : location.users[0].username,
});

const mapToLocationData = (data, dedupeThreshold) =>
  filterInvalidUserData(data)
    .map(mapUserToLocationData)
    .map(combineDuplicateCoords(dedupeThreshold))
    .map(setCoordsToCentroid)
    .map(setUsername);

export const extractUserLocations = (forumData, dedupeThreshold = 0) =>
  mapToLocationData(forumData, dedupeThreshold);

export const profileImage = username =>
  `https://cdn-standard6.discourse.org/user_avatar/www.funfunforum.com/${username}/90/149_1.png`;
