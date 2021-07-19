

/* product data */
prod1 = {
    id: 1,
    name: "Gold Necklace",
    price: 10000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam."
}
var products = [
    {id:1, brand:"Tanishq", imgurl:"https://via.placeholder.com/150", name:"Gold Necklace", price: 2000, desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam."},
    {id:2, brand:"Ranka", imgurl:"https://via.placeholder.com/150", name:"Diamond Ring", price: 1000, desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam."},
    {id:3, brand:"Tanishq", imgurl:"https://via.placeholder.com/150", name:"Silver Coin", price: 4000, desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam."},
    {id:4, brand:"Ranka", imgurl:"https://via.placeholder.com/150", name:"Gold Watch", price: 3000, desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam."},
    {id:5, brand:"Tanishq", imgurl:"https://via.placeholder.com/150", name:"Diamond Necklace", price: 60000, desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, laboriosam."},
];

function loadProducts(){
    for(var i=0; i<products.length; i++){
        appendProduct(products[i]);
    }
}

function appendProduct(product){
    var mainDiv = document.getElementById("products-catalogue");
    var div = document.createElement("div");
    div.style.width = "250px";
    div.style.height = "430px";
    div.style.backgroundColor = "whitesmoke";
    div.style.margin = "10px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.padding = "20px";
    div.id = product.id;
    var image = document.createElement("img");
    image.setAttribute("src",product.imgurl);
    var h2 = document.createElement("h2");
    h2.innerHTML = product.name;
    var p = document.createElement("p");
    p.innerHTML = product.desc;
    var h3 = document.createElement("h3");
    h3.innerHTML = product.price;

    var btn = document.createElement("button");
    btn.innerHTML = "Add to Cart";
    btn.addEventListener("click", () => {
        //add to cart
        addToCart(product);
    })
    var h5 = document.createElement("h5");
    h5.innerHTML = product.brand;

    //append to div
    div.append(image, h5, h2, p, h3, btn);

    //append to page
    mainDiv.append(div);

}
loadProducts();

/* end of products data */

/* actions - sort, filter */
function sortPrice(flag){
    if(flag == 1){
        //ascending
        products.sort((a, b) => {
            return a.price - b.price;
        });
    }
    else if(flag == 2){
        //descending
        products.sort((a, b) => {
            return b.price - a.price;
        });
    }
    var mainDiv = document.getElementById("products-catalogue");
    mainDiv.innerHTML = "";
    loadProducts();
}

function filterByBrand(flag){
    var mainDiv = document.getElementById("products-catalogue");
    mainDiv.innerHTML = "";
    var brandName = "";
    if(flag == 1){
        brandName = "Ranka";
    }
    else if(flag == 2){
        brandName = "Tanishq";
    }
    for(var i=0; i<products.length; i++){
        if(products[i].brand == brandName){
            appendProduct(products[i]);
        }
    }
}
/* end of actions */

/* shopping cart */
var cartCount;
function goToCart(){
    window.location.href = "cart.html";
}
function goToIndex(){
    window.location.href = "index.html";
}

function addToCart(product){
    //update values
    updateCartCount();
    updateCartTotal(product.price);

    //store in storage
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if(cartItems == null){
        //empty cart
        cartItems = [];
    }

    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function updateCartCount(){
    
    cartCount = JSON.parse(localStorage.getItem("cartCount"));

    if(cartCount == null){
        //empty cart
        var cartCount = 0;
    }
    
    cartCount++;
    localStorage.setItem("cartCount", JSON.stringify(cartCount));

}
function updateCartTotal(price){
    
    cartTotal = JSON.parse(localStorage.getItem("cartTotal"));

    if(cartTotal == null){
        //empty cart
        cartTotal = 0;
    }
    
    cartTotal += price;
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal));

}

/* end of cart */