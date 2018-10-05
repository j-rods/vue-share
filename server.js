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

    type Query {
        getTodos: [Todo]
    }

    type Mutation {
        addTodo(task: String, completed: Boolean): Todo
    }
`;

const resolvers = {
    Query: {
        getTodos: () => todos 
    },
    Mutation: {
        addTodo:(_, {task, completed}) => {
            const todo = {task: task, completed: completed};
            todos.push(todo);
            return todo;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(4500).then(({url}) => {
    console.log(`Server listening on ${url}`);
});