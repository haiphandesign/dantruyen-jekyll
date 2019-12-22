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

// NAVBAR MENU
function navbarMenuOpen() {
    document.querySelector('.navbar-toggle-menu').classList.add('is-active');
}

function navbarMenuClose() {
    document.querySelector('.navbar-toggle-menu').classList.remove('is-active');
}

function navbarAccountOpen() {
    document.querySelector('.navbar-toggle-account').classList.add('is-active');
}

function navbarAccountClose() {
    document.querySelector('.navbar-toggle-account').classList.remove('is-active');
}

function navbarNotificationsOpen() {
    document.querySelector('.navbar-toggle-notifications').classList.toggle('is-active');
    document.querySelector('.navbar-toggle-notifications').classList.remove('has-notifications');
}

function navbarNotificationsClose() {
    document.querySelector('.navbar-toggle-notifications').classList.remove('is-active');
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
$('#game-join-button').click(function () {
    $(this).addClass('is-loading');
    setTimeout(function () {
        $(this).toggleClass('is-active');
        $(this).toggleClass('is-info');
        $(this).removeClass('is-loading');
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

// USER PROFILE
$('#user-profile-navigation>ul>li').click(function () {
    var userProfileTabIndex = $(this).index();
    $('#user-profile-navigation>ul>li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.user-profile-body .user-profile-tab').removeClass('is-active');
    $('.user-profile-body .user-profile-tab').eq(userProfileTabIndex).addClass('is-active');
});

$(document).ready(function () {
    $(".browse-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
    });
});

$(document).ready(function () {
    $(".browse-editors-pick-carousel").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        dotsEach: true,
        margin: 10,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            768: {
                items: 2
            }
        }
    });
});

// SEARCH

$('#gamesearch-filter-button').click(function () {
    if ($(this).hasClass('is-info')) {
        $(this).removeClass('is-info');
        $('.gamesearch-filters').removeClass('is-active');
    } else {
        $(this).addClass('is-info');
        $('.gamesearch-filters').addClass('is-active');
    }
});

$('#gamesearch-display-tabs ul li').click(function () {
    $(this).parent('ul').children('li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#gamesearch-table').attr('class', 'game-collection');

    if ($(this).index() == "0") {
        $('#gamesearch-table').addClass('is-large');
    } else if ($(this).index() == "1") {
        $('#gamesearch-table').addClass('is-medium');
    } else if ($(this).index() == "2") {
        $('#gamesearch-table').addClass('is-small');
    } else if ($(this).index() == "3") {
        $('#gamesearch-table').addClass('is-list');
    }
})