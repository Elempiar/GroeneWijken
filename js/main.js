// Overlay //

const TEXT_TITEL = "Groene Wijken";

$(document).ready(function () {
    $("#intro-video").hide();
    $("#intro-text").hide();
    $("#btnContinue").hide();
    $("<h1>" + TEXT_TITEL + "</h1>").hide().prependTo("#overlay").fadeIn(2000).fadeOut(3000);
    showVideo();

    function showVideo() {
        setTimeout(function () {
            $("#intro-video").fadeIn(2000);
            $("#btnContinue").fadeIn(2000);
        }, 4500);
    }

    function showText() {
        setTimeout(function () {
            $("#intro-text").fadeIn(2000);
        }, 1000);
    }

    $(".btn").click(function () {

        const btnID = $(this).attr("id");

        if (btnID == "btnContinue") {
            $(this).prop("id", "btnOverlay").html("verken de wijk");
            $("#intro-video").fadeOut(1000);
            showText();
        } else if (btnID == "btnOverlay") {
            $("#overlay").css("top", "-100vh");
            scrollTo(documentCenter, 0);
        }
    });

});


// SCROLL NAV

const FRAME_DURATION = 1000 / 60;
const getTime = typeof performance === "function" ? performance.now : Date.now;

const documentCenter = ($(document).width() - $(window).width()) / 2;

const SCROLL_SPEED = 10;

$(document).ready(function () {

    let isScrolling = false;
    let scrollDirection = null;

    let lastDelta = getTime();

    function scrollDelta() {
        const now = getTime();
        const delta = (now - lastDelta) / FRAME_DURATION;

        const toScroll = (scrollDirection == "right" ? 1 : -1) * (SCROLL_SPEED * delta);

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
        $("#tut").fadeOut(500);

        scrollDelta();
    });
    $("#scrollLeft").mouseover(function () {
        scrollDirection = "left";
        isScrolling = true;
        lastDelta = getTime();
        $("#tut").fadeOut(500);

        scrollDelta();
    });
    $("#scrollRight").mouseout(function () {
        isScrolling = false;
    });
    $("#scrollLeft").mouseout(function () {
        isScrolling = false;
    });
});


// HOVER EFFECT

const TEXT_HOVER_1 = "Flexibiliteit in ontwikkelingen";
const TEXT_HOVER_2 = "Modulair Bouwen & CLT";
const TEXT_HOVER_3 = "Afname Auto Verkeer";
const TEXT_HOVER_5 = "Agro Forestry";
const TEXT_HOVER_6 = "Water Veiligheid & Zekerheid";
const TEXT_HOVER_7 = "Geothermie";

$(".hover").hover(function () {

    const hoverID = $(this).attr("id");

    $(this).css("filter", "grayscale(0)");

    if (hoverID == "c1") {
        $("<h2>" + TEXT_HOVER_1 + "</h2>").hide().prependTo(".map").fadeIn(500);
    } else if (hoverID == "c2") {
        $("<h2>" + TEXT_HOVER_2 + "</h2>").hide().prependTo(".map").fadeIn(500);
    } else if (hoverID == "c3") {
        $("<h2>" + TEXT_HOVER_3 + "</h2>").hide().prependTo(".map").fadeIn(500);
    } else if (hoverID == "c5") {
        $("<h2>" + TEXT_HOVER_5 + "</h2>").hide().prependTo(".map").fadeIn(500);
    } else if (hoverID == "c6") {
        $("<h2>" + TEXT_HOVER_6 + "</h2>").hide().prependTo(".map").fadeIn(500);
    } else if (hoverID == "c7") {
        $("<h2>" + TEXT_HOVER_7 + "</h2>").hide().prependTo(".map").fadeIn(500);
    }

}, function () {
    $("h2").fadeOut("500", function () {
        $(this).remove();
    });
});