import useBookListToCompare from "../../hooks/useBookListToCompare";

const BookListToCompare = ({ book }) => {
  const { router } = useBookListToCompare();

  console.log(book);
  return (
    <>
      <div className="max-w-1/4 px-5 flex justify-center flex-col items-center">
        <div>
          <img src={book.volumeInfo.imageLinks.thumbnail} className="h-44" />
        </div>
        <div className="mt-3 font-semibold text-xl">
          {book.volumeInfo.title}
        </div>
        <div className="mt-5">{book.volumeInfo.publisher}</div>
      </div>
    </>
  );
};

export default BookListToCompare;
