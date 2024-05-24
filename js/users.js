
let userIn = document.querySelector ("#user_info")
let userD = document.querySelector ("#usname")
let links = document.querySelector ("#links")

if (localStorage.getItem("first_name")){
    links.remove()
    userIn.style.display ="flex"
    userD.innerHTML = localStorage.getItem("first_name")
}

let logOutBtn = document.querySelector("#log_out")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1000)
})