//login
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let card = document.querySelector(".card");

signup.onclick = function(){
    card.classList.toggle("active");
}
login.onclick = function(){
    card.classList.toggle("active");
}



function togle(){
    var state = document.getElementById("pass");
    if (state.type === "password") {
    state.type = "text";  
    document.getElementById("loginID").style.color='blue';  
    }   
else {
    state.type = "password";
  document.getElementById("loginID").style.color='#3F4E4F'; 
    }
}

function show(){
    var pass1 = document.getElementById("pass1");
    var confirm = document.getElementById("confirm");
    if (pass1.type === "password" && confirm.type === "password") {
        pass1.type = "text";  
        confirm.type = "text";
    document.getElementById("registerID").style.color='#DCD7C9 ';  
    }   
else {
    pass1.type = "password";
    confirm.type = "password";
  document.getElementById("registerID").style.color='#3F4E4F'; 
    }
}













//home
let btn = document.querySelector(".menu");
let container = document.querySelector(".container");

btn.onclick = function(){
    container.classList.toggle("active");
}