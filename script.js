// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
});

// Animated Counter
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// Language Toggle
let isEnglish = true;

function toggleLanguage(){
    const heroTitle = document.getElementById("hero-title");

    if(isEnglish){
        heroTitle.textContent = "Mtaalamu wa Tafsiri ya iGaming kwa Kiswahili (Kenya)";
        isEnglish = false;
    } else {
        heroTitle.textContent = "Swahili (Kenya) iGaming Translator & Editor";
        isEnglish = true;
    }
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if(name.length < 3){
        formMessage.textContent = "Name must be at least 3 characters.";
        formMessage.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    if(message.length < 10){
        formMessage.textContent = "Message must be at least 10 characters.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "lightgreen";
});
