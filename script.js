// ===============================

// Smooth Scrolling

// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// ===============================

// Dark Mode Toggle

// ===============================

const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');

  toggleBtn.textContent = document.body.classList.contains('dark-mode')

    ? "☀️ Light Mode"

    : "🌙 Dark Mode";

});

// ===============================

// Typing Effect

// ===============================

const text = "Hi, I'm Naveen 👋";

function typeEffect() {

  const typingEl = document.querySelector(".typing");

  typingEl.textContent = ""; // reset before typing

  let index = 0;

  function typing() {

    if (index < text.length) {

      typingEl.textContent += text.charAt(index);

      index++;

      setTimeout(typing, 100);

    }

  }

  typing();

}

document.addEventListener("DOMContentLoaded", typeEffect);