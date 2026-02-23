$(document).ready(function(){

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 100) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    function updateMenu() {
        if ($(window).width() <= 800) {
            $('#nav').addClass('sideMenu');
            $('#nav.sideMenu ul li a').addClass('btnMenu');
        } else {
            $('#nav').removeClass('sideMenu');
            $('#nav ul li a').removeClass('btnMenu');
            $('.drawer-overlay').removeClass('show');
        }
    }

    // Run on page load
    updateMenu();

    // Run on window resize
    $(window).on('resize', updateMenu);

    $('#menuBurger').on('click', function () {
        $("#header").css("overflow", "inherit");
        $('.sideMenu').addClass('show');
        $('.drawer-overlay').addClass('show');
    });
    $('#menuClose').on('click', function () {
        $("#header").css("overflow", "hidden");
        $('.sideMenu').removeClass('show');
        $('.drawer-overlay').removeClass('show');
    });

    $('.bottom_con').on('mouseenter', '.item', function () {
        const $hideCon = $(this).find('.hide_con');

        if ($hideCon.is(':hidden')) {
            $hideCon.stop(true, true).fadeIn(500);
        }
    });

    $('.bottom_con').on('mouseleave', '.item', function () {
        const $hideCon = $(this).find('.hide_con');

        if ($hideCon.is(':visible')) {
            $hideCon.stop(true, true).fadeOut(300);
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 16,
        responsiveClass:true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<button class="glass-play-btn"><span class="play-icon">&#9664;</span></button>',
                    '<button class="glass-play-btn"><span class="play-icon">&#9654;</span></button>'
                ],
        dots: true,
        responsive:{
            0:{
                items:1,
                center: true, 
            },
            450:{
                items:1.5,
                center: true, 
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    const sections = document.querySelectorAll(".secpad");
    const menuLinks = document.querySelectorAll("#nav ul li a");

    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const id = entry.target.id;

            menuLinks.forEach(link => {
                link.classList.toggle(
                "is-active",
                link.getAttribute("href") === `#${id}`
                );
            });
            }
        });
        },
        {
        threshold: 0.7
        }
    );

    sections.forEach(section => observer.observe(section));

    observer.observe(target);

});