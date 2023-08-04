import { useRouter } from "next/router";

const useBookListToCompare = () => {
  const router = useRouter();

  return { router };
};

export default useBookListToCompare;
