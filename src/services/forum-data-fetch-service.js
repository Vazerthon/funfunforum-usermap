import { responseWrapper } from '../models/';

const fetchForumData = async () => {
  // const response = await fetch('http://ffforumautomator.herokuapp.com/hackable-data', {
  //   mode: 'no-cors',
  // });

  // return response.ok
  //   ? responseWrapper(true, response.json())
  //   : responseWrapper(false, null, 'Nae luck');

  const mock = {
    mpj: {
      hackable_json: {
        usermap_location: { lat: 57.7, lng: 11.81, caption: 'Goooood Monday Morning' },
      },
    },
    vallis: {
      hackable_json: {
        usermap_location: { lat: 55.9485, lng: -3.2, caption: "I'm wearing a kilt" },
      },
    },
    troll_a: {
      hackable_json: {
        usermap_location: { lat: 'foo', lng: 'bar', caption: "I'm well sneaky" },
      },
    },
    troll_b: {
      hackable_json: {
        location: { lat: 0, lng: 0 },
      },
    },
  };

  return responseWrapper(true, mock);
};

const fetchUserLocations = async () => {
  const data = await fetchForumData();
  return data;
};

export default fetchUserLocations;
