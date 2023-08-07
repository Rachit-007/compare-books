import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";

/**
 * @param {Object} book - The individual book with its attributes.
 * @param {Object} book.volumeInfo - The book's volume information.
 * @param {Object} book.saleInfo - The book's sale information.
 */
const BookListToCompare = ({ book }) => {
  return (
    <>
      <div className=" px-5 flex justify-center flex-col items-center w-56 snap-start mt-2 max-sm:text-xs text-sm">
        <div className="w-full flex justify-center h-52 mt-1">
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg"
            }
          />
        </div>
        <div className="mt-4 font-semibold w-full uppercase text-ellipsis overflow-hidden whitespace-nowrap">
          {book.volumeInfo.title}
        </div>
        <div className="mt-4 w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {book.volumeInfo.publisher}
        </div>
        <div className="mt-4 w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {book.volumeInfo.authors.join(",")}
        </div>
        <div className="mt-4 w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {book.saleInfo.saleability === "NOT_FOR_SALE" ? "No" : "Yes"}
        </div>
        <div className="mt-4 w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {book.saleInfo.buyLink === null ? (
            "NA"
          ) : (
            <a href={book.saleInfo.buyLink} target="_blank">
              <div className="flex items-center cursor-pointer">
                <span className="text-sm text-gray-400 font-bold my-0 py-0">
                  GET IT ON
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  viewBox="0 0 48 48"
                  height="22px"
                >
                  <path
                    fill="#01579b"
                    d="M8,40.884V7.116c0-1.622,1.752-2.639,3.161-1.835l29.547,16.881c1.42,0.811,1.42,2.858,0,3.669 L11.161,42.718C9.753,43.523,8,42.506,8,40.884z"
                  />
                  <polygon
                    fill="#00e5ff"
                    points="36,28.522 36,10 18,10 18,38.81"
                  />
                  <polygon
                    fill="#00b0ff"
                    points="18,38.81 18,10 13,10 13,41.667"
                  />
                  <polygon
                    fill="#fff"
                    points="33,17.71 30.509,16.21 28,17.71 28,10 33,10"
                  />
                </svg>
              </div>
            </a>
          )}
        </div>
        <div className="mt-4 w-full mb-3">
          {book.volumeInfo.averageRating ? (
            <div className="flex">
              <Rating
                initialValue={book.volumeInfo.averageRating}
                readonly
                size={20}
              />{" "}
              <span className="text-gray-600 mt-1 mx-3">
                {book.volumeInfo.ratingsCount
                  ? book.volumeInfo.ratingsCount
                  : "No"}{" "}
                Reviews
              </span>
            </div>
          ) : (
            "NA"
          )}
        </div>
      </div>
    </>
  );
};

BookListToCompare.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      averageRating: PropTypes.number,
      ratingsCount: PropTypes.number,
    }).isRequired,
    saleInfo: PropTypes.shape({
      saleability: PropTypes.oneOf(["FOR_SALE", "NOT_FOR_SALE"]).isRequired,
      buyLink: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default BookListToCompare;
