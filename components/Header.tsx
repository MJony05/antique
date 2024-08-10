"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "./details/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

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

  useEffect(() => {
    if (searchQuery.length > 0) {
      const debounceTimeout = setTimeout(() => {
        fetchSearchResults(searchQuery);
      }, 300);

      return () => clearTimeout(debounceTimeout);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
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
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              className={styles.navLeftItemImagee}
              src="/location-icon.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            Россия, Санкт-петербург, Ленинский просп., 151
          </p>
        </div>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              src="/phone-icon.svg"
              className={styles.navLeftItemImagee}
              alt="phone"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            <span>Звоните с 9:00 до 18:00</span>
            +7 (999) 999-99-99
          </p>
        </div>
      </div>
      <div className={styles.navRight}>
        <Link href={"#contact"} className={styles.navRightItem}>
          <Button text="Заказать звонок" />
        </Link>
        <div>
          <Image
            onClick={() => {
              router.push("/cart");
            }}
            className={styles.cart}
            src="/cart-icon.svg"
            alt="cart"
            width={44}
            height={44}
          />
          {/* <span>{productsNumber}</span> */}
        </div>
        <div onClick={() => setOpen(!open)} className={styles.burger}>
          <Image src="/burger.svg" alt="burger" width={48} height={48} />
        </div>
        <div
          className={`${styles.open} ${open ? styles.visible : styles.close}`}
        >
          <div className={styles.nav}>
            <Link
              className={styles.navLink}
              href="/about"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              О нас
            </Link>
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className={styles.navLink}
              href="/contact"
            >
              Контакты
            </Link>
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className={styles.navLink}
              href="/baguette"
            >
              Оформление в багет
            </Link>
            <div className={styles.navButton}>
              <p onClick={() => setOpen2(!open2)}>
                Услуги{" "}
                <Image src="/vector.svg" alt="arrow" width={13} height={7} />
              </p>
              {open2 && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                  className={styles.navSubLinks}
                >
                  <Link className={styles.navSubLink} href="/about">
                    Примерка
                  </Link>
                  <Link className={styles.navSubLink} href="#">
                    Оплата
                  </Link>
                  <Link className={styles.navSubLink} href="#">
                    Доставка
                  </Link>
                  <Link className={styles.navSubLink} href="#">
                    Упаковка
                  </Link>
                </div>
              )}
            </div>
          </div>
          <Image
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            src={"/close.svg"}
            alt="close"
            width={30}
            height={30}
            className={styles.closeIcon}
          />
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
    </nav>
  );
};

export default Header;
