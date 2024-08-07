"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./cardContent.css";
import Similars from "./Similars";

const CardContent = ({ productId }: any) => {
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similars, setSimilars] = useState([]);
  const [amount, setAmount] = useState(1);

  console.log(productData);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://31.128.44.221:8000/product/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProductData(data.serializer);
        setSimilars(data.product);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex(
      (item: any) => item.id === productData.id
    );

    if (productIndex > -1) {
      cart[productIndex].amount += amount;
    } else {
      cart.push({ ...productData, amount });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const incrementAmount = () => setAmount(amount + 1);
  const decrementAmount = () => setAmount(amount > 1 ? amount - 1 : 1);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="mainContent">
      {productData && (
        <>
          <div className="cardContent">
            <Image
              className="mainImage"
              src={productData.images[0].image || "/example-product2.png"}
              alt="card"
              width={610}
              height={712}
            />
            <div className="cardInfo">
              <div className="cardTop">
                <p>
                  <span>Контакты:</span>
                  {productData.contact}
                </p>
                <p>
                  <span>Город:</span>
                  {productData.city}
                </p>
                <p>
                  <span>Издатель:</span>
                  {productData.publisher}
                </p>
                <p>
                  <span>Оригинальное название:</span>
                  {productData.orginal_title}
                </p>
                <p>
                  <span>Язык:</span>
                  {productData.language}
                </p>
                <h3 className="price">{productData.price} руб.</h3>
                <div className="btn-group">
                  <div className="amount-editor">
                    <button className="btn" onClick={decrementAmount}>
                      -
                    </button>
                    <span className="amount">{amount}</span>
                    <button className="btn" onClick={incrementAmount}>
                      +
                    </button>
                  </div>
                  <button className="btn to-cart" onClick={handleAddToCart}>
                    В корзину
                  </button>
                </div>
              </div>

              <div className="more-images">
                {productData.images.map((image: any, index: any) => (
                  <Image
                    key={index}
                    className="moreImages"
                    src={image.image}
                    alt="card"
                    width={190}
                    height={190}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: productData.description }} />
          </div>
        </>
      )}
      {similars.length > 0 && <Similars cards={similars} />}
    </main>
  );
};

export default CardContent;
