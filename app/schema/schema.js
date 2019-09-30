const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const items = [
    { id: 1, name: 'Chicken', price: 50, additionsID: '1'},
    { id: 2, name: 'Chicken HOT', price: 27},
    { id: 3, name: 'Chicken Burger', price: 25}
    ];

const additions = [
    { id: 1, name: 'Sauce', price: 2},
    { id: 2, name: 'Cheese', price: 1},
    { id: 3, name: 'More MEAT', price: 10}
];

const services = [
    { id: 1, name: 'Delivery', price: 30},
    { id: 2, name: 'Emergency delivery', price: 100},
    { id: 3, name: 'Take my money!', price: 150}
];

const ServiceType = new GraphQLObjectType({
    name: 'Services',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
    }),
});

const AdditionType = new GraphQLObjectType({
    name: 'Additions',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
    }),
});

const ItemType = new GraphQLObjectType({
    name: 'Items',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        addition: {
            type: AdditionType,
            resolve(parent, args) {
                return additions.find(addition => addition.id == parent.id);
            }
        }
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        item: {
            type: ItemType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return items.find(items => items.id == args.id);
            },
        },
        service: {
            type: ServiceType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return services.find(service => service.id == args.id);
            },
        },
        addition: {
            type: AdditionType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return additions.find(addition => addition.id == args.id);
            },
        },
    }
});



module.exports = new GraphQLSchema({
    query: Query,
});
