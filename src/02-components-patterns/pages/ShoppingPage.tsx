import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";

const product = {
  id: "1",
  title: "Coffe mug - Card",
  img: "/assets/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Azul" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
