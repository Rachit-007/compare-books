import { Search } from "../src/components/search/search";
import client from "../src/graphql/client";
import { GET_BOOKS } from "../src/graphql/query/searchBook";
import { Pagination, Stack } from "@mui/material";
import useHome from "../src/talons/useHome";
import BookList from "../src/components/books/bookList";
import { Filter } from "../src/components/filter/filter";

/**
 * Home component responsible for rendering the home page.
 * @param {Object} props - The props object containing the fetched books or a message.
 * @param {Array} props.books - An array of books to be displayed on the page.
 * @param {string} props.msg - A message to be displayed when there are no books.
 * @returns {JSX.Element} The JSX element representing the home page.
 */
export default function Home(props) {
  const { handleChange, router } = useHome();

  return (
    <>
      <Search />
      {props.books ? (
        <>
          <div className="max-w-4xl mx-auto mt-5">
            <Filter />
          </div>
          <div className="max-w-4xl mx-auto mt-5">{/* <Filter /> */}</div>
          <div className="flex flex-wrap max-w-6xl mx-auto justify-center">
            {props.books.map((book) => (
              <BookList
                books={book.volumeInfo}
                saleInfo={book.saleInfo}
                id={book.id}
                key={book.id}
              />
            ))}
          </div>
          <div className="max-w-6xl m-auto flex justify-center my-10">
            <div>
              <Stack spacing={2}>
                <Pagination
                  count={parseInt(router.query.index) + 10}
                  page={parseInt(router.query.index)}
                  color="primary"
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center text-2xl mt-10 font-bold">{props.msg}</h1>
      )}
    </>
  );
}

/**
 * Asynchronous function to fetch server-side props based on the provided context.
 * @param {Object} context - The context object containing information about the request.
 * @param {Object} context.query - The query object containing search and filter parameters.
 * @param {string} context.query.search - The search parameter for filtering books.
 * @param {string} context.query.filter - The filter parameter for further filtering books.
 * @returns {Object} An object containing the fetched books or a message.
 * @throws {Error} If an error occurs during the data fetching process.
 */
export async function getServerSideProps(context) {
  let { query } = context;

  if (query.search) {
    try {
      if (query.filter) {
        const { data } = await client.query({
          query: GET_BOOKS,
          variables: {
            input: {
              search: query.search,
              index:
                parseInt(query.index) === 1 ? 1 : parseInt(query.index) * 10,
              filter: query.filter,
            },
          },
        });
        return {
          props: {
            books: data.books,
          },
        };
      } else {
        const { data } = await client.query({
          query: GET_BOOKS,
          variables: {
            input: {
              search: query.search,
              index:
                parseInt(query.index) === 1 ? 1 : parseInt(query.index) * 10,
            },
          },
        });
        return {
          props: {
            books: data.books,
          },
        };
      }
    } catch (err) {
      console.log(err);
      return {
        props: { msg: "No Book Found" },
      };
    }
  } else {
    return {
      props: { msg: "Find Your Favourite Books Here !!!" },
    };
  }
}
