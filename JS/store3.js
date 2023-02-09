let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name:"Ban Mian",
        tag:"mknbanmian",
        price:3.0,
        inCart:0
    },
    {
        name:"Dumpling Noodle",
        tag:"mknshuijiaomian",
        price:3.5,
        inCart:0
    },
    {
        name:"Yu Pian Noodle",
        tag:"mknyupian",
        price:4.5,
        inCart:0
    },
    {
        name:"Fired Fish Behoon",
        tag:"mknfishmifeng",
        price:4.0,
        inCart:0
    },
    {
        name:"Gan Lao Mian",
        tag:"mknganlaomian",
        price:4.5,
        inCart:0
    },
    {
        name:"Zha Jiang Mian",
        tag:"mknZhaJiangMian",
        price:4.0,
        inCart:0
    }
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