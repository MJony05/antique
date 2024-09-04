"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./cardContent.css";
import Similars from "./Similars";
import { toast } from "react-toastify";
import Modal from "@/components/Modal"; // Import the modal component

const CardContent = ({ productId }: any) => {
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similars, setSimilars] = useState([]);
  const [amount, setAmount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}product/${productId}`
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
    toast.success("Товар добавлен в корзину");
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const incrementAmount = () => setAmount(amount + 1);
  const decrementAmount = () => setAmount(amount > 1 ? amount - 1 : 1);

  const openModal = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  function getYouTubeVideoId(url: string) {
    let videoId = null;

    if (url !== null && url !== undefined && url.includes("youtu.be")) {
      videoId = url.split("/").pop().split("?")[0];
    } else if (url.includes("youtube.com")) {
      const urlObj = new URL(url);
      const path = urlObj.pathname;

      if (urlObj.searchParams.has("v")) {
        videoId = urlObj.searchParams.get("v");
      } else if (path.includes("/live/")) {
        videoId = path.split("/live/")[1].split("?")[0];
      } else if (path.includes("/shorts/")) {
        videoId = path.split("/shorts/")[1].split("?")[0];
      }
    }

    return videoId;
  }
  return (
    <main className="mainContent">
      <button className="backButton" onClick={() => window.history.back()}>
        <Image src="/arrow.svg" alt="arrow" width={20} height={20} /> Назад
      </button>
      {productData && (
        <>
          <div className="cardContent">
            <Image
              className="mainImage"
              src={productData.images[0].image || "/example-product2.png"}
              alt="card"
              width={610}
              height={712}
              onClick={() =>
                openModal(
                  productData.images[0].image || "/example-product2.png"
                )
              } // Add onClick to open modal
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
                {productData.video && (
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    width="560"
                    height="315"
                    // https://www.youtube.com/live/litF2nMp1Ns?si=KRDVGU076_5Nqv5D
                    src={`https://youtube.com/embed/${getYouTubeVideoId(
                      productData.video
                    )}?si=-G5TBQuFmu63onhd`}
                    // title="YouTube video player"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
                {productData.images.map((image: any, index: any) => (
                  <Image
                    key={index}
                    className="moreImages"
                    src={image.image}
                    alt="card"
                    width={190}
                    height={190}
                    onClick={() => openModal(image.image)} // Add onClick to open modal
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
      <Modal
        isOpen={isModalOpen}
        imageSrc={modalImageSrc}
        onClose={closeModal}
      />
    </main>
  );
};

export default CardContent;
