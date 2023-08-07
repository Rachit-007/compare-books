import { includes } from "lodash";
import React from "react";
import useCompareBtn from "../../hooks/useCompareBtn";
import PropTypes from "prop-types";

/**
 *if the book is already present in the list you see the remove button and if not you see the add button
 * @param {String} param0
 * @returns the button to add or remove the book from comparison list
 */
const CompareBtn = ({ bookId }) => {
  const { books, addBooksToCompare, removeBooksFromCompare } = useCompareBtn();
  return (
    <>
      {!includes(books, bookId) ? (
        <div
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          onClick={() => addBooksToCompare(bookId)}
        >
          Compare
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      ) : (
        <div
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
          onClick={() => removeBooksFromCompare(bookId)}
        >
          <span>Remove</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 -mr-1"
            viewBox="0 0 24 24"
            height="15"
            width="15"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
          </svg>
        </div>
      )}
    </>
  );
};

CompareBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default CompareBtn;
