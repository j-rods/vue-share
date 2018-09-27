const { ApolloServer, gql } = require('apollo-server');

const todos = [
    { task: 'Setup', completed: false },
    { task: 'Run', completed: true }
];

const typeDefs = gql`
    type Todo {
        task: String
        completed: Boolean
    }
`;

const server = new ApolloServer({
    typeDefs: typeDefs
});

server.listen();