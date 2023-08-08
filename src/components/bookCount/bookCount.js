import useBookCount from "../../hooks/useBookCount";

/**
 *this shows the count of book which are added in the compare list
 * @returns books count which are added in the compare list
 */
const BookCount = () => {
  const { bookCount } = useBookCount();
  return (
    <>
      <div className="absolute right-4 top-2 h-5 w-5 text-center rounded-full bg-blue-500 text-white text-sm">
        {bookCount}
      </div>
    </>
  );
};

export default BookCount;
