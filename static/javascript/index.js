
document.querySelector('.checkoutcompany').addEventListener("click", function(){
    window.open('https://solarcompany-kv57.onrender.com/');
});

document.querySelector('.checkoutchurch').addEventListener("click", function(){
    window.open('https://winnersmando.onrender.com/');
});

document.querySelector('.checkout').addEventListener("click", function(){
    window.open('https://alicelandlordstore.onrender.com/');
});

document.querySelector('#port').addEventListener("click", function(){
    window.open('https://alicelandlordstore.onrender.com/');
});
document.querySelector('.companyport').addEventListener("click", function(){
    window.open('https://solarcompany-kv57.onrender.com/');
});
document.querySelector('.churchport').addEventListener("click", function(){
    window.open('https://winnersmando.onrender.com/');
});

// toggle off 
// .nav-link
document.querySelector('.fa-toggle-off').addEventListener("click", function(){
        document.querySelector('.fa-toggle-off').classList.add('hidden');
        document.querySelector('.fa-toggle-on').classList.remove('hidden');
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('nav').classList.remove('bg-light');
        document.querySelector('nav').classList.add('bg-dark');
        document.querySelector('nav').classList.add('navbar-dark');
        document.querySelector('nav').classList.remove('navbar-light');
        changeImage();
        var body = document.querySelector('body');
        var Dark = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', Dark);
});

document.querySelector('.fa-toggle-on').addEventListener("click", function(){

    document.querySelector('.fa-toggle-off').classList.remove('hidden');
    document.querySelector('.fa-toggle-on').classList.add('hidden');
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('nav').classList.add('bg-light');
    document.querySelector('nav').classList.remove('bg-dark');
    document.querySelector('nav').classList.remove('navbar-dark');
    document.querySelector('nav').classList.add('navbar-light');
    revertImage();
    // using nav bar to detect the user preference
    localStorage.removeItem('darkMode');

});


document.addEventListener('DOMContentLoaded', function() {
    // Check if dark mode preference is stored
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    var body = document.body;

    // Apply dark mode if preference exists
    if (isDarkMode) {
        body.classList.add('dark-mode');
        document.querySelector('nav').classList.remove('bg-light');
        document.querySelector('nav').classList.add('bg-dark');
        document.querySelector('nav').classList.add('navbar-dark');
        document.querySelector('nav').classList.remove('navbar-light');
        changeImage();
    }else{
        document.querySelector('.fa-toggle-off').classList.remove('hidden');
        document.querySelector('.fa-toggle-on').classList.add('hidden');
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('nav').classList.add('bg-light');
        document.querySelector('nav').classList.remove('bg-dark');
        document.querySelector('nav').classList.remove('navbar-dark');
        document.querySelector('nav').classList.add('navbar-light');
        revertImage();
    }

    // Add event listener to toggle button
    // var toggleButton = document.getElementById('dark-mode-toggle');
    // toggleButton.addEventListener('click', toggleDarkMode);
});



function changeImage(){
    document.querySelector('.isaac_img').src = '../static/image/PREACHER  NAME (1).png';
}
function revertImage(){
    document.querySelector('.isaac_img').src = '../static/image/PREACHER__NAME-removebg-preview.png';
}



var navbarbutton = document.querySelector('.navbar-toggler-icon')

navbarbutton.addEventListener('click', function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
    console.log('Im working')


   
});