const accessories = document.querySelector(".accessories");

const productsCatalog = window.products.map((products) => {
  return `
            <div class="prod">
                <img class="image" src="${products.image}">
                <br><br>
                <p class = "product_title">${products.title}</p>
                <div class="prices">
                    <span class="price">₪${products.price}</span>
                    <span class="original_price">${products.original_price}</span>
                </div>
                <div class="btn_container">
                    <button class="add_to_cart"> add to cart </button>
                    <a href="${products.key}"><button type="button" class=buy_now> More info </button></a>
                </div>
            </div>
    `;
});

accessories.innerHTML = productsCatalog.join("");
