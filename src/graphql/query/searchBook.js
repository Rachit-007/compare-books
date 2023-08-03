import { gql } from "@apollo/client";

/**
 * this is query to get all the books on search
 */
export const GET_BOOKS = gql`
  query getBooks($input: searchBook!) {
    books(input: $input) {
      id
      volumeInfo {
        title
        authors
        publisher
        description
        averageRating
        ratingsCount
        imageLinks {
          thumbnail
        }
      }
      saleInfo {
        buyLink
        saleability
      }
    }
  }
`;
