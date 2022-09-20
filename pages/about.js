import PageLayout from "../components/Layout/PageLayout";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <PageLayout title={"xkcd: Copyright"}>
      <section className={styles.section}>
        <h2>Copyright</h2>
        <p className={styles.p}>
          This work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/2.5/" target="_blank" rel="noreferrer">Creative Commons
          Attribution-NonCommercial 2.5 License.</a>
        </p>
      </section>
    </PageLayout>
  );
};

export default about;
