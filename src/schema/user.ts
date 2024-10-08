import { buildSchema } from "graphql";

export const usersGQLSchema = buildSchema(`#graphql
    type User {
        id: String!
        username: String!
        email: String!
        role: UserRole
        createdAt: String!
        updatedAt: String!
    }

    enum UserRole {
        user
        admin
    }

    type Query {
        users: usersInfoResponse!
        user(id: String!): User!
    }

    type usersInfoResponse {
        success: Boolean!
        total: Int!
        data: [User!]!
    }

    type Mutation {
        regUser(username: String!, email: String!, password: String!, role: String): User!
        loginUser(email: String!, password: String!): User!
        updateUser(id: String!, username: String, email: String, password: String): User!
        deleteUser(id: String!): deleteResponse!
    }

    type deleteResponse {
        success: Boolean!
        message: String!
        id: String!
    }

`)