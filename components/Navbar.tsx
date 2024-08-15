"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // Function to handle search input changes
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const fetchSearchResults = async (query: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}product?name=${query}`
      );
      const results = await response.json();
      setSearchResults(results.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Effect to fetch search results when search query changes
  useEffect(() => {
    if (searchQuery.length > 0) {
      const debounceTimeout = setTimeout(() => {
        fetchSearchResults(searchQuery);
      }, 300); // Debounce time in ms

      return () => clearTimeout(debounceTimeout);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/about">
            О нас
          </Link>
          <Link className={styles.navLink} href="/contacts">
            Контакты
          </Link>
          <Link className={styles.navLink} href="/decor">
            Оформление в багет
          </Link>
          <div className={styles.navButton}>
            <p className={styles.navLink} onClick={() => setOpen(!open)}>
              Услуги{" "}
              <Image src="/vector.svg" alt="arrow" width={13} height={7} />
            </p>
            {open && (
              <div className={styles.navSubLinks}>
                <Link className={styles.navSubLink} href="/primerka">
                  Примерка
                </Link>
                <Link className={styles.navSubLink} href="/payment">
                  Оплата
                </Link>
                <Link className={styles.navSubLink} href="/delivery">
                  Доставка
                </Link>
                <Link className={styles.navSubLink} href="/upakovka">
                  Упаковка
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск по каталогу"
            value={searchQuery}
            onChange={handleSearchInput}
          />
          <button className={styles.searchButton}>
            <Image
              className={styles.searchIcon}
              src="/search-icon.svg"
              alt="search-icon"
              width={19}
              height={19}
            />
          </button>
        </div>
      </div>
      {searchQuery && (
        <div className={styles.searchResults}>
          {searchResults.length > 0 ? (
            searchResults.map((result: any) => (
              <Link
                href={`/product/${result.id}`}
                key={result.id}
                className={styles.searchResultItem}
              >
                <Image
                  width={100}
                  height={100}
                  src={result.images[0].image}
                  alt={result.name}
                  className={styles.searchResultImage}
                />
                <p>{result.name}</p>
              </Link>
            ))
          ) : (
            <div className={styles.searchResultItem}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
