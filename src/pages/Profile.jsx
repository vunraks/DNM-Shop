import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const { user } = useSelector((s) => s.auth);
  const orders = useSelector((s) => s.orders);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    email: user?.email || "",
    username: user?.username || "",
  });

  if (!user) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Профиль 👤</h2>
        <p className="text-gray-500">Пожалуйста, сначала войдите.</p>
      </div>
    );
  }

  const saveProfile = () => {
    localStorage.setItem("user_profile", JSON.stringify(form));
    setEditMode(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={`https://www.pngkey.com/png/full/145-1453914_meisontop-roflanebalo-.png${form.firstName || form.username}`}
          alt="avatar"
          className="w-20 h-20 rounded-full border shadow"
        />
        <div>
          <h2 className="text-2xl font-bold">{form.firstName || "Гость"}</h2>
          <p className="text-gray-500">{form.email || "guest@example.com"}</p>
        </div>
      </div>
      {editMode ? (
        <div className="space-y-4">
          <input
            className="w-full border rounded-lg p-2"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="Имя"
          />
          <input
            className="w-full border rounded-lg p-2"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            placeholder="Логин"
          />
          <input
            className="w-full border rounded-lg p-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <button
            onClick={saveProfile}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
          >
            Сохранить
          </button>
        </div>
      ) : (
        <ul className="space-y-3 mb-6 text-gray-700">
          <li><strong>Имя:</strong> {form.firstName}</li>
          <li><strong>Логин:</strong> {form.username}</li>
          <li><strong>Email:</strong> {form.email}</li>
          <li>
            <strong>Токен:</strong>
            <code className="bg-gray-100 px-2 py-0.5 rounded ml-1">{user.token}</code>
          </li>
        </ul>
      )}
      <div className="flex justify-between">
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
          >
            Редактировать
          </button>
        ) : (
          <button
            onClick={() => setEditMode(false)}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-300"
          >
            Отмена
          </button>
        )}
        <button
          onClick={() => {
            dispatch(logout());
            nav("/");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
        >
          Выйти
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Мои заказы</h3>
        {orders.length === 0 ? (
          <p className="text-gray-500">У вас пока нет заказов.</p>
        ) : (
          <ul className="space-y-3">
            {orders.map((order) => (
              <li
                key={order.id}
                className="p-4 bg-gray-50 rounded-lg shadow"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Заказ #{order.id}</span>
                  <span className="text-sm text-gray-500">{order.date}</span>
                </div>
                <ul className="pl-4 text-sm text-gray-700 list-disc">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.title} × {item.quantity} ={" "}
                      <span className="font-medium">{item.price * item.quantity}$</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
