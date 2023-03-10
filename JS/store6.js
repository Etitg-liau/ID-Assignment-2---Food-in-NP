let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name:"Fried Wonton",
        tag:"mkywonton",
        price:0.5,
        inCart:0
    },
    {
        name:"Wu Xiang",
        tag:"mkywuxiang",
        price:0.50,
        inCart:0
    },
    {
        name:"Beehoon",
        tag:"mkybeehoon",
        price:1.0,
        inCart:0
    },
    {
        name:"Bai Cai",
        tag:"mkybaicai",
        price:0.50,
        inCart:0
    },
    {
        name:"Ban Mian",
        tag:"mkybanmian",
        price:1.0,
        inCart:0
    },
    {
        name:"Egg",
        tag:"mkyegg",
        price:0.50,
        inCart:0
    },
    {
        name:"Seaweed",
        tag:"mkyseaweed",
        price:0.50,
        inCart:0
    },
    {
        name:"Tofu",
        tag:"mkyTofu",
        price:0.50,
        inCart:0
    },
    {
        name:"Tomato",
        tag:"mkytomato",
        price:0.50,
        inCart:0
    },
    {
        name:"Xiao Bai Cai",
        tag:"mkyXIAOBAICAI",
        price:0.50,
        inCart:0
    },
];
for(let i = 0; i< carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.nav-item span').textContent = productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseFloat(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.nav-item span').textContent =
         productNumbers +1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.nav-item span').textContent =1;
    }

    setItems(product);
}

function setItems(product){
    console.log("my product is ",product);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        
        if(cartItems[product.tag] == undefined){
            cartItems ={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }
    }

    localStorage.setItem("productsInCart",JSON.stringify
    (cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');


    if(cartCost != null){
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }

}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=  `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="../Img/makan place/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease"
                name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase"
                name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
            <div  class="basketTotalTitle">
                Basket Total
            </div>
            <div class="basketTotal">
                $${cartCost}
            </div>
    `;

    }
}

onLoadCartNumbers();
displayCart();