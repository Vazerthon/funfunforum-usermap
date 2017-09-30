import axios from 'axios';

const dataServiceAddress = 'http://localhost:3000/funfunforum';

const userDataGraphQlQuery = `
query {
  users {
    profileUrl
    profilePicture
    username
    hackableJson {
      usermapLocation {
        lat
        lng
        caption
        default
      }
      error
   } 
  }
}
`;

const fetchForumData = () =>
  axios.get(`${dataServiceAddress}?query=${userDataGraphQlQuery}`);

export default fetchForumData;
