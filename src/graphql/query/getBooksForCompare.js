import { gql } from "@apollo/client";

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
