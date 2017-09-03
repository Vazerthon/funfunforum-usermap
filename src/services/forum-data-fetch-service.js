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

const setUsername = location => ({
  ...location,
  username: location.users.length > 1 ? null : location.users[0].username,
});

const mapToLocationData = (data, dedupeThreshold) =>
  filterInvalidUserData(data)
    .map(mapUserToLocationData)
    .map(combineDuplicateCoords(dedupeThreshold))
    .map(setUsername);

export const extractUserLocations = (forumData, dedupeThreshold = 0) =>
  mapToLocationData(forumData, dedupeThreshold);

export const profileImage = username =>
  `https://cdn-standard6.discourse.org/user_avatar/www.funfunforum.com/${username}/90/149_1.png`;
