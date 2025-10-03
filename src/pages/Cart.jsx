import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { addOrder } from "../features/orders/orders";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart);
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Ваша корзина 🛒</h2>
        <p className="text-gray-500">Корзина пуста...</p>
      </div>
    );
  }

  const handleCheckout = () => {
    dispatch(addOrder(cart));
    dispatch(clearCart());
    alert("Ваш заказ оформлен ✅");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Ваша корзина 🛒</h2>

      <ul className="divide-y">
        {cart.map((p) => (
          <li key={p.id} className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-gray-500">
                {p.price} $ × {p.quantity}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(increase(p.id))}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
              >
                +
              </button>
              <button
                onClick={() => dispatch(decrease(p.id))}
                className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition"
              >
                -
              </button>
              <button
                onClick={() => dispatch(removeFromCart(p.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-400 transition"
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-bold">Итого: {total} $</span>
        <div className="space-x-3">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition"
          >
            Очистить
          </button>
          <button
            onClick={handleCheckout}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
