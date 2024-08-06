// app/category/[id]/CategoryContent.js
"use client";
import React, { useEffect, useState } from "react";
import styles from "./category.module.css";
import Card from "@/components/details/Card";

const CategoryContent = ({ categoryId, categoriesName }: any) => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://31.128.44.221:8000/category/product/${categoryId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch category data");
        }
        const data = await res.json();
        setCategoryData(data.results);
        console.log(data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className={styles.categoryContent}>
        <div className={styles.ancientsFilter}>
          {categoriesName[+categoryId - 1].sub_categor.length > 0 &&
            categoriesName[+categoryId - 1].sub_categor.map((item: any) => (
              <p key={item.id} className={styles.ancientsFilterItem}>
                {item.name}
              </p>
            ))}
        </div>
        <div className={styles.cards}>
          {categoryData.map((item: any) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContent;
