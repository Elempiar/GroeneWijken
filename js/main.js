// SCROLL NAV

const FRAME_DURATION = 1000 / 60; // 60fps frame duration
const getTime = typeof performance === "function" ? performance.now : Date.now;

const documentCenter = ($(document).width() - $(window).width()) / 2;

const SCROLL_SPEED = 10;

$(document).ready(function () {
    scrollTo(documentCenter, 0);
    let isScrolling = false;
    let scrollDirection = null;

    let lastDelta = getTime();

    function scrollDelta() {
        const now = getTime();
        const delta = (now - lastDelta) / FRAME_DURATION;

        const toScroll =
            (scrollDirection == "right" ? 1 : -1) * (SCROLL_SPEED * delta);

        scrollTo(window.scrollX + toScroll, 0);
        lastDelta = now;
        if (isScrolling) {
            requestAnimationFrame(scrollDelta);
        }
    }

    $("#scrollRight").mouseover(function () {
        scrollDirection = "right";
        isScrolling = true;
        lastDelta = getTime();

        scrollDelta();
    });
    $("#scrollLeft").mouseover(function () {
        scrollDirection = "left";
        isScrolling = true;
        lastDelta = getTime();

        scrollDelta();
    });
    $("#scrollRight").mouseout(function () {
        isScrolling = false;
    });
    $("#scrollLeft").mouseout(function () {
        isScrolling = false;
    });
});

$("#btnScroll").click(function () {
    scrollTo(documentCenter, 0);
});


// HOVER EFFECT

const TEXT_HOVER_1 = "HOVER c1";
const TEXT_HOVER_2 = "HOVER c2";
const TEXT_HOVER_3 = "HOVER c3";
const TEXT_HOVER_5 = "HOVER c5";
const TEXT_HOVER_6 = "HOVER c6";
const TEXT_HOVER_7 = "HOVER c7";

$(".hover").hover(function () {

    const hoverDiv = $(this).attr("id");

    $(this).css("filter", "grayscale(0)");

    if (hoverDiv == "c1") {
        $("<h1>" + TEXT_HOVER_1 + "</h1>").hide().prependTo(".container").fadeIn(500);
    } else if (hoverDiv == "c2") {
        $("<h1>" + TEXT_HOVER_2 + "</h1>").hide().prependTo(".container").fadeIn(500);
    } else if (hoverDiv == "c3") {
        $("<h1>" + TEXT_HOVER_3 + "</h1>").hide().prependTo(".container").fadeIn(500);
    } else if (hoverDiv == "c5") {
        $("<h1>" + TEXT_HOVER_5 + "</h1>").hide().prependTo(".container").fadeIn(500);
    } else if (hoverDiv == "c6") {
        $("<h1>" + TEXT_HOVER_6 + "</h1>").hide().prependTo(".container").fadeIn(500);
    } else if (hoverDiv == "c7") {
        $("<h1>" + TEXT_HOVER_7 + "</h1>").hide().prependTo(".container").fadeIn(500);
    }


}, function () {
    $("h1").fadeOut("500", function () {
        $(this).remove();
    });
});