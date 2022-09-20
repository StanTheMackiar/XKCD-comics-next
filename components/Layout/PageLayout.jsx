import Head from "next/head";
import Header from "./Header";
import styles from "../../styles/PageLayout.module.css"
import Footer from "../Footer";

const PageLayout = ({title = "xkcd: Comics", name = "XKCD Comics", description = "Comics for developers", children}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name={name}
          content={description}
        />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />

    </>
  );
};

export default PageLayout;
