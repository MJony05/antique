"use client";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Button from "@/components/details/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(existingCart);
  }, []);

  const handleDelete = (id: string) => {
    const updatedCart = cart.filter((item: any) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Trigger custom event for cart update
    const event = new Event("cartUpdate");
    window.dispatchEvent(event);
  };

  const handleAmountChange = (id: string, newAmount: number) => {
    const updatedCart: any = cart.map((item: any) =>
      item.id === id ? { ...item, amount: newAmount } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Trigger custom event for cart update
    const event = new Event("cartUpdate");
    window.dispatchEvent(event);
  };

  return (
    <div className="cart">
      <Banner text="Корзина" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="cart_main">
        <div className="cart_products">
          {cart.length > 0 ? (
            cart.map((item: any) => (
              <div key={item.id} className="cart_product">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="product_left"
                >
                  <Image
                    src={item.images[0].image}
                    alt="decor"
                    width={251}
                    height={196}
                    className="product_image"
                  />
                  <div className="product_infos">
                    <h3 className="product_name">Наименование:</h3>
                    <p className="product_title">{item.name}</p>
                  </div>
                </div>
                <div className="product_right">
                  <div className="amount-editor">
                    <button
                      className="btn"
                      onClick={() =>
                        handleAmountChange(
                          item.id,
                          Math.max(1, item.amount - 1)
                        )
                      }
                    >
                      -
                    </button>
                    <span className="amount">{item.amount}</span>
                    <button
                      className="btn"
                      onClick={() =>
                        handleAmountChange(item.id, item.amount + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <h3 className="product_price">
                    {item.amount} x {item.price} ₽ = {item.amount * item.price}{" "}
                    ₽
                  </h3>
                  <span onClick={() => handleDelete(item.id)}>
                    <Button text="Удалить с корзины" />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h3>Корзина пуста</h3>
          )}
        </div>
        <div className="sum">
          <div>
            <p>СУММА ЗАКАЗА:</p>
            <h3>
              {cart.reduce(
                (acc, item: { price: number; amount: number }) =>
                  acc + item.price * item.amount,
                0
              )}{" "}
              ₽
            </h3>
          </div>
          <Link className="orderButton" href="/order">
            <Button text="Оформить заказ" />
          </Link>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
