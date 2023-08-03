import { useRouter } from "next/router";
import React from "react";

const useHeader = () => {
  const router = useRouter();
  return { router };
};

export default useHeader;
