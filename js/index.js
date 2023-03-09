$(document).ready(function(){

    $('.first-carousel-owl .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.two-carousel .owl-carousel ').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  $('.search').click(function(){
    $('#search-input').css('display','block');
  })

})

window.addEventListener('scroll', function () {
    var navbar = document.querySelector(' .main-navigation');
    if (window.pageYOffset > 100) {
        navbar.classList.add('sticky');
       
    }
    else {
        navbar.classList.remove('sticky');
        navbar.classList.add('sticky-out');
    }
});
window.addEventListener('scroll', function () {
    var rock = document.querySelector(' .main-navigation');
    if (window.pageYOffset > 100) {
        var rock = document.querySelector(' .main-navigation').
        style.height='8rem' ;
        var rock = document.querySelector(' .main-navigation').
        style.backgroundColor='rgba(54, 19, 84, 0.85)' ;
        var rock = document.querySelector(' .main-navigation').
        style.zIndex='10000';
       
    }
    else {
        var rock = document.querySelector(' .main-navigation').
        style.height='14.11rem' ;
        var rock = document.querySelector(' .main-navigation').
        style.backgroundColor='rgba(54, 19, 84, 0.6)' ;
        var rock = document.querySelector(' .main-navigation').
        style.zIndex='10000';
       
    }
});

window.addEventListener('scroll', function () {
    var top = document.querySelector(' .primery-menu');
    if (window.pageYOffset > 100) {
         var top = document.querySelector('.primery-menu').
        style.paddingBottom='0rem';
         var top = document.querySelector('.primery-menu').
        style.position='relative';
         var top = document.querySelector('.primery-menu').
        style.top='-32';
        var top = document.querySelector('.primery-menu').
        style.paddingTop='0rem';
      
    }
    else {
         var top = document.querySelector('.primery-menu').
        style.paddingTop='3rem';
        var top = document.querySelector('.primery-menu').
        style.top='0';
       
    }
});
window.addEventListener('scroll', function () {
    var center = document.querySelector(' .main-center-content');
    if (window.pageYOffset > 100) {
         var center = document.querySelector('.main-center-content').
        style.marginTop='18rem';
      
    }
    else {
         var center = document.querySelector('.main-center-content').
        style.marginTop='0rem';
       
    }
});
window.addEventListener('scroll', function () {
    var abaout = document.querySelector(' .about-main-heading');
    if (window.pageYOffset > 100) {
         var about = document.querySelector(' .about-main-heading').
        style.paddingTop='25rem';
      
    }
    else {
         var about = document.querySelector(' .about-main-heading').
        style.paddingTop='10rem';
       
    }
});
window.addEventListener('scroll', function () {
    var mobileNav = document.querySelector(' .mobile-nav');
    if (window.pageYOffset > 100) {
         var mobileNav = document.querySelector('.mobile-nav').
        style.marginTop='-10px';
      
    }
    else {
        var mobileNav = document.querySelector('.mobile-nav').
        style.marginTop='2.3rem';
       
    }
});

window.addEventListener('scroll', function () {
    var primery = document.querySelector(' .primery-menu');
    if (window.pageYOffset > 100) {
         var primery = document.querySelector('.primery-menu').
        style.marginTop='0rem'; 
    }
    else {
         var center = document.querySelector('.main-center-content').
        style.marginTop='0rem';
       
    }
});
window.addEventListener('scroll', function () {
    var logo = document.querySelector(' .logo');
    if (window.pageYOffset > 100) {
         var logo = document.querySelector('.logo').
        style.position='relative';
         var logo = document.querySelector('.logo').
        style.bottom='2.6rem';
    }
    else {
        var logo = document.querySelector('.logo').
        style.bottom='-1rem';
       
    }
});
window.addEventListener('scroll', function () {
    var srch = document.querySelector(' .search');
    if (window.pageYOffset > 100) {
         var srch = document.querySelector('.search').
        style.position='relative';
         var srch = document.querySelector('.search').
        style.bottom='2.4rem';

      
    }
    else {
        var srch = document.querySelector('.search').
        style.bottom='0rem';
       
    }
});
window.addEventListener('scroll', function () {
    var navTop = document.querySelector(' .marginTop');
    if (window.pageYOffset > 100) {
         var navTop = document.querySelector('.marginTop').
        style.marginTop='2.5rem';
         
    }
    else {
       var navTop = document.querySelector('.marginTop').
        style.marginTop='1.5rem';
       
    }
});
window.addEventListener('scroll', function () {
    var mobile3 = document.querySelector(' #mobile-3');
    if (window.pageYOffset > 100) {
         var mobile3 = document.querySelector('#mobile-3').
        style.marginTop='-1rem';
         var mobile3 = document.querySelector('#mobile-3').
        style.top='3px';
         
    }
    else {
         var mobile3 = document.querySelector('#mobile-3').
        style.marginTop='3rem';
       
    }
});

$(document).ready(function(){
    $('.mobile-nav').click(function(){
        $('.primery-menu').fadeIn(1000);
    })
    $('.close').click(function(){
        $('.primery-menu').fadeOut(2000);
    })
})
$(document).ready(function(){
 $('.click-load').click(function(){
    $('.hide').slideToggle(1000);
 })
});



