import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = React.memo(function ProductCard({ p, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col items-center text-center">
      <img
        className="h-40 w-full object-cover rounded-md mb-3"
        src={p.thumbnail || p.images?.[0]}
        alt={p.title}
      />
      <h4 className="font-semibold text-lg mb-1">{p.title}</h4>
      <p className="text-gray-600 mb-3">{p.price} $</p>
      <button
        className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        onClick={() => onAdd({ id: p.id, title: p.title, price: p.price })}
      >
        Добавить в корзину
      </button>
    </div>
  );
});

export default function Products() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((s) => s.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  if (status === "loading")
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );

  if (status === "failed")
    return <p className="text-center text-red-500">Failed to load products.</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            onAdd={(it) => dispatch(addToCart(it))}
          />
        ))}
      </div>
    </div>
  );
}
