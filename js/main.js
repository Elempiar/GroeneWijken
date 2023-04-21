// --------------------------------------------
// OVERLAY
// --------------------------------------------

$(document).ready(function () {
  // ----- Defaults -----
  btnIntro();
  topicSelection();

  // ----- Opening -----
  startingFade();
});

// --------------------------------------------
// LOADER
// --------------------------------------------

// $.ajax({
//   url: "/template-parts/map.html",
//   beforeSend: function () {
//     $("body").prepend('<div id="loader"><h4>loading</h4></div>');
//     $("#loader").append(
//       '<div id="load1" class="loading foop">  </div> <div id="load2" class="loading foop">  </div> <div id="load3" class="loading foop">  </div>'
//     );
//     setTimeout(function () {
//       $(".loading").removeClass("foop");
//     }, 2500);
//   },
//   success: function (data) {
//     $(data)
//       .find("#bg")
//       .on("load", function () {
//         $("body").prepend(data);
//         $(".loading").removeClass("Loop");
//         $(".loading").addClass("poof");
//         $("#loader").addClass("loaderOut");
//         setTimeout(function () {
//           $("#loader").remove();
//         }, 2400);
//       });
//   },
// });

// --------------------------------------------
// FUNCTIONS
// --------------------------------------------

// ----- OPENING ------
const TEXT_TITEL = "Groene Wijken";

function startingFade() {
  $(
    '<h1 id="title" class="start d-block w-100 position-absolute">' +
      TEXT_TITEL +
      "</h1>"
  )
    .hide()
    .prependTo("#outer-wrapper")
    .fadeIn(2000);
  setTimeout(function () {
    $("#btnIntro").removeClass("hidden");
  }, 2000);
}

// ----- START BUTTON -----
function btnIntro() {
  $("#btnIntro").on("click", function () {
    const btn = $(this);
    var btnStep = $(this).data("step");

    if (btnStep == "intro-1") {
      $.ajax({
        url: "/template-parts/intro-1.html",
        success: function (data) {
          $(data).hide().prependTo("#inner-wrapper").fadeIn(1000);
          btn.data("step", "intro-2");
          btn.text("Volgende");
          $("#title").addClass("position-2").removeClass("start");
          btn.addClass("position-2").removeClass("start");
          $('<span id="pages" class="d-block">1/3</span>')
            .appendTo("#outer-wrapper")
            .hide()
            .fadeIn(1000);
        },
      });
    }

    if (btnStep == "intro-2") {
      $.ajax({
        url: "/template-parts/intro-2.html",
        success: function (data) {
          $("#intro-row").fadeOut(1000).remove();
          $(data).hide().prependTo("#inner-wrapper").fadeIn(1000);
          btn.data("step", "intro-3");
          $("#pages").text("2/3");
        },
      });
    }

    if (btnStep == "intro-3") {
      $.ajax({
        url: "/template-parts/intro-3.html",
        success: function (data) {
          $("#intro-row").fadeOut(1000).remove();
          $(data).hide().prependTo("#inner-wrapper").fadeIn(1000);
          btn.data("step", "topic-overview");
          btn.text("Verken de topics");
          $("#pages").text("3/3");
        },
      });
    }

    if (btnStep == "topic-overview") {
      $.ajax({
        url: "/template-parts/topic-overview.html",
        success: function (data) {
          $("#intro-row").fadeOut(1000).remove();
          $(data).hide().prependTo("#inner-wrapper").fadeIn(1000);
          $("#outer-wrapper").addClass("h-75").removeClass("h-50");
          btn.addClass("hidden");
          $("#outer-wrapper")
            .addClass("justify-content-center")
            .removeClass("justify-content-between");
          $("#pages").fadeOut(1000).remove();
          topicSelection();
          topicIntro();
        },
      });
    }
  });
}

// ----- TOPIC INTRO -----

function topicIntro() {
  $("#btn-weerbaarheid").on("click", function () {
    $("#intro-weerbaarheid").fadeOut(1000);
    setTimeout(function () {
      $("#topics-weerbaarheid").hide().fadeIn(1000);
      $("#intro-weerbaarheid").remove();
    }, 1100);
  });

  $("#btn-duurzaamheid").on("click", function () {
    $("#intro-duurzaamheid").fadeOut(1000);
    setTimeout(function () {
      $("#topics-duurzaamheid").hide().fadeIn(1000);
      $("#intro-duurzaamheid").remove();
    }, 1100);
  });
}

// ----- TOPIC SELECTION -----

function topicSelection() {
  $(".topic").on("click", function () {
    topic = $(this).data("topic");

    if (topic == "agro") {
      $.ajax({
        url: "/template-parts/article-agro.html",
        beforeSend: function () {},
        success: function (data) {
          $("body").prepend(data).find(".article").hide().fadeIn(300);
        },
      });
    }

    if (topic == "flexibiliteit") {
      $.ajax({
        url: "/template-parts/article-flexibiliteit.html",
        beforeSend: function () {},
        success: function (data) {
          $("body").prepend(data).find(".article").hide().fadeIn(300);
        },
      });
    }

    if (topic == "autos") {
      $.ajax({
        url: "/template-parts/article-autos.html",
        beforeSend: function () {},
        success: function (data) {
          $("body").prepend(data).find(".article").hide().fadeIn(300);
        },
      });
    }

    if (topic == "modulair") {
      $.ajax({
        url: "/template-parts/article-modulair.html",
        beforeSend: function () {},
        success: function (data) {
          $("body").prepend(data).find(".article").hide().fadeIn(300);
        },
      });
    }

    if (topic == "water") {
      $.ajax({
        url: "/template-parts/article-water.html",
        beforeSend: function () {},
        success: function (data) {
          $("body").prepend(data).find(".article").hide().fadeIn(300);
        },
      });
    }

    if (topic == "geothermie") {
      $.ajax({
        url: "/template-parts/article-geothermie.html",
        beforeSend: function () {},
        success: function (data) {
          $("body").prepend(data).find(".article").hide().fadeIn(300);
        },
      });
    }
  });
}
