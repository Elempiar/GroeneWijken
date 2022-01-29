// OVERLAY

const TEXT_TITEL = "Groene Wijken";

$(document).ready(function () {
    $("#intro-video").hide();
    $("#intro-text").hide();
    $("#btnContinue").hide();
    $("<h1>" + TEXT_TITEL + "</h1>").hide().prependTo("#intro").fadeIn(2000).fadeOut(3000);
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

    function removeVideo() {
        setTimeout(function () {
            $("#intro-video").remove();
        }, 1000);
    }

    function removeIntro() {
        setTimeout(function () {
            $("#intro").remove();
        }, 1000);
    }

    $(".btn").click(function () {

        const btnID = $(this).attr("id");

        if (btnID == "btnContinue") {
            $(this).prop("id", "btnOverlay").html("verken de wijk");
            $("#intro-video").fadeOut(1000);
            showText();
            removeVideo();
        } else if (btnID == "btnOverlay") {
            $("#intro").css("top", "-100vh");
            $("#loader").css("z-index", "8");
            removeIntro();
        }
    });
});


// LOADING SCREEN

$.ajax({
    url: '/template-parts/map.html',
    beforeSend: function () {
        $('body').prepend('<div id="loader"><h4>loading</h4></div>');
        $('#loader').append('<div id="load1" class="loading foop">  </div> <div id="load2" class="loading foop">  </div> <div id="load3" class="loading foop">  </div>');
        setTimeout(function () {
            $('.loading').removeClass('foop');
        }, 2500);
    },
    success: function (data) {
        $(data).find('#bg').on('load', function () {
            $('body').prepend(data);
            $('.loading').removeClass('Loop');
            $(".loading").addClass('poof');
            $('#loader').addClass('loaderOut');
            setTimeout(function () {
                $('#loader').remove();
            }, 2400);
        });
    },
});