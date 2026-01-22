import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Bill from "./components/Bill";
import { products } from "./data.js";

function App() {
  const [money, setMoney] = useState(100_000_000_000);
  const [productsState, setProductsState] = useState(products);

  const handleBuy = (id) => {
    const product = productsState.find((p) => p.id === id);
    if (!product || money < product.price) return;
    setProductsState((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)),
    );

    setMoney((prev) => prev - product.price);
  };

  const handleSell = (id) => {
    const product = productsState.find((p) => p.id === id);
    if (!product || product.count === 0) return;

    // Product count azalıyor
    setProductsState((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p)),
    );
    setMoney((prev) => prev + product.price);
  };
  return (
    <>
      <Header money={money} />
      <div className="card-container grid grid-cols-12 gap-6 ">
        {productsState.map((product) => (
          <Card
            key={product.id}
            data={product}
            buy={() => handleBuy(product.id)}
            sell={() => handleSell(product.id)}
          />
        ))}
      </div>
      <Bill products={productsState} />
    </>
  );
}

export default App;
