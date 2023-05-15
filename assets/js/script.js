///////////////////// Navbar Scroll Effect /////////////////////
$(window).scroll(function () {
    if ($(window).scrollTop() >= 90) {
      $('.navbar').addClass('fixed-header');
    } else {
      $('.navbar').removeClass('fixed-header');
    }
});
// $(document).ready(function() {
//     var previousScroll = 0; 
//     $(window).scroll(function() { 
//       var currentScroll = $(this).scrollTop(); 
//       // If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
//       if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {  
//         // If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
//         if (currentScroll > previousScroll) {
//           window.setTimeout(hideNav, 300);
//         // Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
//         } else {
//           window.setTimeout(showNav, 300);
//         } 
//         // Set the previous scroll value equal to the current scroll.
//         previousScroll = currentScroll;
//       }  
//     });  
//     function hideNav() {
//       $(".navbar").removeClass("is-visible").addClass("is-hidden");
//     }
//     function showNav() {
//       $(".navbar").removeClass("is-hidden").addClass("is-visible");
//     }
//   });

///////////////////// Coumter Section/////////////////////
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-count");
        const c = +counter.innerText;

        const increment = target / 10000;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});



///////////////////// Banner section /////////////////////
$('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false
});
///////////////////// News section /////////////////////
$(document).ready(function () {
    $(".promotions-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



/////////////////////  BACK TO TOP BUTTON/////////////////////
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


///////////////////// Burger Menu /////////////////////
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  $("body").toggleClass("overflow");
});

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()