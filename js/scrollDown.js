// Add this JavaScript function
function scrollToContent() {
    // Replace 'main-content' with the ID of your main content section
    const mainContent = document.getElementById('main-content');
    mainContent.scrollIntoView({ behavior: 'smooth' });
  }


  document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let lastScroll = 0;
    
    // Add initial class
    body.classList.add('at-top');
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // If we're at the top of the page
      if (currentScroll <= 0) {
        body.classList.add('at-top');
        return;
      }
      
      // Remove the at-top class when scrolling
      body.classList.remove('at-top');
      
      lastScroll = currentScroll;
    });
  });