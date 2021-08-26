import React from "react";
import ScrollAnimatedBlock from "../ScrollAnimatedBlock/ScrollAnimatedBlock";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./ProductList.module.css";

const productItems = [
  {
    title: "Абсолютно оригинальная композиция",
    description:
      "AirPods Max — это совершенно новый взгляд на полноразмерные наушники. Все элементы AirPods Max, от амбушюров до оголовья, спроектированы таким образом, чтобы наушники оптимально прилегали к голове любой формы. Благодаря этому достигается невероятное качество и богатство звука",
    isReversed: false,
    image: "/images/akhil-yerabati-Q2uV5TkjNz8-unsplash.jpg",
  },

  {
    title: "Абсолютно оригинальная композиция1",
    description:
      "AirPods Max — это совершенно новый взгляд на полноразмерные наушники. Все элементы AirPods Max, от амбушюров до оголовья, спроектированы таким образом, чтобы наушники оптимально прилегали к голове любой формы. Благодаря этому достигается невероятное качество и богатство звука",
    isReversed: true,
    image: "/images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg",
  },
];

const ProductList = () => {
  return (
    <div className={styles.container}>
      {productItems.map((product) => {
        return (
          <ScrollAnimatedBlock animationClass={"_active"}>
            <ProductItem
              title={product.title}
              description={product.description}
              isReversed={product.isReversed}
              image={product.image}
            />
          </ScrollAnimatedBlock>
        );
      })}
    </div>
  );
};

export default ProductList;
