$(document).ready(function(){

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
    $('#nav').on('click', 'ul li a', function () {
        $("#header").css("overflow", "hidden");
        $('.sideMenu').removeClass('show');
        $('.drawer-overlay').removeClass('show');
    });

    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let viewportCenter = scrollTop + windowHeight / 2;

        let activeId = null;

        $(".secHighlight").each(function () {
            let $el = $(this);
            let top = $el.offset().top;
            let bottom = top + $el.outerHeight();

            if (viewportCenter >= top && viewportCenter <= bottom) {
                activeId = $el.attr("id");
                return false; // stop loop once found
            }
        });

        if (activeId) {
            $("#nav ul li a").removeClass("is-active");
            $('#nav ul li a[data-target="' + activeId + '"]').addClass("is-active");
        }
    });

    /* const hoverImg = new Image();
    hoverImg.src = "images/hero-pic.JPG";

     $(".aboutme_info").hover(
    function () {
        $(this).find('img').attr("src", hoverImg.src);
    },
    function () {
        $(this).find('img').attr('src', 'images/heroPic.png');
    }
    ); */

});