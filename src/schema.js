// schema.js
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

let count = 0;

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                description: 'Hello World Example',
                resolve: (root, id, source, fieldASTs) => {
                    console.log('root=',root);
                    console.log('id=',id);
                    console.log('source=',source);
                    console.log('fieldASTs=',fieldASTs);
                    return `world ${id.toString()}`}
            },
            nickName: {
                type: GraphQLString,
                resolve: ()=> 'Max'
            },
            age:{
                type: GraphQLInt,
                resolve: () => count
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'Updates the count',
                resolve: function() {
                    count += 1;
                    return count;
                }
            }
        }
    })
});


export default schema;
