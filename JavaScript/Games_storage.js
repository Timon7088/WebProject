let products = [
    {
        id : "mhw",
        key : "../product pages/MHW.html",
        title: "Monster Hunter: World",
        image: "../../imgs/catagory imgs/mhw.jpg",
        price: 130,
        original_price: 190,
    },
    
    {
        id : "ssbu",
        key : "../product pages/SuperSmash.html",
        title: "Super Smash Brothers. Ultimate",
        image: "../../imgs/catagory imgs/ssbu.jpg",
        price: 120,
        original_price: 225,
    },
    
    {
        id : "gta",
        key : "../product pages/GTA-SA.html",
        title: "Grand Theft Auto: San Andreas",
        image: "../../imgs/catagory imgs/gta.jpg",
        price: 40,
        original_price: "",
    },
    
    {
        id : "gow",
        key : "../product pages/GodOfWar.html",
        title: "God Of War",
        image: "../../imgs/catagory imgs/gow.jpg",
        price: 150,
        original_price: 225,
    },
    
    {
        id : "forza",
        key : "../product pages/Forza.html",
        title: "Forza Horizon",
        image: "../../imgs/catagory imgs/forza.jpg",
        price: 110,
        original_price: 180,
    },
    
    {
        id : "riftApart",
        key : "../product pages/Rift-Apart.html",
        title: "Ratchet & Clank: Rift Apart",
        image: "../../imgs/catagory imgs/Rift Apart.webp",
        price: 190,
        original_price: ""
    }
]

const games = document.querySelector(".games")

const catalog = products.map(products => {
    games.innerHTML += `
        <a class= "card" href="${products.key}">
            <div class="prod">
                <img class="image" src="${products.image}">
                <br><br>
                <p class = "product_title">${products.title}</p>
                <div class="prices">
                    <span class="price">₪${products.price}</span>
                    <span class="original_price">₪${products.original_price}</span>
                </div>
                <div class="btn_container">
                    <button class="add_to_cart"> add to cart </button>
                </div>
            </div>
        </a>
    `
    })