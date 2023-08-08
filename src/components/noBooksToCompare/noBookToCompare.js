import useNoBookToCompare from "../../hooks/useNoBookToCompare";

/**
 * if there are no books to compare this component will call
 * @returns the component which shows that no books to compare
 */

const NoBookToCompare = () => {
  const { router } = useNoBookToCompare();

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-36">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-book-marked"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <polyline points="10 2 10 10 13 7 16 10 16 2" />
          </svg>
        </div>
        <div>
          <h1 className="mt-7 text-3xl font-bold">No Books to Compare</h1>
        </div>
        <div
          className="mt-10 px-10 bg-blue-500 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-600"
          onClick={() => router.back()}
        >
          <button>Continue Search</button>
        </div>
      </div>
    </>
  );
};

export default NoBookToCompare;
