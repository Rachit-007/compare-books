import { useRouter } from "next/router";

const useNoBookToCompare = () => {
  const router = useRouter();

  return { router };
};

export default useNoBookToCompare;
