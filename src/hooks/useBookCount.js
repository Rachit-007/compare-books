import { useSelector } from "react-redux";

/**
 *
 * @returns count of the which are going to be compared
 */
const useBookCount = () => {
  /**
   * to display the count on top of the compare button
   */
  const { books } = useSelector((state) => state.books);

  return { bookCount: books.length };
};

export default useBookCount;
