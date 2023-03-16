import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation AddUser($name: String!, $age: Int!) {
        addUser(name: $name, age: $age) {
            name
            age
            id
        }
    }
`