import PageLayout from "../../components/Layout/PageLayout";
import fs from "fs/promises";
import Image from "next/image";
import styles from "../../styles/Comic.module.css";
import { basename } from "path";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

const Comic = ({ id, img, height, width, alt, title, hasPrevious, hasNext, nextId, prevId }) => {
  
  const router = useRouter();

  return (
    <PageLayout title={`xkcd: #${id}`}>
      <section className={styles.section}>
        <h2>{title}</h2>
        <h4>Comic #{id}</h4>
        <Image
          width={width * 1.2}
          height={height * 1.2}
          alt={alt}
          src={img}
        />
        <p className={styles.p}>{alt}</p>
        <div className={styles.buttonContainer}>
        {
          hasPrevious && <Button onPress={()=> router.push(`/comic/${prevId}`)} size="sm">Previous</Button>
        }
        {
          hasNext && <Button size="sm" onPress={()=> router.push(`/comic/${nextId}`)}>Next</Button>
        }
        </div>
      </section>
    </PageLayout>
  );
};

export default Comic;


// Define las rutas dinamicas que se van a crear como paginas estaticas al hacer el build

export async function getStaticPaths() {
  const files = await fs.readdir("./comics");

  const paths = files.map(file => {
    const id = basename(file, '.json')
    return { params: { id }}
  })

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}


// Obtiene los datos que pasan a ser contenido statico en build
export async function getStaticProps({ params }) {
  const { id } = params;

  const idNumber = +id;
  const prevId = idNumber - 1;
  const nextId = idNumber + 1;

  const [prevResult, nextResult] = await Promise.allSettled([
    fs.stat(`./comics/${prevId}.json`),
    fs.stat(`./comics/${nextId}.json`),
  ]);

  const hasPrevious = prevResult.status === 'fulfilled'
  const hasNext = nextResult.status === 'fulfilled'

  

  const content = await fs.readFile(`./comics/${id}.json`, "utf8");
  const comic = JSON.parse(content);
  console.log(comic);

  return {
    props: {
      ...comic,
      hasPrevious,
      hasNext,
      nextId,
      prevId
    },
  };
}
