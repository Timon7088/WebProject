"use strict";

let cartItems = [];

const checkoutTemplate = `
<tr>
  <td><image class="checkoutImg" src="[image]"></image></td>
  <td class="name">[productName]</td>
  <td>1</td>
  <td>₪[price]</td>
  <td><button type="button" data-key="[key]" class="cart_item_remove"><i class="fa-solid fa-trash"></i>
  </button></td>
</tr>
`;

function GenerateCheckoutItem(item) {
  return checkoutTemplate.replace("[productName]", item.title).replace("[price]", item.price).replace("[image]", item.image).replace("[key]", item.key);
}

function loadCartFromStorage() {
  const items = localStorage.getItem("cartProducts");
  if (items) {
    cartItems = JSON.parse(items);
  }
  UI_updateCheckout();
}

function UI_updateCartItems() {
  const cartHTML = cartItems.filter((item) => item.inCart).map((item) => GenerateCartItem(item));
  const cartList = document.querySelector(".cart_item");
  cartList.innerHTML = cartHTML;

  const removeButtons = document.querySelectorAll(".cart_item_remove");
  for (const button of removeButtons) {
    button.addEventListener("click", function (event) {
      removeFromCart(this.dataset.key);
    });
  }
}

function UI_updateCheckout() {
  const tbody = document.querySelector("#products tbody");
  const tbodyHTML = cartItems.filter((item) => item.inCart).map((item) => GenerateCheckoutItem(item));
  tbody.innerHTML = tbodyHTML.join("");
}

function removeFromCart(key) {
  cartItems = cartItems.map((item) => {
    if (key === item.key) {
      return { ...item, inCart: false };
    } else return item;
  });
  localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  UI_updateCheckout();
}

loadCartFromStorage();
