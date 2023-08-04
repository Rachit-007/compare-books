import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { GET_BOOKS_FOR_COMPARE } from "../graphql/query/getBooksForCompare";

const useCompareBooks = () => {
  const router = useRouter();
  const { books } = useSelector((state) => state.books);

  const {
    data: compareBooks,
    loading,
    error,
  } = useQuery(GET_BOOKS_FOR_COMPARE, {
    variables: {
      multipleBooksById: books,
    },
  });

  return { compareBooks, loading, error, router };
};

export default useCompareBooks;
