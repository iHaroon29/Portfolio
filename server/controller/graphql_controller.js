import { buildSchema } from 'graphql'
import json from '../test.json' assert { type: 'json' }

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`)

// The root provides a resolver function for each API endpoint
var root = {
  course: (args) => {
    console.log(args.id)
    return json.collection.filter((course) => course.id === args.id)[0]
  },
}

export { schema, root }
