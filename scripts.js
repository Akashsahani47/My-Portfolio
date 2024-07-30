
document.querySelectorAll('a[href^/"#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
     e.preventDefault();

     document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
     });
 });
});


document.querySelector('Form').addEventListener('submit', function(e) {
 e.preventDefault();
 alert('Thank you for your message!');
 this.reset();
});
