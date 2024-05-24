let fname =document.getElementById("FirstName")
let lname =document.getElementById("listName")
let email =document.getElementById("Email")
let passowrd =document.getElementById("PASS")
// ***
let register=document.querySelector("#Sign_Up")
register.addEventListener("click",function(w){
    w.preventDefault()
    if(fname.value===""||lname.value===""||email.value===""||passowrd===""){
        alert("The Data Is Incomplate");
    }else{
        localStorage.setItem("first_name",fname.value)
        localStorage.setItem("listt_Name",lname.value)
        localStorage.setItem("Email",email.value)
        localStorage.setItem("passord",passowrd.value)

        setTimeout(()=>{
            window.location="login.html"
        },1000)
    }
})


