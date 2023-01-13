import React, { useState } from "react";
import PageUi from "../../components/PageBeginngUi/PageUi";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  ShopSection,
  FilteringWrapper,
  FilterBox,
  SearchFilter,
  SelectBox,
  Option,
  SearchInput,
  SearchIcon,
  FilterHeading,
  FilterDataSection,
} from "./Shop.style";
import { MainContainer } from "../../globalStyles/Global.styles";
import ProductList from "../../components/ProductsContent/ProductList";
import products from "../../assets/data/products";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilterByCategory = (e) => {
    const filterValue = e.target.value;
    const filteredProducts = products.filter(
      (product) => product.category === filterValue
    );
    setProductsData(filteredProducts);
    if (filterValue === "asc") {
      const filteredProducts = products.sort((el1, el2) =>
        el1.productName.localeCompare(el2.productName)
      );
      setProductsData([...filteredProducts]);
    }
    if (filterValue === "desc") {
      const filteredProducts = products.sort((el1, el2) =>
        el2.productName.localeCompare(el1.productName)
      );
      setProductsData([...filteredProducts]);
    }
    if (filterValue === "lowest price") {
      const filteredProducts = products.sort((el1, el2) =>
        el1.price
          .toString()
          .localeCompare(el2.price, undefined, { numeric: true })
      );
      setProductsData([...filteredProducts]);
    }
    if (filterValue === "highest price") {
      const filteredProducts = products.sort((el1, el2) =>
        el2.price
          .toString()
          .localeCompare(el1.price, undefined, { numeric: true })
      );
      setProductsData([...filteredProducts]);
    }
  };
  const handleFilterBySearch = (e) => {
    const searchValue = e.target.value;
    const filteredProducts = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsData(filteredProducts);
  };
  return (
    <PageTitle title="Shop">
      <PageUi title="Products" />
      <ShopSection>
        <MainContainer>
          <FilteringWrapper>
            <FilterBox>
              <SelectBox onChange={handleFilterByCategory}>
                <Option>Filter Products By(All)</Option>
                <Option disabled>Filter By Category</Option>
                <Option value="mobile">Mobile</Option>
                <Option value="watch">Watch</Option>
                <Option value="wireless">Wireless</Option>
                <Option value="chair">Chair</Option>
                <Option value="sofa">Sofa</Option>
                <Option disabled>Sort By</Option>
                <Option value="asc">Ascending</Option>
                <Option value="desc">Descending</Option>
                <Option value="lowest price">Price(Lowest First)</Option>
                <Option value="highest price">Price(Highest First)</Option>
              </SelectBox>
            </FilterBox>
            <SearchFilter>
              <SearchInput onChange={handleFilterBySearch} />
              <SearchIcon />
            </SearchFilter>
          </FilteringWrapper>
        </MainContainer>
        <FilterDataSection>
          <MainContainer>
            {productsData.length === 0 ? (
              <FilterHeading>No products are found!</FilterHeading>
            ) : (
              <ProductList data={productsData} />
            )}
          </MainContainer>
        </FilterDataSection>
      </ShopSection>
    </PageTitle>
  );
};

export default Shop;
