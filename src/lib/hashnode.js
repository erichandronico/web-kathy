// src/lib/hashnode.js
import { GraphQLClient, gql } from 'graphql-request';

export const client = new GraphQLClient('https://api.hashnode.com/', {
  headers: { 'Content-Type': 'application/json' }
});

export const GET_POSTS = gql`
  query GetUserPosts($username: String!, $page: Int!) {
    user(username: $username) {
      publication {
        posts(page: $page) {
          title
          brief
          slug
          coverImage
          dateAdded
        }
      }
    }
  }
`;