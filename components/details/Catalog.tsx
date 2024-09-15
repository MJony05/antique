"use client";
import React, { useEffect, useState } from "react";
import styles from "./catalog.module.css";
import Link from "next/link";

export default function Catalog({ title }: { title?: boolean }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API + "category");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.catalog}>
      {!title ? <h2 className={styles.catalogTitle}>Каталог</h2> : ""}
      <div className={styles.catalogItems}>
        {data.map((category: any) => (
          <div key={category.id}>
            <Link
              className={styles.catalogLink}
              href={`category/${category.id}`}
            >
              <h3 className={styles.catalogName}>{category.name}</h3>
            </Link>
            {category.sub_categor.length > 0
              ? category.sub_categor.map((subCategory: any) => (
                  <p className={styles.catalogItem} key={subCategory.id}>
                    <Link
                      className={styles.catalogLink}
                      href={`category/${category.id}`}
                    >
                      - {subCategory.name}
                    </Link>
                  </p>
                ))
              : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
