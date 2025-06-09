let email;
let pass;
function register(){
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;

    if(email && pass){
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);
        alert("Registration successful!");
        window.location.href = "login.html";
    }else{
        alert("Please fill in all fields.");
    }
}

let logemail;
let logpass;
function login(){
    email = localStorage.getItem("email",email)
    pass = localStorage.getItem("pass", pass)
    logemail = document.getElementById("logemail").value;
    logpass = document.getElementById("logpass").value;

    if(email === logemail && pass === logpass){
        alert("Login successfull !");
        window.location.href = "home.html"
    }else{
        alert("Please Enter correct Email & Password");
    }
}