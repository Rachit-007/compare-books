import { size } from "lodash";
import useCompareBooks from "../../hooks/useCompareBooks";
import NoBookToCompare from "../noBooksToCompare/noBookToCompare";
import BookListToCompare from "./bookListToCompare";

const CompareBook = () => {
  const { compareBooks, error, loading, router } = useCompareBooks();

  if (loading) {
    return <></>;
  }

  return (
    <>
      {size(compareBooks?.multipleBooksById) > 0 ? (
        <div className="max-w-7xl mx-auto relative">
          <button
            className="absolute left-10 top-5 inline-flex h-10 w-20 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600"
            onClick={() => router.back()}
          >
            <span className="text-white">Back</span>
          </button>
          <div className="flex justify-center mt-10 items-center">
            <div className="max-w-1/4 px-5 flex justify-center flex-col items-center">
              <div className="font-semibold text-2xl mt-48">Title</div>
              <div className="mt-3 font-semibold text-2xl">Publisher</div>
            </div>
            {compareBooks.multipleBooksById.map((book) => (
              <BookListToCompare book={book} />
            ))}
          </div>
        </div>
      ) : (
        <NoBookToCompare />
      )}
    </>
  );
};

export default CompareBook;
