function signup(){
    let signin=document.getElementById("sign-in");
    let signup=document.getElementById("sign-up");
    signin.style.display="none";
    signup.style.display="contents"; 
}
function signin(){
    let signin=document.getElementById("sign-in");
    let signup=document.getElementById("sign-up");
    signin.style.display="contents";
    signup.style.display="none";
}