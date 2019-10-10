// ONLOAD
window.onload = function () {
    loadingRemove();
    mainMinheight();
    stickySidebar();
    gameCardManagerHeightCalc();
}


// ONSCROLL
window.onscroll = function () {
    navbarScroll();
    stickySidebar();
}

// ONRESIZE
window.onresize = function () {
    gameCardManagerHeightCalc();
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

// SIDEBAR STICKY
function stickySidebar() {
    var navbarHeight = $('#navbar').outerHeight();

    $('.sidebar.is-sticky').css('top', `calc(${navbarHeight}px + 1rem)`)
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

// GAME POST VOTE

$('.post-interaction-item-vote').click(function () {
    var currentCount = parseInt($(this).children('.counter').html(), 10);
    if ($(this).hasClass('is-active')) {
        $(this).children('.counter').html(Math.max(0, currentCount - 1).toString());
        $(this).removeClass('is-active');
    } else {
        $(this).parent().children('.post-interaction-item-vote').removeClass('is-active');
        $(this).children('.counter').html(Math.max(0, currentCount + 1).toString());
        $(this).toggleClass('is-active');
    }
});

// GAME CARD MANAGER

//// GAME CARD MANAGER HEIGHT CALC
function gameCardManagerHeightCalc() {
    var gameCardManagerHeight = $('.game-card-manager-tab.is-active .game-card-preview').height();
    $('.game-card-manager-tab.is-active .game-card-manager-left').css('max-height', `${gameCardManagerHeight}px`);
};

//// GAME CARD MANAGER TABS
$('.game-card-manager>.tabs>ul>li').click(function () {
    var gameCardManagerTabIndex = $(this).index();
    $('.game-card-manager>.tabs>ul>li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.game-card-manager .game-card-manager-tab').removeClass('is-active');
    $('.game-card-manager .game-card-manager-tab').eq(gameCardManagerTabIndex).addClass('is-active');
    gameCardManagerHeightCalc();
});

//// GAME CARD LIST

$('.game-card-list .game-card').click(function () {
    if ($(this).hasClass('is-selected')) {
        $(this).removeClass('is-selected');
        $('.game-card-preview-interactions').removeClass('is-active');
    } else {
        $(this).parent().children('.game-card').removeClass('is-selected');
        $(this).addClass('is-selected');
        $('.game-card-preview-interactions').addClass('is-active');
    }
    gameCardManagerHeightCalc();
});