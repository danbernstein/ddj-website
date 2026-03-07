// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Select all links with hashes
  const links = document.querySelectorAll('a[href*="#"]');

  // Add click event to each link
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Get the target
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Check if target exists and is an anchor (starts with #)
      if (targetElement && targetId.startsWith('#')) {
        e.preventDefault();

        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without triggering scroll
        history.pushState(null, null, targetId);
      }
    });
  });
});