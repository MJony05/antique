import Image from "next/image";
import React from "react";
import "./cardContent.css";
import Similars from "./Similars";
const CardContent = () => {
  return (
    <main className="mainContent">
      <div className="cardContent">
        <Image
          className="mainImage"
          src="/example-product2.png"
          alt="card"
          width={610}
          height={712}
        />
        <div className="cardInfo">
          <div className="cardTop">
            <p>
              <span>Контакты:</span>1805
            </p>
            <p>
              <span>Город:</span>Санкт-Петербург и Пениг (Саксония)
            </p>
            <p>
              <span>Издатель:</span>Фердианд Динеманн (F. Dienemann und Comp)
            </p>
            <p>
              <span>Оригинальное название:</span>Heinrich Christoph von Reimers.
              St. Petersburg am Ende seines ersten Jahrhunderts. Mit Ruckblicken
              auf Entstehung und Wachsthum dieser Residenz unter den
              verschiedenen Regierungen wahrend dieses Zeitraums
            </p>
            <p>
              <span>Язык:</span>Немецкий
            </p>
            <h3 className="price">980 000 руб.</h3>
            <div className="btn-group">
              <div className="amount-editor">
                <button className="btn">-</button>
                <span className="amount">1</span>
                <button className="btn">+</button>
              </div>
              <button className="btn to-cart">В корзину</button>
            </div>
          </div>

          <div className="more-images">
            <Image
              className="moreImages"
              src="/example-product2.png"
              alt="card"
              width={190}
              height={190}
            />
            <Image
              className="moreImages"
              src="/example-product2.png"
              alt="card"
              width={190}
              height={190}
            />
            <Image
              className="moreImages"
              src="/example-product2.png"
              alt="card"
              width={190}
              height={190}
            />
            <Image
              className="moreImages"
              src="/example-product2.png"
              alt="card"
              width={190}
              height={190}
            />
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptatum nam quasi nemo officia libero dignissimos asperiores,
          facere tempore aut aliquam architecto voluptatem eos. Veniam nam
          expedita odio eligendi architecto dolore cupiditate explicabo sed
          autem, dignissimos impedit tempora cumque neque.
        </p>
      </div>
      <Similars />
    </main>
  );
};

export default CardContent;
