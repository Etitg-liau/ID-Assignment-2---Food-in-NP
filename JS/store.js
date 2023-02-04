
let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name:"sandwich",
        tag:"subwaysw",
        price:7,
        inCart:0
    },
    {
        name:"flatbread",
        tag:"subwayfb",
        price:7.5,
        inCart:0
    },
    {
        name:"wraps",
        tag:"subwaywr",
        price:7.5,
        inCart:0
    },
    {
        name:"salad",
        tag:"subwaysa",
        price:6.3,
        inCart:0
    },
    {
        name:"cooky",
        tag:"subwayco",
        price:1.2,
        inCart:0
    },
    {
        name:"drinks",
        tag:"subwaydr",
        price:1.2,
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
        cartCost =parseFloat(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }

}

onLoadCartNumbers()