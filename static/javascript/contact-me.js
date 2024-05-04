document.querySelector('#submit').addEventListener('click', function(){
    submissionalert()
    
  
})

function submissionalert(){
    var InputValue = document.querySelector('.stextm').value;
    if (InputValue == ""){
        alert('Please fill in your message')
        return false;
    }else{
        alert('Your Message has been sent successfully')
    }return true;

}

    // we need to get the localsession here
var screen = localStorage.getItem('darkMode')
if (screen){
    var body = document.querySelector('body');
    body.classList.add('dark-mode');
    var nav = document.querySelector('nav');
    nav.classList.remove('navbar-light');
    nav.classList.add('navbar-dark');
    nav.classList.remove('bg-light');
    nav.classList.add('bg-dark');

    var input = document.querySelectorAll('input');
    input.forEach(function(main) {
        main.classList.add('dark-contact');
    })
    
    var text = document.querySelector('.stextm');
    text.classList.add('dark-contact');

}