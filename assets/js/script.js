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

$(document).ready(function () {
    $(".promotions-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



//  BACK TO TOP BUTTON
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


$(document).ready(function () {
    $(".news button.slick-prev").html("<i class= \"bi bi-arrow-left\"></i>");
    $(".news button.slick-next").html("<i class= \"bi bi-arrow-right\"></i>")
});