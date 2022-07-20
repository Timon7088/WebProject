let products = [
    {
        id : "MSI",
        key : "../product pages/MSI-Chair.html",
        title: "MSI MAG CH130",
        image: "../../imgs/catagory imgs/gamingchair.jpg",
        price: 1100,
        original_price: ""
    },
    
    {
        id : "dualsense",
        key : "../product pages/Ps5-Controller.html",
        title: "Sony PS5 DualSense Controller",
        image: "../../imgs/catagory imgs/PS5ctrlr.jfif",
        price: 180,
        original_price: 240
    },
    
    {
        id : "chargerStand",
        key : "../product pages/Headphone-stand.html",
        title: "Headphone Stand with USB charger",
        image: "../../imgs/catagory imgs/headsetDockCharge.jpg",
        price: 110,
        original_price: ""
    },
    
    {
        id : "proCntrlr",
        key : "../product pages/Pro-cntrlr.html",
        title: "Nintendo Switch Pro Controller",
        image: "../../imgs/catagory imgs/proctrlr.jpg",
        price: 200,
        original_price: ""
    },
    
    {
        id : "oculus",
        key : "../product pages/Oculus.html",
        title: "Oculus rift S Headset",
        image: "../../imgs/vrset.webp",
        price: 1960,
        original_price: ""
    },
    
    {
        id : "LEDpad",
        key : "../product pages/MousePad.htmlz",
        title: "LED Lighting Gaming Mouse Pad",
        image: "../../imgs/catagory imgs/gamePad.jpg",
        price: 40,
        original_price: 100
    }
]

const accessories = document.querySelector(".accessories")

const catalog = products.map(products => {
    accessories.innerHTML += `
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
    `
    })