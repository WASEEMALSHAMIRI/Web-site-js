let viewcart=document.querySelector ("#viewcart")
let cart=document.querySelector ("#cart")
viewcart.addEventListener("click",function(){
    if(cart.style.display=="none"){
        cart.style.display="block"
    }else{
        cart.style.display="none"
 }
})

// *******************************************************
// *******************************************************

let viewuser=document.getElementById ("viewuser")
let useraccount=document.querySelector ("#useraccount")
viewuser.onclick=clickuser
function clickuser (){
    if(useraccount.style.display=="none"){
        useraccount.style.display="block"
    }else{
        useraccount.style.display="none"
 }
}


let home = document.getElementById ("home")
let product=[
    {
        id:0,
        iamge:"./Images/images-removebg-preview.png",
        name:"Watermelon",
        price:5,
        gategory:"fruit",
        number:1
    },
    {
        id:1,
        iamge:"./Images/apple-removebg-preview.png",
        name:"Apple",
        price:3,
        gategory:"fruit",
        number:1
    },
    {
        id:2,
        iamge:"./Images/juicegrapes-removebg-preview.png",
        name:"Juice grapes",
        price:2,
        gategory:"drink",
        number:1
    },
    {
        id:3,
        iamge:"./Images/botato-removebg-preview.png",
        name:"Botato",
        price:2,
        gategory:"Vegetables",
        number:1
    },
    {
        id:4,
        iamge:"./Images/cheese_33-removebg-preview.png",
        name:" Triangle cheese",
        price:4,
        gategory:"Dairy",
        number:1
    },
    {
        id:5,
        iamge:"./Images/cheese-removebg-preview.png",
        name:"Cheese",
        price:5,
        gategory:"Dairy",
        number:1
    },
    {
        id:6,
        iamge:"./Images/coca-cola-removebg-preview.png",
        name:"Cocacola",
        price:1,
        gategory:"dring",
        number:1
    },
    {
        id:7,
        iamge:"./Images/chocolate-removebg-preview.png",
        name:"chocolate",
        price:2,
        gategory:"chocolate",
        number:1
    },
    {
        id:8,
        iamge:"./Images/eggplant-removebg-preview.png",
        name:"Eggplant",
        price:2,
        gategory:"Vegetables",
        number:1
    },
    {
        id:9,
        iamge:"./Images/tomato-removebg-preview.png",
        name:"Tomato",
        price:3,
        gategory:"Vegetables",
        number:1
    },
    {
        id:10,
        iamge:"./Images/spices-removebg-preview.png ",
        name:"spices",
        price:5,
        gategory:"Cook",
        number:1
    },
    {
        id:11,
        iamge:"./Images/cucumber-removebg-preview.png",
        name:"Cucumber",
        price:3,
        gategory:"Vegetables",
        number:1
    },
    {
        id:12,
        iamge:"./Images/flour-removebg-preview.png",
        name:"Flour",
        price:4,
        gategory:"cook",
        number:1
    },
    {
        id:13,
        iamge:"./Images/banana-removebg-preview.png",
        name:"Banana",
        price:3,
        gategory:"fruit",
        number:1
    },
    {
        id:14,
        iamge:"./Images/salt-removebg-preview.png",
        name:"salt",
        price:2,
        gategory:"cook",
        number:1
    },
    {
        id:15,
        iamge:"./Images/milk-removebg-preview.png",
        name:"Milke",
        price:3,
        gategory:"drink",
        number:1
    },
    {
        id:16,
        iamge:"./Images/pepsi-removebg-preview.png",
        name:"Pepsi",
        price:1,
        gategory:"drink",
        number:1
    },
    {
        id:17,
        iamge:"./Images/pulm-removebg-preview.png",
        name:"pulm",
        price:5,
        gategory:"fruit",
        number:1
    },
    
]
function drawproduct(){
    let pro=product.map((item)=>{
        return`
        <div class="prodact" >
            <div class="imgprodact">
                <img src="${item.iamge}" draggable="false" alt="">
            </div>
            <div class="product-info">
                <h3 class="name-info">Name :${item.name}</h3>
                <h3 class="price-info">Price :${item.price}</h3>
                <h3 class="category-info">Gategory :${item.gategory}</h3>
            </div>
            <div class="addcart">
                <button onclick="addToCart(${item.id})" class="butadd"> Add To Cart</button>
                <i id="heart"  onclick="heart(${item.id})" class=" mylike fas fa-heart fav heart"></i>
            </div>
        </div>`
    })

    home.innerHTML=pro;
}
drawproduct()
 
let gategoryitem= document.getElementById("selection")
let search= document.getElementById("search")
function searchitem(values){
    let PRO=""
   if(gategoryitem.value=="Search By Name"){
    
       for(let i=0;i<product.length;i++){
        if(product[i].name.includes(values)){
            PRO+=
            `
        <div class="prodact" >
            <div class="imgprodact">
                <img src="${product[i].iamge}" alt="">
            </div>
            <div class="product-info">
                <h3 class="name-info">Name :${product[i].name}</h3>
                <h3 class="price-info">Price :${product[i].price}</h3>
                <h3 class="category-info">Gategory :${product[i].gategory}</h3>
            </div>
            <div class="addcart">
                <button onclick="addToCart(${product[i].id}) class="butadd"> Add To Cart</button>
                <i id="heart"  onclick="heart(${id})" class="mylike fas fa-heart fav heart"></i>
            </div>
        </div>`
        }
       
       }

   }else{
    for(let i=0;i<product.length;i++){
        if(product[i].gategory.includes(values)){
            PRO+=
            `
        <div class="prodact" >
            <div class="imgprodact">
                <img src="${product[i].iamge}" alt="">
            </div>
            <div class="product-info">
                <h3 class="name-info">Name :${product[i].name}</h3>
                <h3 class="price-info">Price :${product[i].price}</h3>
                <h3 class="category-info">Gategory :${product[i].gategory}</h3>
            </div>
            <div class="addcart">
                <button  onclick="addToCart(${product[i].id})class="butadd"> Add To Cart</button>
                <i id="heart" onclick="heart(${id})" class=" mylike fas fa-heart fav heart"></i>
            </div>
        </div>`
        }
       
       }
   }
   home.innerHTML=PRO;
}
// ******************************************************************
// ******************************************************************
function view(){
    window.location="cartsproducts.html"
}
let cartProduct=document.getElementById("cards")
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
let butadd=document.querySelectorAll(".butadd")

////////////////////////////////////////////////////////////



numcart=document.getElementById('numcart')
function addToCart(id){
    if(localStorage.getItem("first_name")){
        butadd[id].style.backgroundColor="red"
        butadd[id].innerHTML="remove"
        let choosenItem = product.find((item) => item.id === id );
        addedItem=[...addedItem,choosenItem]
        localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        document.querySelector(".not").style.display="none"
        numcart.innerHTML=addedItem.length
        cartProduct.innerHTML += ` 
        <div id="card">
        <h2>${choosenItem.name}</h2>
        <div id="cardupr">
            <span class="nemb" target = "${id}">${choosenItem.number}</span>
            <i  onclick="plus(${id})" class="fas fa-plus plus"></i>
            <i onclick="minus(${id})" class="fas fa-minus minus"></i>
            
        </div>
    </div>`;
    

    }else{
        window.location ="login.html"
    }

}

///////////////////////////////////////////////////////////////////



function plus(id){
    let numb = document.querySelectorAll(".nemb")
    product[id].number+=1
    numb.forEach(ele=>{
        if(ele.attributes.target.value == id){
            ele.innerHTML = product[id].number
        }
    })
}
  

function minus(id){
    let numb = document.querySelectorAll(".nemb")
    product[id].number-=1
    numb.forEach(ele=>{
        if(ele.attributes.target.value == id){
            ele.innerHTML = product[id].number
        }
    })
}
let addheart = localStorage.getItem("productlike") ? JSON.parse(localStorage.getItem("productlike")) : [];
let hearts=let = document.querySelectorAll(".heart")
function heart(id){
    let chooseheart= product.find((item) => item.id === id );
    addheart=[...addheart,chooseheart]
    hearts[id].style.color="red"

    localStorage.setItem("productlike" , JSON.stringify(addheart) )
}



