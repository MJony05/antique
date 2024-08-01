import React from "react";
import styles from "./catalog.module.css";
import Link from "next/link";
import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API + "category");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Catalog() {
  const data = await getData();
  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalogTitle}>Каталог</h2>
      <div className={styles.catalogItems}>
        {data.map((category: any) => (
          <>
            <Link
              className={styles.catalogLink}
              href={`category/${category.id}`}
              key={category.id}
            >
              <h3 className={styles.catalogName}>{category.name}</h3>
            </Link>
            {category.sub_categor.length > 0
              ? category.sub_categor.map((subCategory: any) => (
                  <p className={styles.catalogItem} key={subCategory.id}>
                    <Link
                      className={styles.catalogLink}
                      href={`category/${category.id}/sub/${subCategory.id}`}
                    >
                      - {subCategory.name}
                    </Link>
                  </p>
                ))
              : ""}
          </>
        ))}
      </div>
    </div>
  );
}
