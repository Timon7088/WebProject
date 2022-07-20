"use strict";

let cartItems = [];

const checkoutTemplate = `
<tr>
  <td>[productName]</td>
  <td>1</td>
  <td>[price]</td>
</tr>
`;

function GenerateCheckoutItem(item) {
  return checkoutTemplate.replace("[productName]", item.title).replace("[price]", item.price);
}

function loadCartFromStorage() {
  const items = localStorage.getItem("cartProducts");
  if (items) {
    cartItems = JSON.parse(items);
  }
  UI_updateCheckout();
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
