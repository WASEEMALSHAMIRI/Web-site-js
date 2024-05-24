
let allProducts = document.querySelector("#main_cart")
let sum = document.querySelector("#sum h2")
var total=0



function drawCartProducts(fullproducts=[]){
    products= JSON.parse(localStorage.getItem("ProductsInCart"))||fullproducts;
    let g = products.map((item) => {
        
        return `
        <div class="productscart">
            <div class="productscartimg">
                <img src="${item.iamge}" draggable="false" alt="">
            </div>
            <div class="productcartitem">
                <div class="productcart-info">
                    <h3 class="name-info">name :${item.name}</h3>
                    <h3 class="price-info">price :${item.price}</h3>
                    <h3 class="category-info">category :${item.category}</h3>
                </div>
                <div class="addcart">
                    <div id="cardupr">
                        <span class="nemb" target = "${item.id}">${item.number}</span>
                        <i id="plus" onclick="plus(${item.id})" class="fas fa-plus plus"></i>
                        <i id="minus" onclick="minus(${item.id})" class="fas fa-minus minus"></i>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="rem_cart"> Remove</button>
                </div>
            </div>
        </div>`;
        

    })
    
    allProducts.innerHTML = g;
   
}
drawCartProducts()
function plus(id){
     let item= JSON.parse(localStorage.getItem("ProductsInCart"))
    let y=0
    for(let a=0;a<item.length;a++){
        if(item[a].id==id){
            item[a].number+=1
            y+=(item[a].number* item[a].price)
            localStorage.setItem("ProductsInCart", JSON.stringify(item))
            let ProductsInCarts =JSON.parse(localStorage.getItem("ProductsInCart"))
            drawCartProducts(ProductsInCarts)
        }
    }
    sum.innerHTML=y
}

function minus(id){
    let item= JSON.parse(localStorage.getItem("ProductsInCart"))
    let y=0
    for(let a=0;a<item.length;a++){
        if(item[a].id==id){
            if(item[a].number>1){
            item[a].number-=1
            y-= +(item[a].number* item[a].price)
            localStorage.setItem("ProductsInCart", JSON.stringify(item))
            let ProductsInCarts =JSON.parse(localStorage.getItem("ProductsInCart"))
            drawCartProducts(ProductsInCarts)
            }
        }
    }
    sum.innerHTML=y
}
 
function removeFromCart(id) {
    if (localStorage.getItem("ProductsInCart")) {
        let items = JSON.parse(localStorage.getItem("ProductsInCart"));
        let felterdata=items.filter((item) => item.id!== id)
        console.log(felterdata)
        localStorage.setItem("ProductsInCart", JSON.stringify(felterdata))
        let ProductsInCarts =JSON.parse(localStorage.getItem("ProductsInCart"))
        drawCartProducts(ProductsInCarts)
    }
}
// ************************************************************************************************








// *************************************************************************************************
let likesitem=document.getElementById("likesitem")
function drawlikeProducts(fullproducts=[]){
    products= JSON.parse(localStorage.getItem("productlike"))||fullproducts;
    let g = products.map((item) => {
        
        return `
        <div class="productlik">
        <img src="${item.iamge}" draggable="false" alt="">
        <div class="likeinfo">
            <div class="infoitem">
                <h3 class="name-info">name :${item.name}</h3>
                <h3 class="price-info">gategory :${item.category}</h3>
            </div>
            <div class="likeicon">
                <i id="heart" onclick="removeFromlike(${item.id})" class=" mylike fas fa-heart fav heartlik"></i>
            </div>
        </div>
    </div>`;
        

    })
    
    likesitem.innerHTML = g;
   
}
drawlikeProducts()

// //////////////////////////////////////////
function removeFromlike(id) {
    if (localStorage.getItem("productlike")) {
        let items = JSON.parse(localStorage.getItem("productlike"));
        let felterdata=items.filter((item) => item.id!== id)
        console.log(felterdata)
        localStorage.setItem("productlike", JSON.stringify(felterdata))
        let ProductsInCarts =JSON.parse(localStorage.getItem("productlike"))
        drawlikeProducts(ProductsInCarts)
    }
}