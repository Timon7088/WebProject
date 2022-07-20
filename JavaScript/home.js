let homeItems = [];

const productTemplate = `
                <div class="prod">
                    <img class="image" src="[image]">
                    <p class="product_title"> [title]</p>
                    <span class="price"> ₪[price] </span>
                    <span class="original_price">[original_Price] </span>
                    <div class="btn_container">
                      <button data-key="[key]" class="add_to_cart"> add to cart </button>
                    </div>
                </div>
`;

function Generate4UProduct(item) {
  return productTemplate
    .replace("[image]", item.image)
    .replace("[title]", item.title)
    .replace("[price]", item.price)
    .replace("[key]", item.key)
    .replace("[original_Price]", item.original_price !== "" ? `₪${item.original_price}` : "");
}

function loadCartFromStorage() {
  const items = localStorage.getItem("cartProducts");
  if (items) {
    homeItems = JSON.parse(items);
  }
  UI_update4UProducts();
}

function addToCart(item) {
  homeItems.push({ ...item, inCart: true, key: `item_${homeItems.length}` });
  localStorage.setItem("cartProducts", JSON.stringify(homeItems));
  UI_updateCart();
}

function UI_updateCartItems() {
  const cartHTML = homeItems.filter((item) => item.inCart).map((item) => GenerateCartItem(item));
  const cartList = document.querySelector(".cart_list");
  cartList.innerHTML = cartHTML;

}

function UI_updateCartTotal() {
  const totalPrice = document.querySelector("#cart_total_value");
  totalPrice.innerHTML = cartItems.filter((item) => item.inCart).reduce((sum, item) => (sum += item.price), 0);
}



function UI_update4UProducts() {
  const search_prods = document.querySelector("#search_prods");
  const search_prods_title = document.querySelector("#search_prods_title");
  const items = homeItems.filter((item) => item.inCart == false);
  let unqiueItems = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const existItem = unqiueItems.find((itm) => itm.id === item.id);
    if (!existItem) unqiueItems.push(item);
  }
  if (unqiueItems.length === 0) search_prods_title.style.display = "none";
  const productsHTML = unqiueItems.map((product) => Generate4UProduct(product));
  search_prods.innerHTML = productsHTML.join("");
}

loadCartFromStorage();

function UI_updateCart() {
  UI_updateCartTotal();
  UI_updateCartItems();
}