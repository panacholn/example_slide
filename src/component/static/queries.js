import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import axios from 'axios';

import { Location } from './models';

// const User = {
//   type: UserType,
//   args: {
//     // argument for searching user
//     id: {
//       name: 'id',
//       type: new GraphQLNonNull(GraphQLID)
//     }
//   },
//   // method that forms request and returns data
//   resolve (root, params, options) {
//     return UserModel
//       .findById(params.id)
//       .exec();  // return JSON
//   }
// };

const Locations = {
  type: new GraphQLList(Location),
  args: {},
  resolve (root, params, options) {
    return axios.get('http://dev-service.portfolio.tech/api/v1/static/locations')
      .then(res => res.data)
      .catch(err => console.log('error na ja.'));
  }
};

export default Locations;
