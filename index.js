// Toggle Sidebar Function
function toggleSidebar() {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const toggleBtn = document.querySelector('.toggle-btn');
  
  nav.classList.toggle('hidden');
  main.classList.toggle('expanded');
  toggleBtn.classList.toggle('sidebar-hidden');
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
});
