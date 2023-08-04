import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { compareBooks, removeCompareBooks } from "../slice/bookSlice";

const useCompareBtn = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  /**
   *This function will dispacth the action to store the id in compare books state variable.
   * @param {String} id
   */
  const addBooksToCompare = (id) => {
    dispatch(compareBooks(id));
    toast.success("Added to compare!!!");
  };

  /**
   *This function will dipatch an action to slice and it removes it books from the compare list base on id
   * @param {String} id
   */
  const removeBooksFromCompare = (id) => {
    dispatch(removeCompareBooks(id));
    toast.success("Removed from compare!!!");
  };

  return { books, addBooksToCompare, removeBooksFromCompare };
};

export default useCompareBtn;
