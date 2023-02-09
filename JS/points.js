let carts = document.querySelectorAll(".add-cart");

let award = [
    {
        name:"Takoyaki",
        tag:"cdtakoyaki",
        price:2.8,
        inCart:0
    },
    {
        name:"Waffles",
        tag:"cdwaffles",
        price:2.0,
        inCart:0
    },
    {
        name:"Ice Cream",
        tag:"cdicecream",
        price:2.8,
        inCart:0
    },
    {
        name:"Cup Corn",
        tag:"cdCupCorn",
        price:1.0,
        inCart:0
    }
];
for(let i = 0; i< carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(award[i]);
    })
}
function totalCost(award){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }

}