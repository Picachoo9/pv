// Product Data (Pexels Images - Always Load)
const products = [
  {
    id: 1,
    name: "Soap",
    price: 40,
    img: "https://images.pexels.com/photos/6621431/pexels-photo-6621431.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "High-quality hotel soap with refreshing fragrance.",
  },
  {
    id: 2,
    name: "Shampoo",
    price: 120,
    img: "https://images.pexels.com/photos/3735634/pexels-photo-3735634.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Luxury shampoo suitable for all hair types.",
  },
  {
    id: 3,
    name: "Room Freshener",
    price: 180,
    img: "https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Long-lasting fresh scent for hotel rooms.",
  },
  {
    id: 4,
    name: "Lemongrass Oil",
    price: 200,
    img: "https://images.pexels.com/photos/16194827/pexels-photo-16194827.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Pure lemongrass essential oil for relaxation.",
  },
  {
    id: 5,
    name: "Microfiber Cloth",
    price: 60,
    img: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Soft and durable microfiber cleaning cloth.",
  },
  {
    id: 6,
    name: "Floor Cleaner",
    price: 150,
    img: "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Powerful cleaner for spotless shiny floors.",
  },
];

// Render Products
const productList = document.getElementById("product-list");

function renderProducts() {
  productList.innerHTML = products
    .map(
      (p) => `
      <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
        <img src="${p.img}" 
             class="rounded-xl mb-4 w-full h-56 object-cover transform transition duration-500 hover:scale-105" />
        <h3 class="text-2xl font-semibold mb-2">${p.name}</h3>
        <p class="text-gray-700 mb-3">${p.desc}</p>
        <p class="text-xl font-bold mb-4">₹${p.price}</p>
        <button onclick="addToCart(${p.id})" 
                class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>`
    )
    .join("");
}

renderProducts();

// Cart Logic
let cart = [];

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  alert(`${product.name} added to cart!`);
  updateCartCount();
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  badge.classList.remove("hidden");
  badge.textContent = cart.length;
}
