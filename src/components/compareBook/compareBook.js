import { size } from "lodash";
import { toast } from "react-hot-toast";
import { Title } from "../../constants/titleForComparison";
import useCompareBooks from "../../hooks/useCompareBooks";
import NoBookToCompare from "../noBooksToCompare/noBookToCompare";
import BookListToCompare from "./bookListToCompare";

/**
 *this component is to show to list of books and compare them with different attribute
 * @returns the book comparison layout
 */
const CompareBook = () => {
  const { compareBooks, error, loading, router, remoeAll } = useCompareBooks();

  if (loading) {
    return <></>;
  }

  if (error) {
    toast.error("There was some error.Please try again Later...");
    router.back();
  }

  return (
    <>
      {size(compareBooks?.multipleBooksById) > 0 ? (
        <>
          <div className="max-w-7xl mx-auto overflow-y-auto">
            <div className="flex justify-between mt-4 mx-2">
              <button
                className="h-10 w-20 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 max-sm:left-3 max-sm:text-sm max-sm:h-9 max-sm:w-15"
                onClick={() => router.back()}
              >
                <span className="text-white">Back</span>
              </button>
              <button
                className="h-10 w-28 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 max-sm:left-3 max-sm:text-sm max-sm:h-9 max-sm:w-15 whitespace-nowrap"
                onClick={() => remoeAll()}
              >
                <span className="text-white">Remove All</span>
              </button>
            </div>
            <div className="flex mt-10 whitespace-nowrap justify-center">
              <div className="px-5 text-left ">
                <div className="h-56"></div>
                {Title.map((title, index) => (
                  <div
                    className="mt-3 font-semibold text-md uppercase border-r-2 border-r-gray-300 pr-5 max-sm:text-sm max-sm:pr-4"
                    key={index}
                  >
                    {title}
                  </div>
                ))}
              </div>
              <div className="flex overflow-x-auto snap-x">
                {compareBooks.multipleBooksById.map((book) => (
                  <BookListToCompare book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <NoBookToCompare />
      )}
    </>
  );
};

export default CompareBook;
