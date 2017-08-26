import { responseWrapper } from '../models/';
import { isValidUserData } from '../schema/';

const fetchForumData = async () => {
  const response = await fetch('http://ffforumautomator.herokuapp.com/hackable-data');

  return response.ok
    ? responseWrapper(true, response.json())
    : responseWrapper(false, null, response.status);
};

const filterInvalidUserData = data => data.filter(isValidUserData);
const mapUserToLocationData = user =>
  Object.assign({}, { username: user.username }, user.hackable_json.usermap_location);

const mapToLocationData = data => filterInvalidUserData(data).map(mapUserToLocationData);

const fetchUserLocations = async () => {
  const dataResult = await fetchForumData();

  return dataResult.success ? mapToLocationData(dataResult.value) : [];
};

export default fetchUserLocations;
