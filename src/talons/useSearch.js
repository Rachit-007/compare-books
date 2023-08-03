import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useSearch = () => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  /**
   *this function is called when user search the books it will set the search params.
   * @param {{search:String}} data
   */
  const onSearch = (data) => {
    if (data.search) {
      router.push({ query: { search: data.search, index: 1 } });
    }
  };

  // this useEffect will set the value in the search bar if book is already searched
  useEffect(() => {
    if (router.query) {
      setValue("search", router.query.search);
    }
  }, []);

  return { register, handleSubmit, onSearch };
};

export default useSearch;
