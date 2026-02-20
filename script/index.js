function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const words = [
  "Frontend Developer",
  "Programmer",
  "Tech Entrepreneur",
  "Creative Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.querySelector(".typed-text");

const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 1500;

function typeLoop() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, pauseTime);
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
}

typeLoop();

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop the page from reloading

    // 1. Capture the form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 2. Send it as JSON
    const response = await fetch('YOUR_SERVER_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Tell the server it's JSON
        },
        body: JSON.stringify(data) // Convert the object to a JSON string
    });

    const result = await response.json();
    console.log(result);
});