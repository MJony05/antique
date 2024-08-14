"use client";
import React, { useEffect, useState } from "react";
import styles from "./category.module.css";
import Card from "@/components/details/Card";

const CategoryContent = ({ categoryId, categoriesName }: any) => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const fetchCategoryData = async (url: string) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch category data");
      }
      const data = await res.json();
      setCategoryData(data.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = `http://31.128.44.221:8000/category/product/${categoryId}`;
    fetchCategoryData(url);
  }, [categoryId]);

  useEffect(() => {
    if (selectedSubcategory === null) {
      const url = `http://31.128.44.221:8000/category/product/${categoryId}`;
      fetchCategoryData(url);
    } else {
      const url = `http://31.128.44.221:8000/sub_categroy/product/${selectedSubcategory}`;
      fetchCategoryData(url);
    }
  }, [selectedSubcategory, categoryId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className={styles.categoryContent}>
        <div className={styles.ancientsFilter}>
          <p
            className={`${styles.ancientsFilterItem} ${
              selectedSubcategory === null ? styles.active : ""
            }`}
            onClick={() => setSelectedSubcategory(null)}
          >
            Все
          </p>
          {categoriesName[+categoryId - 1].sub_categor.length > 0 &&
            categoriesName[+categoryId - 1].sub_categor.map((item: any) => (
              <p
                key={item.id}
                className={`${styles.ancientsFilterItem} ${
                  selectedSubcategory === item.id ? styles.active : ""
                }`}
                onClick={() => setSelectedSubcategory(item.id)}
              >
                {item.name}
              </p>
            ))}
        </div>
        <div className={styles.cards}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            categoryData.map((item: any) => <Card key={item.id} data={item} />)
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryContent;
