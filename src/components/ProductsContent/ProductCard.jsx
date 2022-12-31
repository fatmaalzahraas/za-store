import React from "react";
import {
  ProductImg,
  ProductImgWrapper,
  ProductInfo,
  ProductItem,
  ProductName,
  AddToCartIcon,
  ProductPrice,
  IconContainer,
  ProductCategory,
  ProductLink,
} from "./Products.style";
import { motion } from "framer-motion";
const ProductCard = ({ item }) => {
  return (
    <ProductItem>
      <ProductImgWrapper>
        <ProductImg
          as={motion.img}
          whileHover={{ scale: 0.9 }}
          src={item.imgUrl}
          alt=""
        />
      </ProductImgWrapper>
      <ProductName>
        <ProductLink to={`shop/${item.id}`}>{item.productName}</ProductLink>
      </ProductName>
      <ProductCategory>{item.category}</ProductCategory>
      <ProductInfo>
        <ProductPrice>${item.price}</ProductPrice>
        <IconContainer as={motion.span} whileTap={{ scale: 1.9 }}>
          <AddToCartIcon />
        </IconContainer>
      </ProductInfo>
    </ProductItem>
  );
};

export default ProductCard;
