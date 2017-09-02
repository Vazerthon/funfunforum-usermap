import { isValidUserData } from '../schema/';

export const fetchForumData = () => fetch('https://ffforumautomator.herokuapp.com/hackable-data');

const filterInvalidUserData = data => data.filter(isValidUserData);
const parseLocation = user => JSON.parse(user.hackable_json).usermap_location;
const mapUserToLocationData = user => ({
  username: user.username,
  ...parseLocation(user),
});
const mapToLocationData = data => filterInvalidUserData(data).map(mapUserToLocationData);

export const extractUserLocations = forumData => mapToLocationData(forumData);
