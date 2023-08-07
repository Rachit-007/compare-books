import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GET_BOOKS_FOR_COMPARE } from "../graphql/query/getBooksForCompare";
import { removeAllCompareBooks } from "../slice/bookSlice";

const useCompareBooks = () => {
  const router = useRouter();
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  /**
   * this is the query for getting the books information for comparisons
   */
  const {
    data: compareBooks,
    loading,
    error,
  } = useQuery(GET_BOOKS_FOR_COMPARE, {
    variables: {
      multipleBooksById: books,
    },
  });

  /**
   * function to remove all books from the comparison list
   */
  const remoeAll = () => {
    dispatch(removeAllCompareBooks());
  };

  return { compareBooks, loading, error, router, remoeAll };
};

export default useCompareBooks;
