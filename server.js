const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// import typeDefs
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers');

// import env variables
require('dotenv').config({path: 'variables.env'});
const User = require('./models/User');
const Post = require('./models/Post');


// connect to mlab db
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

// create apollo/graphql server using typedefs/resolvers/context object
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        User,
        Post
    }
});

server.listen(4500).then(({url}) => {
    console.log(`Server listening on ${url}`);
});