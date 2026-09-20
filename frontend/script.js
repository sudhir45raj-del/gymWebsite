const crosham = document.getElementsByClassName("crosham")[0];
const navUl = document.querySelector(".nav-links")
const navbar = document.querySelector(".navbar")
const logo = document.querySelector(".nlogo")
const cards = document.querySelectorAll(".sec5p2a, .sec5p2b, .sec5p2c")
if (crosham && navUl && logo) {
    crosham.addEventListener("click", () => {
    // Check if the current src contains the cross image
    if (crosham.src.includes("crossham.png")) {
        crosham.src = "images/navhambgr.png";
        navUl.classList.add("hidden");
        navbar.classList.add("hamAdjst");
      logo.classList.add("sm");
    } else {
        crosham.src = "images/crossham.png";
        navUl.classList.remove("hidden");
        navbar.classList.remove("hamAdjst");
    }
});
}
cards.forEach(card =>{
    const btn = card.querySelector(".get-startbtn");
    if(btn){
        btn.addEventListener("click",()=>{
            cards.forEach(c => c.classList.remove("active-top"));
            card.classList.add("active-top");
        })
    }
})
function validate(){
    const email = document.getElementById('email')
    if(email.value.trim() === "" 
     || !/^[a-zA-Z0-9]+@[a-zA-Z]+**\\.**[a-zA-Z]+$/.test(email.value)){
        alert("Make sure the email field is filled");
        return false;
    }
    return true;
}
function validatcont(){
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const number = document.getElementById('tel');
    if(firstName.value.trim() === ""){
        alert("make sure you enter your name");
        return false;
    }
    if(lastName.value.trim() === ""){
        alert("make sure you enter your name");
        return false;
    }
        if(number.value.trim() === "" || !/^\d{10}$/.test(number.value)){
            console.log("enter mobile number")
            alert("make sure you enter your mobile number");
            return false;
        }
    return true;
}
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq =>{
        const faqtgl = faq.querySelector(".faqtgl");
        const answer = faq.querySelector(".answer")
        if(faqtgl && answer){
            faqtgl.addEventListener("click",()=>{
                answer.classList.toggle("hiddenfa")
                faqtgl.classList.toggle("tg")
            })
        } 
    })
    // const username = "sudhir@gmail.com"
    // const result = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/.test(username)
    // console.log(result)