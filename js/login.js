
let emil = document.getElementById("Email")
let password = document.getElementById("PASSOWRD")
let getemail=localStorage.getItem("Email")
let getPassword=localStorage.getItem("passord")
let sign = document.getElementById("Sign_in")
 sign.addEventListener("click",function(w){
    w.preventDefault()
    if(emil.value===""||password.value===""){
        alert("The Data Is Incomplate")
    }else{
        if(emil.value && emil.value.trim()===getemail||password.value & password.value.trim()===getPassword){
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)
        }
    }
 })


