export default function Bill({ products }) {
  const boughtProducts = products.filter((p) => p.count > 0);

  const total = boughtProducts.reduce((sum, p) => sum + p.price * p.count, 0);

  return (
    <div className="billContainer">
      <div className="mx-[50vh] w-[70vh] h-[40ch] my-10 p-6 border rounded-lg bg-gray-50  ">
        <h1 className="text-2xl font-bold mb-4 text-center">Bills</h1>

        {boughtProducts.length === 0 && (
          <p className="text-gray-500 flex text-center"></p>
        )}

        {boughtProducts.map((product) => (
          <div key={product.id} className="flex justify-between border-b py-2">
            <span>{product.name}</span>
            <span>
              {product.count} × ${product.price.toLocaleString()}
            </span>
            <span className="font-semibold">
              ${(product.price * product.count).toLocaleString()}
            </span>
          </div>
        ))}

        {boughtProducts.length > 0 && (
          <div className="flex justify-between mt-4 text-xl font-bold">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        )}
      </div>
    </div>
  );
}
