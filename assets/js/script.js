/*let currentSlide = $('.slider').slick('slickCurrentSlide') + 1;
let navPage = document.querySelector('.nav-page');
let SliderCount = document.querySelector('.nav-slider-count');
SliderCount.text = $(".slider").slick("getSlick").slideCount;
navPage.text = currentSlide;
console.log(currentSlide);

$('.single-item').on('afterChange', function(event, slick, currentSlide){
    console.log(currentSlide + 1);
 });
*/
let CurrentNumber = document.querySelector('.currentCount');
let TotalCount = document.querySelector('.totalCount');
let CurrentNumber2 = document.querySelector('.about-us-nav-currentCount');
let TotalCount2 = document.querySelector('.about-us-nav-totalCount');

$(document).ready(function(){

    $('.single-item').slick();
    var $pagingInfo = $('.paging-info');

    let MycurrentSlide = $('.single-item').slick('slickCurrentSlide') + 1;
    /**console.log('MyCurrentSlide = ', $(slick.slideCount);*/
    CurrentNumber.textContent = MycurrentSlide;
    TotalCount.textContent = $(".single-item").slick("getSlick").slideCount;

    $('.single-item').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
       CurrentNumber.textContent = i;
    });

    $('.about-us-slider').slick({
        nextArrow: $('#about-us-nav-arrow-next'),
        prevArrow: $('#about-us-nav-arrow-prev'), 
    });

    var $pagingInfo2 = $('.about-us-nav-paging-info');

    let MycurrentSlide2 = $('.about-us-slider').slick('slickCurrentSlide') + 1;
    /**console.log('MyCurrentSlide = ', $(slick.slideCount);*/
    CurrentNumber2.textContent = MycurrentSlide2;
    TotalCount2.textContent = $(".about-us-slider").slick("getSlick").slideCount;

    $('.about-us-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
       CurrentNumber2.textContent = i;
    });

    

});


let serviceSpoiler = document.querySelectorAll('.service-item');

serviceSpoiler.forEach(serviceSpoiler => {
    serviceSpoiler.addEventListener('click', () => {
        serviceSpoiler.classList.toggle('__active');
    });    
});

let burgerMenu = document.querySelector('.menu-burger');
let burgerMenuLines = document.querySelector('.menu-burger-lines');
let mobileMenu = document.querySelector('.mobile-menu');
let body = document.querySelector('body');
let mobileMenuLinks = document.querySelectorAll('.mobile-menu-link'); 
let mobileLinkCount = 0;

burgerMenu.addEventListener('click', () => {
    burgerMenuLines.classList.toggle('__open');
    mobileMenu.classList.toggle('__open');
    body.classList.toggle('__locked');
})

for (mobileLinkCount = 0; mobileLinkCount < mobileMenuLinks.length; ++mobileLinkCount) {
    mobileMenuLinks[mobileLinkCount].addEventListener('click', () => {
        burgerMenuLines.classList.remove('__open');
        mobileMenu.classList.remove('__open');
        body.classList.remove('__locked');
    })    
  }
  


$('a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
    return false;
  });
  