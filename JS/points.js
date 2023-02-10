/*let carts = document.querySelectorAll(".add-cart");

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

}*/
function award1(){
    let dpoints1 = parseFloat(localStorage.getItem('points'));
    if(dpoints1>=40){
    dpoints1-=40;
    alert("Your award will send to your address in 7 working days.");
    alert("Thank you for uisng sg food hour.");
    location.reload()
    localStorage.setItem('points',dpoints1);
    }
    else
    {    alert("You do not have enough points for this award.");}
}
function award2(){
    let dpoints1 = parseFloat(localStorage.getItem('points'));
    if(dpoints1>=20){
    dpoints1-=20;
    alert("Your award will send to your address in 7 working days.");
    alert("Thank you for uisng sg food hour.");
    location.reload()
    localStorage.setItem('points',dpoints1);
    }
    else
    {    alert("You do not have enough points for this award.");}
}
function award3(){
    let dpoints1 = parseFloat(localStorage.getItem('points'));
    if(dpoints1>=80){
    dpoints1-=80;
    alert("Your award will send to your address in 7 working days.");
    alert("Thank you for uisng sg food hour.");
    location.reload()
    localStorage.setItem('points',dpoints1);
    }
    else
    {    alert("You do not have enough points for this award.");}
}
function award4(){
    let dpoints1 = parseFloat(localStorage.getItem('points'));
    if(dpoints1>=15){
    dpoints1-=15;
    alert("Your award will send to your address in 7 working days.");
    alert("Thank you for uisng sg food hour.");
    location.reload()
    localStorage.setItem('points',dpoints1);
    }
    else
    {    alert("You do not have enough points for this award.");}
}

function displayinfo() {
    let productContainer = document.querySelector
    (".sub-heading");
    productContainer.innerHTML = '';
    //var duser = $(".sub-heading");
    let name1 =localStorage.getItem('uname');
    let point1 = localStorage.getItem('points');
    ///var userinfo ="";
    //userinfo+=`<h3>User: ${name1} <br> Points: ${point1}</h3>`
    //duser.html(userinfo);
    productContainer.innerHTML +=`
            <div class="sub-heading">
                <h3>User: ${name1}</h3>
                <h3>Points: ${parseFloat(point1).toFixed(2)}
            </div>`;
    console.log(productContainer.innerHTML);
}

displayinfo();