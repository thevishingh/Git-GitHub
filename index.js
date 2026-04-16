// Toggle Sidebar Function
function toggleSidebar() {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const toggleBtn = document.querySelector('.toggle-btn');
  
  nav.classList.toggle('hidden');
  main.classList.toggle('expanded');
  toggleBtn.classList.toggle('sidebar-hidden');
}

// Form Handling Function
function handleContactForm(e) {
  e.preventDefault();
  
  // Get form elements
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');
  
  // Reset message
  formMessage.textContent = '';
  formMessage.className = 'form-message';
  
  // Validation
  const errors = [];
  
  if (!nameInput.value.trim()) {
    errors.push('Name is required');
  }
  
  if (!emailInput.value.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(emailInput.value)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!messageInput.value.trim()) {
    errors.push('Message is required');
  } else if (messageInput.value.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  // Show errors if any
  if (errors.length > 0) {
    formMessage.className = 'form-message error';
    formMessage.innerHTML = '<strong>Please fix the following errors:</strong><ul>' + 
                           errors.map(err => '<li>' + err + '</li>').join('') + 
                           '</ul>';
    return;
  }
  
  // Show success message
  formMessage.className = 'form-message success';
  formMessage.textContent = '✓ Thank you! Your message has been sent successfully. We will get back to you soon!';
  
  // Reset form
  form.reset();
  
  // Optional: Hide message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = '';
    formMessage.className = 'form-message';
  }, 5000);
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add event listener to toggle button
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleSidebar);
  }
  
  // Close sidebar when a link is clicked (optional - for better UX on mobile)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Uncomment below line if you want sidebar to close when clicking a link
      // toggleSidebar();
    });
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
});
