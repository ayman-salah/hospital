$(document).ready(function(){

    $('.nav-icon ').click(function(){
    $(this).toggleClass('fa-times')
        $('.container__mynav').toggleClass('nav-toggle')
    })

    $(window).on('load scroll' , function(){
        $('.nav-icon').removeClass('fa-times');
        $('.container__mynav').removeClass('nav-toggle');

        if($(window).scrollTop() > 10){
            $('.header').addClass('header-active');
        }
        else{
            $('.header').removeClass('header-active');
        }
    })

// init plugin to make popup 
    $('.facility').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });


    // init plugin to make animation while scroll 
    AOS.init({
        duration:400,
        delay:400
    });
    // code of counter up 


})

// start code of pure javascript 
// end jquery code 
//  start pure javascript code 
const timer = document.querySelectorAll('.timer');
const counter_div = document.querySelector('#counter');
var state_of_counter_method = false;


window.addEventListener('DOMContentLoaded',function(){
    console.log(window.scrollY)
 })

window.onscroll = function(){
    
    if(window.scrollY >= counter_div.offsetTop - 200){
        if(!state_of_counter_method){
            count_up(timer);
            state_of_counter_method = true;
        }
       
    }

}


function count_up (el){
  el.forEach(element => {
    var goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if(element.textContent == goal){
            clearInterval(count);
        }
    },1.6);

    });

}
