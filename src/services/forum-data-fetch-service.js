import { responseWrapper } from '../models/';
import { isValidUserData } from '../schema/';

const fetchForumData = async () => {
  // const response = await fetch('http://ffforumautomator.herokuapp.com/hackable-data', {
  //   mode: 'no-cors',
  // });

  // return response.ok
  //   ? responseWrapper(true, response.json())
  //   : responseWrapper(false, null, 'Nae luck');

  const mock = [
    {
      username: 'mpj',
      hackable_json: {
        usermap_location: { lat: 57.7, lng: 11.81, caption: 'Goooood Monday Morning' },
      },
    },
    {
      username: 'vallis',
      hackable_json: {
        usermap_location: { lat: 55.9485, lng: -3.2, caption: "I'm wearing a kilt" },
      },
    },
    {
      username: 'troll_a',
      hackable_json: {
        usermap_location: { lat: 'foo', lng: 'bar', caption: "I'm well sneaky" },
      },
    },
    {
      username: 'troll_b',
      hackable_json: {
        location: { lat: 0, lng: 0 },
      },
    },
  ];

  return responseWrapper(true, mock);
};

const filterInvalidUserData = data => data.filter(isValidUserData);
// const mapUserToLocationData = user => ({ username: user.username, ...user.usermap_location });
const mapUserToLocationData = user =>
  Object.assign({}, { username: user.username }, user.hackable_json.usermap_location);

const validLocationsResult = data =>
  responseWrapper(true, filterInvalidUserData(data).map(mapUserToLocationData));

const fetchUserLocations = async () => {
  const dataResult = await fetchForumData();

  return dataResult.success ? validLocationsResult(dataResult.value) : dataResult;
};

export default fetchUserLocations;
