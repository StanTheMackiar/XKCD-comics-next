import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import { search } from "../../services/search";
import styles from "../../styles/Search.module.css";

const Search = ({ query, results }) => {
  const router = useRouter();

  return (
    <PageLayout title={`xkcd: Results for ${query}`}>
      {results.length ? (
        <h3>
          Showing {results.length} results for {`"${query}"`}
        </h3>
      ) : (
        <h3>Not results found for {query} :(</h3>
      )}

      <div className={styles.container}>
        {results.map((result) => {
          return (
            <div
              key={result.id}
              className={styles.comicSearch}>
              <Image
                width={100}
                height={100}
                src={result.img}
                alt={result.alt}
                onClick={() => router.push(`/comic/${result.id}`)}
                style={{ cursor: "pointer" }}
              />
              <Link href={`/comic/${result.id}`}>
                <a className={styles.link}>
                  <h4>{result.title}</h4>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Search;

export async function getServerSideProps(context) {
  console.log(context);
  const { query } = context;
  const { q = "" } = query;
  console.log(q);

  const { results } = await search({ query: q });

  return {
    props: {
      query: q,
      results,
    },
  };
}
