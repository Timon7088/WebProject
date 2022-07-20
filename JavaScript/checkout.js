'use strict'

let cartItems = [];

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

function loadCartFromStorage() {
    const items = localStorage.getItem("cartProducts");
    if (items) {
        cartItems = JSON.parse(items);
    }
    UI_updateCheckout();
}

function UI_updateCheckout() {
    
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
