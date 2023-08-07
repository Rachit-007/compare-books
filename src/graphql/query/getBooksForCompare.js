import { gql } from "@apollo/client";

/**
 * this query will send the array of ids and will get the details of the book based on the ids you give
 */
export const GET_BOOKS_FOR_COMPARE = gql`
  query MultipleBooksById($multipleBooksById: [ID]) {
    multipleBooksById(id: $multipleBooksById) {
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
