// Cursor glow effect
document.addEventListener('DOMContentLoaded', function() {
  const dashboardCanvas = document.querySelector('.dashboard-canvas');
  
  if (dashboardCanvas) {
    dashboardCanvas.addEventListener('mousemove', function(e) {
      const rect = dashboardCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update CSS custom properties for mouse position
      dashboardCanvas.style.setProperty('--mouse-x', x + 'px');
      dashboardCanvas.style.setProperty('--mouse-y', y + 'px');
      
      // Add glow class
      dashboardCanvas.classList.add('glow');
    });
    
    dashboardCanvas.addEventListener('mouseleave', function() {
      // Remove glow when mouse leaves the canvas
      dashboardCanvas.classList.remove('glow');
    });
  }
});
