import { Navbar, Text, Input, } from "@nextui-org/react";
import Link from "next/link.js";
import { SearchIcon } from "./SearchIcon.js";
import styles from "../../../styles/Header.module.css"
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const collapseItems = [
    {name: "Latest Comics", url: "/"},
    {name: "About Us", url: "/about"},
  ];

  const handleSearch = e => setSearch(e.target.value)

  return (
    <div className={styles.container}>
     <Navbar  variant="sticky" isBordered css={{
          maxW: "1400px",
          m: "0 auto",
          "@xsMax": {
            maxW: "20px",
          }
        }}>
     <Navbar.Toggle showIn="xs" />

        <Navbar.Brand css={{
          fontSize: "30px",
          "@xsMax": {
            fontSize: "20px",
            p: "0.5rem",
          }
        }}>
          <Text b color="inherit">
            XKCD COMICS
          </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs" variant="underline">
          <Link href="/"><a className={styles.link}>Latest Comics</a></Link>
          <Link href="/about"><a className={styles.link}>Copyright</a></Link>
        </Navbar.Content>
        <Navbar.Content>
        <Navbar.Item
            id="search"
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
                p: "0.5rem",
              },
            }}
          >
            <Input
            aria-label="search"
            id="search"
              onChange={handleSearch}
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
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
              placeholder="Search..."
            />
          </Navbar.Item>
          </Navbar.Content>

        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              color="inherit"
              css={{
                maxW: "100%",
              }}
              href={item.url}
            >
              <a className={styles.link}>{item.name}</a>
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>

      </Navbar>
      </div>
  );
};

export default Header;
