// ONLOAD
window.onload = function () {
    loadingRemove();
    mainMinheight();
}


// ONSCROLL
window.onscroll = function () {
    navbarScroll();
}

// NAVBAR SCROLL
function navbarScroll() {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").classList.add('is-scroll');
    } else {
        document.getElementById("navbar").classList.remove('is-scroll');
    }
}

// #MAIN HEIGHT
function mainMinheight() {
    var footerHeight = $('#footer').outerHeight();
    var navbarHeight = $('#navbar').outerHeight();

    $('#main').css('min-height', `calc(100vh - ${footerHeight}px - ${navbarHeight}px)`)
}

// IS-LOADING REMOVE
function loadingRemove() {
    setTimeout(function () {
        $('.is-loading').removeClass('is-loading');
    }, 3000);
}

// GAME PAGE TABS
$('#game-navigation>ul>li').click(function () {
    var gameTabIndex = $(this).index();
    $('#game-navigation ul li').removeClass('is-active');
    $(this).addClass('is-active');
    $('#game-main .game-tab').removeClass('is-active');
    $('#game-main .game-tab').eq(gameTabIndex).addClass('is-active');
});

// GAME JOIN BUTTONS
document.getElementById('game-join-button').addEventListener('click', function (e) {
    e.target.classList.add('is-loading');
    setTimeout(function () {
        e.target.classList.remove('is-loading');
        e.target.classList.toggle('is-active');
        e.target.classList.toggle('is-info');
    }, 500);
});