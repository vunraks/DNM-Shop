import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

export default function App() {
  const cart = useSelector((s) => s.cart);
  const user = useSelector((s) => s.auth.user);
  const totalCount = cart.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:opacity-90 transition"
          >
            DNM Shop
          </Link>

          <div className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-yellow-300 transition font-medium"
            >
              Главная
            </Link>
            <Link
              to="/products"
              className="hover:text-yellow-300 transition font-medium"
            >
              Товары
            </Link>
            {user ? (
              <Link
                to="/profile"
                className="hover:text-yellow-300 transition font-medium"
              >
                Профиль
              </Link>
            ) : (
              <Link
                to="/auth"
                className="hover:text-yellow-300 transition font-medium"
              >
                Войти
              </Link>
            )}
            <Link
              to="/cart"
              className="relative hover:text-yellow-300 transition font-medium"
            >
              Корзина
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mt-24 mb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
