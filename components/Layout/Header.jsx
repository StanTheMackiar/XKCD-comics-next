import { Navbar, Text, Input } from "@nextui-org/react";
import Link from "next/link.js";
import { SearchIcon } from "./SearchIcon.js";
import styles from "../../styles/Header.module.css";
import { useState } from "react";
import { useRouter } from "next/router.js";

const Header = () => {
  const router = useRouter();

  const [results, setResults] = useState([]);
  const collapseItems = [
    { name: "Latest Comics", url: "/" },
    { name: "About Us", url: "/about" },
  ];

  const handleSearch = (e) => {
    const search = e.target.value;

    if (search) {
      if (e.keyCode === 13) {
        router.push(`/search?q=${search}`);
      }
      fetch(`/api/search?q=${search}`)
        .then((res) => res.json())
        .then((searchResults) => {
          setResults(searchResults);
        });
    } else setResults([]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <Link href='/'>
          <a>
            <h2 style={{ color: "white" }}>
              <b style={{ color: "black" }}>xkcd:</b> WebComic
            </h2>
          </a>
        </Link>
      </div>
      <nav className={styles.navBar}>
        <Link href="/">
          <a className={styles.link}>Latest Comics</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>Copyright</a>
        </Link>
      </nav>

      <div className={styles.searchBar}>
        <Input
          onKeyUp={handleSearch}
          contentLeftStyling={false}
          css={{
            w: "100%",
            "@xsMax": {
              maxW: "300px",
            },
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          type="search"
          aria-label="search"
          id="search"
          onChange={handleSearch}
          clearable
          contentLeft={
            <SearchIcon
              fill="var(--nextui-colors-accents6)"
              size={16}
            />
          }
          placeholder="Search..."
        />
        {Boolean(results.length) && (
          <div className={styles.searchList}>
            <ul>
              {results.map((result) => {
                return (
                  <li
                    key={result.id}
                    className={styles.listContainer}>
                    <Link href={`/comic/${result.id}`}>
                      <a className={styles.listItem}>{result.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
