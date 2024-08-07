"use client";
import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import "./order.css";

const Page = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    country: 0,
    address: "",
    city: "",
    region: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API + "country/");
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the products from local storage
    const products = JSON.parse(localStorage.getItem("cart") || "[]");

    const price = products.reduce(
      (acc: number, item: { price: number; amount: number }) =>
        acc + item.price * item.amount,
      0
    );

    // Combine form data and products
    const orderData = {
      first_name: formData.name,
      last_name: formData.surname,
      company: formData.company,
      country: formData.country,
      addres: formData.address,
      locality: formData.city,
      region: formData.region,
      pochta_index: formData.postalCode,
      phone: formData.phone,
      email: formData.email,
      product: products,
      price,
    };
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API + "basket/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Handle success
        console.log("Order submitted successfully");
        localStorage.removeItem("cart");

        setFormData({
          name: "",
          surname: "",
          company: "",
          country: 0,
          address: "",
          city: "",
          region: "",
          postalCode: "",
          phone: "",
          email: "",
        });
      } else {
        // Handle error
        console.error("Failed to submit order");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="order">
      <Banner text="оформление заказа" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="orderMain">
        <h2>Детали оплаты</h2>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="formGroup">
            <div>
              <label htmlFor="name">
                Имя<span>*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="surname">
                Фамилия<span>*</span>
              </label>
              <input
                id="surname"
                type="text"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formRow">
            <label htmlFor="company">Название компании (необязательно)</label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="country">
              Страна/регион<span>*</span>
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              {countries.length > 0 &&
                countries.map((country: { id: string; name: string }) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="formRow">
            <label htmlFor="address">
              Адрес <span>*</span>
            </label>
            <input
              id="address"
              type="text"
              placeholder="Номер дома и название улицы"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="city">
              Населенный пункт<span>*</span>
            </label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="region">
              Область / район<span>*</span>
            </label>
            <input
              id="region"
              type="text"
              value={formData.region}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="postalCode">
              Почтовый индекс<span>*</span>
            </label>
            <input
              id="postalCode"
              type="text"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="phone">
              Телефон<span>*</span>
            </label>
            <input
              id="phone"
              type="number"
              placeholder="+7 (999) 999-99-99"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="formRow">
            <label htmlFor="email">
              E-mail<span>*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button className="button" type="submit">
            Подтвердить заказ
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
