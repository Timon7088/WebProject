'use strict'

const cartContainer = document.querySelector('.cart_container');
let carts = document.querySelectorAll(".add_to_cart")

function addEventListeners(){    
    document.getElementById('cart_toggle').addEventListener('click', () => {
        cartContainer.classList.toggle('show_cart_container');
    });
}

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartQty(products[i]);
        totalCost(products[i]);
    })
}

function cartQtyPreserve() {
    let productQty = localStorage.getItem('cartQty');

    if (productQty) {
        document.querySelector(".mini_cart span").innerText = productQty;
    }
}

function cartQty(products) {
    let productQty = localStorage.getItem('cartQty');
    productQty = parseInt(productQty)

    if (productQty) {
        localStorage.setItem('cartQty', productQty + 1)
        document.querySelector(".mini_cart span").innerText = productQty + 1;
    } else {
        localStorage.setItem('cartQty', 1)
        document.querySelector(".mini_cart span").innerText = 1;
    }
    
    setItems(products)
}

function setItems(products) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    if (cartItems != null) {
        if (cartItems[products.title] == undefined) {
            cartItems = {
                ...cartItems,
                [products.title]: products
            }
        }
        cartItems[products.title].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.title]: products
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
    let priceElement = parseInt(products.price.replace('₪', ''));
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + priceElement);
    } else {
        localStorage.setItem("totalCost", priceElement);
    }
}

function buildCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productLister = document.querySelector(".list_container");

    if (cartItems && productLister) {
        productLister.innerHTML = '';
        Object.values(cartItems).map(products => {
            productLister.innerHTML += `
            <div class="product_list">
                <div class="item"><img class="image" src="${products.image}">
                    <span class="item_desc">${products.title}</span>
                </div>
                <span class="qty"> ${products.inCart} </span>
                <span class="payment_price"> ${products.price}</span>
                <div class="remove_item">
                    <button class="remove">
                        <i class="fa-solid fa-trash"> Remove</i>
                    </button>
                </div>
            </div>
            <br>
            `
        })
    }
}

// function buildMiniCart() {
//     let cartItems = document.createElement('div');
//     cartItems.classList.add(".cart_item");
//     car
//     cartItems.innerHTML = `
//     <div class="cart_item">
//         <img src="${products.image}">
//         <div class="cart_item_desc">
//             <h3 class="cart_item_title"> ${products.title} </h3>
//             <span class="cart_item_category"> Gaming Platform </span>
//             <span class="cart_item_price"> ${products.price} </span>
//         </div>
//         <button type="button" class="cart_item_remove"><i class="fa-solid fa-trash"></i>
//         </button>
//     </div>
//     `
// }


cartQtyPreserve();
buildCart();
// buildMiniCart();
addEventListeners();

let removeItem = document.querySelectorAll(".remove")
for (let i = 0; i < removeItem.length; i++) {
    let removeButton = removeItem[i]
    removeButton.addEventListener('click', function(event) {
        let removeClicked = event.target
        removeClicked.parentElement.parentElement.parentElement.remove()
    })

    
}