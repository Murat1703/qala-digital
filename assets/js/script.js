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
});

$('.about-us-slider').slick();

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

burgerMenu.addEventListener('click', () => {
    burgerMenuLines.classList.toggle('__open');
    mobileMenu.classList.toggle('__open');
    body.classList.toggle('__locked');
})