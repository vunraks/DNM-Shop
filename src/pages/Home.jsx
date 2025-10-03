export default function Home() {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6">Добро пожаловать в DNM Shop</h1>
        <p className="text-lg mb-8">Лучшие товары у вас под рукой</p>
        <a
          href="/products"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Перейти к товарам
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {["Электроника", "Продукты", "Мебель"].map((cat) => (
          <div
            key={cat}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{cat}</h3>
            <p className="text-gray-600">
              Откройте лучшие предложения в категории «{cat}».
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
