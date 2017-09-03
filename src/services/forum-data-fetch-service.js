import { isValidUserData } from '../schema/';

export const fetchForumData = () => fetch('https://ffforumautomator.herokuapp.com/hackable-data');

const filterInvalidUserData = data => data.filter(isValidUserData);
const parseLocation = user => JSON.parse(user.hackable_json).usermap_location;
const mapUserToLocationData = user => ({
  username: user.username,
  ...parseLocation(user),
});

const combineDuplicateCoords = (location, index, locations) => ({
  coords: { lat: location.lat, lng: location.lng },
  users: locations.filter(l => l.lat === location.lat && l.lng === location.lng),
});

const setUsername = location => ({
  ...location,
  username: location.users.length > 1 ? null : location.users[0].username,
});

const mapToLocationData = data =>
  filterInvalidUserData(data)
    .map(mapUserToLocationData)
    .map(combineDuplicateCoords)
    .map(setUsername);

export const extractUserLocations = forumData => mapToLocationData(forumData);
