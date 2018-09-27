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
    typeDefs
});

server.listen(4500).then(({url}) => {
    console.log(`Server listening on ${url}`);
});