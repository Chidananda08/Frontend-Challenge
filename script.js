document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    document.getElementById('successMessage').classList.remove('hidden');
  
    
    document.getElementById('contactForm').reset();
  
    
    setTimeout(() => {
      document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
  });
  