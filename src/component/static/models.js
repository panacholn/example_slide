import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';

const Province = new GraphQLObjectType({
  name: 'Province',
  fields: {
    key: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    code: {
      type: new GraphQLNonNull(GraphQLString)
    },
    regionCode: {
      type: new GraphQLNonNull(GraphQLString)
    },
    url: {
      type: new GraphQLNonNull(GraphQLString)
    },
  }
});


// type for queries
export let Location = new GraphQLObjectType({
  name: 'Static',
  fields: {
    key: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    code: {
      type: new GraphQLNonNull(GraphQLString)
    },
    url: {
      type: GraphQLString
    },
    nested: {
      type: new GraphQLList(Province)
    },
  }
});
