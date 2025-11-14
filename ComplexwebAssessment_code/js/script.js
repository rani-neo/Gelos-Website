console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  // --- Hamburger Menu ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll('#navLinks a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // --- Show Specific Case Study Section ---
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');

  const sections = document.querySelectorAll('.case-study-section');
  sections.forEach(s => s.style.display = 'none');

  if (section === "operations") {
    document.getElementById('improving-section').style.display = 'block';
  } else if (section === "problems") {
    document.getElementById('problems-section').style.display = 'block';
  } else {
    const caseStudyContent = document.getElementById('case-study-content');
    if (caseStudyContent) {
      caseStudyContent.innerHTML = "<p>Sorry, the requested section is not available.</p>";
    }
    
  }

  // --- Contact Form (Left Side) Validation ---
  
  // --- Contact Form (Right Side) Validation ---
  const formRight = document.getElementById('contactFormRight');

  if (formRight) {
    formRight.addEventListener('submit', function (event) {
      event.preventDefault(); // 🛑 Prevent URL query parameters
  
      // Clear previous errors
      document.getElementById('nameErrorRight').innerText = '';
      document.getElementById('emailErrorRight').innerText = '';
      document.getElementById('messageErrorRight').innerText = '';
      document.getElementById('formErrorRight').innerText = '';
  
      // Get values
      const name = document.getElementById('nameRight').value.trim();
      const email = document.getElementById('emailRight').value.trim();
      const message = document.getElementById('messageRight').value.trim();
      console.log("Form submitted");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
  
      let isValid = true;
  
      if (!name) {
        document.getElementById('nameErrorRight').innerText = 'Enter the complete details';
        isValid = false;
      }
  
      if (!email) {
        document.getElementById('emailErrorRight').innerText = 'Enter the complete details';
        isValid = false;
      }
  
      if (!message) {
        document.getElementById('messageErrorRight').innerText = 'Enter the complete details';
        isValid = false;
      }
  
      if (!isValid) {
        document.getElementById('formErrorRight').innerText = 'Enter the complete details';
        return;
      }
  
      alert('Form submitted successfully!');
      formRight.reset(); // Clear the form
      window.history.replaceState(null, null, window.location.pathname + '#contact'); 
      
   
    
    });
  }});
  document.addEventListener("DOMContentLoaded", () => {
  const chat = document.querySelector("df-messenger");
  if (chat) chat.setAttribute("aria-label", "Open chat window to talk with Gelos Assistant");
  console.log("Gelos Chatbot loaded.");
});
