import { MainContainer } from "../../globalStyles/Global.styles";
import ProductList from "./ProductList";
import { ProductsHeading, ProductsCategorySection } from "./Products.style";
const ProductsContent = ({ filteredByCategory, title }) => {
  return (
    <ProductsCategorySection>
      <MainContainer>
        <ProductsHeading>{title}</ProductsHeading>
        <ProductList data={filteredByCategory} />
      </MainContainer>
    </ProductsCategorySection>
  );
};
export default ProductsContent;
