import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-xl transition-all hover:underline cursor-pointer" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-xl transition-all hover:underline cursor-pointer" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70d1f8" }}>
          <ProductImage style={{ borderRadius: "1ppx", padding: "10px" }} />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
