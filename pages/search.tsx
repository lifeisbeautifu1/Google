import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Header, SearchResults } from '../components';
import Response from '../response';

const Search: NextPage = ({ data }: any) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <Header />
      <SearchResults results={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
};

export default Search;
