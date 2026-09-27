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
     || !/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email.value)){
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
        alert("Please enter your first name.");
        return false;
    }
    if(lastName.value.trim() === ""){
        alert("Please enter your last name.");
        return false;
    }
        if(number.value.trim() === "" || !/^\d{10}$/.test(number.value)){
            console.log("Please enter a valid 10-digit mobile number.")
            alert("Please enter a valid 10-digit mobile number.");
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

// Contact page demo: validate details and open a prefilled WhatsApp draft.
// Replace this placeholder number with the real gym's WhatsApp number before launch.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    const planField = document.getElementById("plan");
    const messageField = document.getElementById("message");

    const params = new URLSearchParams(window.location.search);
    const selectedPlan = params.get("plan");
    if (selectedPlan && planField) {
        const matchingOption = Array.from(planField.options).find(
            option => option.value.toLowerCase() === selectedPlan.toLowerCase()
        );
        if (matchingOption) planField.value = matchingOption.value;
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validatcont()) return;

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phone = document.getElementById("tel").value.trim();
        const plan = planField ? planField.value : "";
        const message = messageField ? messageField.value.trim() : "";

        const text = [
            "Hello IronCore Fitness, I would like to make an inquiry.",
            `Name: ${firstName} ${lastName}`,
            `Phone: ${phone}`,
            plan ? `Membership interest: ${plan}` : "",
            message ? `Message: ${message}` : ""
        ].filter(Boolean).join("\n");

        // Demo placeholder. Replace with the real gym's WhatsApp number (country code + number, digits only).
        const whatsappNumber = "919000000000";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
}
