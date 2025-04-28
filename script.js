// Button: Reveal Fun Medical Fact
const factButton = document.getElementById('factButton');
const medicalFacts = [
  "Your brain generates about 20 watts of electricity while awake – enough to power a light bulb!",
  "The acid in your stomach is strong enough to dissolve razor blades.",
  "You have about 60,000 miles of blood vessels in your body!",
  "The human body contains around 37.2 trillion cells.",
  "An adult’s skin weighs around 3.6 kilograms (8 pounds)!"
];

factButton.addEventListener('click', () => {
  const randomFact = medicalFacts[Math.floor(Math.random() * medicalFacts.length)];
  factButton.textContent = randomFact;
});

// Image Slideshow
const galleryImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
  ];
  let currentImage = 0;
  
  const galleryImage = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  nextBtn.addEventListener('click', () => {
    currentImage = (currentImage + 1) % galleryImages.length;
    galleryImage.src = galleryImages[currentImage];
  });
  
  prevBtn.addEventListener('click', () => {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    galleryImage.src = galleryImages[currentImage];
  });  

// Tabs Logic
const tabLinks = document.querySelectorAll('.tablink');
const tabContents = document.querySelectorAll('.tabcontent');

tabLinks.forEach(button => {
  button.addEventListener('click', () => {
    tabContents.forEach(content => content.style.display = 'none');
    document.getElementById(button.dataset.tab).style.display = 'block';
  });
});

// Form Validation
const signupForm = document.getElementById('signupForm');
const formFeedback = document.getElementById('formFeedback');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  if (name === '' || email === '' || password === '') {
    formFeedback.textContent = "Please fill out all fields.";
    formFeedback.style.color = 'red';
    return;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.style.color = 'red';
    return;
  }

  if (password.length < 8) {
    formFeedback.textContent = "Password must be at least 8 characters.";
    formFeedback.style.color = 'red';
    return;
  }

  formFeedback.textContent = "Successfully Subscribed! 🎉";
  formFeedback.style.color = 'green';
});

// Real-time feedback while typing password
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordInput.style.borderColor = 'red';
  } else {
    passwordInput.style.borderColor = 'green';
  }
});
