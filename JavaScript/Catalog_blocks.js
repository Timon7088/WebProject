'use strict'

let games = document.querySelector(".games");
let consoles = document.querySelector(".consoles");
let accessories = document.querySelector(".accessories");

eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadGame();
        loadConsole()
        loadAccessory()
    })
}

function loadGame() {
    fetch('JavaScript/Games_storage.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(product => {
            html += `
                <a href="#">
                    <div class="prod">
                        <img class="image" src="${product.image}">
                        <br><br>
                        <p class = "product_title">${product.title}</p>
                        <div class="prices">
                            <span class="price">${product.price}</span>
                            <span class="original_price">${product.original_price}</span>
                        </div>
                        <div class="btn_container">
                            <button class="buy_now"> Buy Now </button>
                            <button class="add_to_cart"> add to cart </button>
                        </div>
                    </div>
                </a>
            `
        })
        games.innerHTML = html;
    })
}

function loadConsole() {
    fetch('JavaScript/Consoles_storage.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(product => {
            html += `
                <a href="#">
                    <div class="prod">
                        <img class="image" src="${product.image}">
                        <br><br>
                        <p class = "product_title">${product.title}</p>
                        <div class="prices">
                            <span class="price">${product.price}</span>
                            <span class="original_price">${product.original_price}</span>
                        </div>
                        <div class="btn_container">
                            <button class="buy_now"> Buy Now </button>
                            <button class="add_to_cart"> add to cart </button>
                        </div>
                    </div>
                </a>
            `
        })
        consoles.innerHTML = html;
    })
}

function loadAccessory() {
    fetch('JavaScript/Accessories_storage.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(product => {
            html += `
                <a href="#">
                    <div class="prod">
                        <img class="image" src="${product.image}">
                        <br><br>
                        <p class = "product_title">${product.title}</p>
                        <div class="prices">
                            <span class="price">${product.price}</span>
                            <span class="original_price">${product.original_price}</span>
                        </div>
                        <div class="btn_container">
                            <button class="buy_now"> Buy Now </button>
                            <button class="add_to_cart"> add to cart </button>
                        </div>
                    </div>
                </a>
            `
        })
        accessories.innerHTML = html;
    })
}