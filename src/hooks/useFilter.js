import { useRouter } from "next/router";
import { useState } from "react";

const useFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();

  const { query } = router;

  let filter = query.filter === "free-ebooks" ? "Not For Sale" : "For Sale";

  const open = Boolean(anchorEl);

  /**
   *This function is used to change the state and set the value of the current event.
   * @param {*} event
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * this function will trigger when user close the filter box
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   *This function will set the search url and set the filter params to search url
   * @param {String} filter
   */
  const filterValue = (filter) => {
    router.push({
      query: {
        search: query.search,
        index: query.index,
        filter,
      },
    });
    handleClose();
  };

  /**
   * it will clear the search filter from the search url
   */
  const clearFilter = () => {
    router.push({
      query: {
        search: query.search,
        index: query.index,
      },
    });
  };

  return {
    clearFilter,
    filterValue,
    handleClose,
    handleClick,
    open,
    filter,
    anchorEl,
    query,
  };
};
export default useFilter;
