import PropTypes from "prop-types";
import { memo } from "react";
import CompareBtn from "../compareBtn/compareBtn";

/**
 *this component is responsible for showing the book in card
 * @param {{books:any,id:String,saleInfo:any}} param
 * @returns the card of each book
 */
const BookList = ({ books, id, saleInfo }) => {
  let sale = saleInfo.saleability == "FOR_SALE" ? "FOR SALE" : "NOT FOR SALE";

  return (
    <>
      <div className="relative w-72 mx-2 my-7 max-h-100 p-3 overflow-hidden flex-col justify-between items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div
          className={`absolute top-10 right-10 w-full text-center shadow-black shadow-md h-8 text-sm flex items-center justify-center transform rotate-45  -translate-y-1/2 translate-x-1/2 text-white font-bold whitespace-nowrap ${
            sale === "FOR SALE" ? `bg-green-500` : `bg-red-600`
          }`}
        >
          <span>{sale}</span>
        </div>
        <div className="mx-auto flex justify-center">
          {books.imageLinks ? (
            <img
              className="rounded-t-lg h-72 "
              src={books.imageLinks.thumbnail}
            />
          ) : (
            <img
              className="rounded-t-lg h-72 items-center"
              src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg"
            />
          )}
        </div>
        <div className="p-5 flex-1 h-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16 overflow-hidden text-ellipsis">
            {books.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[70px] overflow-hidden">
            {books.description}...
          </p>
        </div>
        <div className="flex justify-between items-center">
          <CompareBtn bookId={id} />
          {sale === "FOR SALE" ? (
            <a href={saleInfo.buyLink} target="_blank">
              <div className="flex items-center">
                <span className="text-sm text-gray-400 font-bold">
                  GET IT ON
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="30px"
                  height="30px"
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(BookList);

// Prop types definition for the BookList component
BookList.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
  id: PropTypes.string.isRequired,
  saleInfo: PropTypes.shape({
    saleability: PropTypes.oneOf(["FOR_SALE", "NOT_FOR_SALE"]).isRequired,
    buyLink: PropTypes.string,
  }).isRequired,
};
