import PageLayout from "../components/PageLayout";
import fs from "fs/promises";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css"

export default function Home({ latestComics }) {
  return (
    <PageLayout title={"XKCD - Home"}>
      <h2 className={styles.h2}>Latest comics</h2>
      <section className={styles.grid}>
        {latestComics.map((comic) => {
          return (
            <div key={comic.id} className={styles.comic}>
              <h3>{comic.title} <i>#{comic.id}</i></h3>
              <Link href={`/comic/${comic.id}`}>
                <a>
                  <Image
                    width={comic.width}
                    height={comic.height}
                    src={comic.img}
                    alt={comic.alt}
                  />
                </a>
              </Link>
            </div>
          );
        })}
        </section>
    </PageLayout>
  );
}

export async function getStaticProps(context) {
  const files = await fs.readdir("./comics");
  const latestComicsFiles = files.slice(-20, files.length);

  const promisesReadFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, "utf8");
    return JSON.parse(content);
  });

  const latestComics = await Promise.all(promisesReadFiles);

  return {
    props: {
      latestComics,
    },
  };
}
