import { useRouter } from "next/router";

const useHome = () => {
  const router = useRouter();

  /**
   *This function will change the in the url query params if url query params has already filter param it will keep it and change the only index.
   * @param {Number} value
   */
  const handleChange = (data, value) => {
    if (router.query.filter) {
      router.push({
        query: {
          search: router.query.search,
          index: value,
          filter: router.query.filter,
        },
      });
    } else {
      router.push({ query: { search: router.query.search, index: value } });
    }
  };
  return { handleChange, router };
};

export default useHome;
