AOS.init()

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

var i = 0;
var txt = 'FrontEnd Web Developer';
var speed = 150;


$('document').ready(function(){
    if (i < txt.length){
        document.getElementById("typed").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}