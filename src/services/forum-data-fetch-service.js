import { isValidUserData } from '../schema/';

export const fetchForumData = () => fetch('http://ffforumautomator.herokuapp.com/hackable-data');

const filterInvalidUserData = data => data.filter(isValidUserData);
const mapUserToLocationData = user =>
  Object.assign({}, { username: user.username }, JSON.parse(user.hackable_json).usermap_location);
const mapToLocationData = data => filterInvalidUserData(data).map(mapUserToLocationData);

export const extractUserLocations = forumData => mapToLocationData(forumData);
