import Head from "next/head";
import CompareBook from "../../src/components/compareBook/compareBook";

const Compare = () => {
  return (
    <>
      <Head>
        <title>Compares Page - GoogleBooks</title>
        <meta
          name="description"
          content="Compare wide range of books here."
        />
      </Head>
      <CompareBook />
    </>
  );
};

export default Compare;
