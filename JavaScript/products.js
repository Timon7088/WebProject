'use strict'

let products = [


    // <----------------------------------- game catalog ---------------------------------------->
    {
        title: "Monster Hunter: World",
        image: "imgs/catagory imgs/mhw.jpg",
        price: "₪130",
        original_price: "₪190",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Super Smash Brothers. Ultimate",
        image: "imgs/catagory imgs/ssbu.jpg",
        price: "₪120",
        original_price: "₪225",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Grand Theft Auto: San Andreas",
        image: "imgs/catagory imgs/gta.jpg",
        price: "₪40",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "God Of War",
        image: "imgs/catagory imgs/gow.jpg",
        price: "₪150",
        original_price: "₪225",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Forza Horizon",
        image: "imgs/catagory imgs/forza.jpg",
        price: "₪110",
        original_price: "₪180",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Ratchet & Clank: Rift Apart",
        image: "imgs/catagory imgs/Rift Apart.webp",
        price: "₪190",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Pokemon Sword",
        image: "imgs/catagory imgs/pokemonS.jpg",
        price: "₪160",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Pokemon Shield",
        image: "imgs/catagory imgs/PokemonSld.jpg",
        price: "₪160",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Payday 2",
        image: "imgs/catagory imgs/pd2.jpg",
        price: "₪100",
        original_price: "₪140",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Command & Conquer: Red Alert 3",
        image: "imgs/catagory imgs/ra3.jpg",
        price: "₪80",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Command & Conquer: Red Alert 2",
        image: "imgs/catagory imgs/ra2.jpg",
        price: "₪20",
        original_price: "₪80",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Legend of Zelda: Breath of the Wild",
        image: "imgs/catagory imgs/botw.jpg",
        price: "₪100",
        original_price: "₪170",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Super Mario Odyssey",
        image: "imgs/catagory imgs/mario.jpg",
        price: "₪140",
        original_price: "₪190",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "MX vs ATV Legends",
        image: "imgs/catagory imgs/mxlegends.jpg",
        price: "₪120",
        original_price: "₪160",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Enter the Gungeon",
        image: "imgs/catagory imgs/gungeon.jpg",
        price: "₪150",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "The Witcher 3: Wild Hunt",
        image: "imgs/catagory imgs/witcher.jpg",
        price: "₪180",
        original_price: "₪220",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Crypt of the Necrodancer",
        image: "imgs/catagory imgs/crypt.jfif",
        price: "₪80",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    {
        title: "Tiny Tina's Wonderland",
        image: "imgs/catagory imgs/tinytina.jpg",
        price: "₪225",
        original_price: "",
        inCart : 0,
        category: "games"
    },
    
    // <--------------------------------------- console catalog ------------------------------------------>

    {
        title: "Xbox series X & S",
        image: "imgs/catagory imgs/seriesX.jpg",
        price: "₪3000",
        original_price: "₪4600",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Gameboy Advanced SP Blue Edition",
        image: "imgs/catagory imgs/gba BE.jpg",
        price: "₪60",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Playstation 5",
        image: "imgs/catagory imgs/PS5.jpg",
        price: "₪2500",
        original_price: "₪5000",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Nintendo Wii",
        image: "imgs/catagory imgs/Wii.jfif",
        price: "₪360",
        original_price: "₪720",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Playstation 5 Special pack",
        image: "imgs/catagory imgs/PS5 special.jpg",
        price: "₪5000",
        original_price: "₪8600",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Playstation 4",
        image: "imgs/catagory imgs/PS4.png",
        price: "₪2000",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Nintendo Switch",
        image: "imgs/catagory imgs/switch.jpg",
        price: "₪1800",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Xbox 360",
        image: "imgs/catagory imgs/xbox360.jfif",
        price: "₪1200",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Xbox Mortal Kombat design",
        image: "imgs/catagory imgs/seriesX skin.jpg",
        price: "₪2800",
        original_price: "₪3200",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Xbox One Piece design",
        image: "imgs/catagory imgs/seriesX one piece.jpg",
        price: "₪3500",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Playstaion 3",
        image: "imgs/catagory imgs/PS3.jpg",
        price: "₪400",
        original_price: "₪1200",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Wii U",
        image: "imgs/catagory imgs/WiiU.jpg",
        price: "₪280",
        original_price: "₪360",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Xbox Series S",
        image: "imgs/catagory imgs/seriesS.jpg",
        price: "₪2000",
        original_price: "₪3000",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Playstation Vita",
        image: "imgs/catagory imgs/vita.jfif",
        price: "₪345",
        original_price: "₪540",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Nintendo Entertainment System",
        image: "imgs/catagory imgs/NES.jpg",
        price: "₪150",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Playstation Ironman design",
        image: "imgs/catagory imgs/PS5 ironman.jpg",
        price: "₪3000",
        original_price: "₪5000",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Nintendo Switch OLED",
        image: "imgs/catagory imgs/switch oled.png",
        price: "₪2200",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    {
        title: "Nintendo Switch Super Smash Bros.",
        image: "imgs/catagory imgs/switch smash.jpg",
        price: "₪2000",
        original_price: "",
        inCart : 0,
        category: "console"
    },
    
    // <---------------------------------- accessories catalog ------------------------------------->
    
    {
        title: "MSI MAG CH130",
        image: "imgs/catagory imgs/gamingchair.jpg",
        price: "₪1100",
        original_price: "",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Sony PS5 DualSense Controller",
        image: "imgs/catagory imgs/PS5ctrlr.jfif",
        price: "₪180",
        original_price: "₪240",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Headphone Stand with USB charger",
        image: "imgs/catagory imgs/headsetDockCharge.jpg",
        price: "₪110",
        original_price: "",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Nintendo Switch Pro Controller",
        image: "imgs/catagory imgs/proctrlr.jpg",
        price: "₪200",
        original_price: "",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Oculus rift S Headset",
        image: "imgs/catagory imgs/vrheadset",
        price: "₪1960",
        original_price: "",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "LED Lighting Gaming Mouse Pad",
        image: "imgs/catagory imgs/gamePad.jpg",
        price: "₪40",
        original_price: "₪100",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Razer Nari Essential",
        image: "imgs/catagory imgs/nariHeadSet.gif",
        price: "₪280",
        original_price: "₪420",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Logitech G335 Wired Headset",
        image: "imgs/catagory imgs/logitechHeadSet.jpg",
        price: "₪400",
        original_price: "",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "GTRACING Gaming Music Chair",
        image: "imgs/catagory imgs/audioChair.jpeg",
        price: "₪1400",
        original_price: "",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Xbox Series X Controller Black",
        image: "imgs/catagory imgs/seriesXctrlr.jpg",
        price: "₪220",
        original_price: "₪260",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Razer Kraken Kitty Edition Headset",
        image: "imgs/catagory imgs/razerKraken.jpg",
        price: "₪680",
        original_price: "₪800",
        inCart : 0,
        category: "accessories"
    },
    
    {
        title: "Playstation VR Headset",
        image: "imgs/catagory imgs/psvr.jpeg",
        price: "₪1050",
        original_price: "₪1400",
        inCart : 0,
        category: "accessories"
    },
]


products.forEach(function(item){

    let {title, price, original_price, image, category} = item;

    let html = `<div class="prod">
    <div data-category = "";>
    <img class="image" src="${image}">
    <br><br>
    <p class = "product_title">${title}</p>
        <div class="prices">
            <span class="price">${price}</span>
            <span class="original_price">${original_price}</span>
        </div>
        <div class="category_item"><h4> ${category} </h4> </div>
        <div class="btn_container">
        <button class="buy_now"> Buy Now </button>
        <button class="add_to_cart"> add to cart </button>
    </div>
    </div>
    </div>`


    document.querySelector(".product_list").innerHTML += html;
});