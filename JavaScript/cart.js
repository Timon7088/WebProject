"use strict";

let cartItems = [];

const cartTemplate = `
<div class="cart_item">
    <img src="[image]">
    <div class="cart_item_desc">
        <h3 class="cart_item_title"> [title] </h3>
        <span class="cart_item_category"> Gaming Platform </span>
        <span class="cart_item_price"> [price] </span>
    </div>
    <button type="button" data-key="[key]" class="cart_item_remove"><i class="fa-solid fa-trash"></i>
    </button>
</div>
`;

const checkoutTemplate = `
<div class="product_list">
  <div class="item"><img class="image" src="imgs/nintendo switch bunduru.jpg">
      <span class="item_desc">Nintendo Switch bunduru: 32GB Console Red and Blue joy-con wheel</span>
  </div>
  <span class="qty"> 3 </span>
  <span class="payment_price"> ₪1950</span>
  <div class="remove_item">
      <button class="cart_item_remove">
          <i class="fa-solid fa-trash"> Remove</i>
      </button>
  </div>
</div>
<br>
`;

function GenerateCartItem(item) {
  return cartTemplate.replace("[image]", item.image).replace("[title]", item.title).replace("[price]", item.price).replace("[key]", item.key);
}

function toNumber(value) {
  return parseInt(value.slice(1));
}

function loadCartFromStorage() {
  const items = localStorage.getItem("cartProducts");
  if (items) {
    cartItems = JSON.parse(items);
  }
  UI_updateCart();
}

function UI_updateQuantity() {
  const quantity = document.querySelector("#cart_counter");
  quantity.innerHTML = cartItems.filter((item) => item.inCart).length;
}

function UI_updateCartTotal() {
  const totalPrice = document.querySelector("#cart_total_value");
  totalPrice.innerHTML = cartItems.filter((item) => item.inCart).reduce((sum, item) => (sum += toNumber(item.price)), 0);
}

function UI_updateCartItems() {
  const cartHTML = cartItems.filter((item) => item.inCart).map((item) => GenerateCartItem(item));
  const cartList = document.querySelector(".cart_list");
  cartList.innerHTML = cartHTML;

  const removeButtons = document.querySelectorAll(".cart_item_remove");
  for (const button of removeButtons) {
    button.addEventListener("click", function (event) {
      removeFromCart(this.dataset.key);
    });
  }
}

function addToCart(item) {
  cartItems.push({ ...item, inCart: true, key: `item_${cartItems.length}` });
  localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  UI_updateCart();
}

function removeFromCart(key) {
  cartItems = cartItems.map((item) => {
    if (key === item.key) {
      return { ...item, inCart: false };
    } else return item;
  });
  localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  UI_updateCart();
}

function UI_updateCart() {
  UI_updateQuantity();
  UI_updateCartTotal();
  UI_updateCartItems();
}

const cartContainer = document.querySelector(".cart_container");
let carts = document.querySelectorAll(".add_to_cart");

function addEventListeners() {
  document.getElementById("cart_toggle").addEventListener("click", () => {
    cartContainer.classList.toggle("show_cart_container");
  });
}

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    addToCart(products[i]);
  });
}

loadCartFromStorage();

addEventListeners();
