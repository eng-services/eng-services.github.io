var map;
var djtile = { lat: 37.507615, lng: -122.336198 };
//var centerMap = {lat: 37.5074412, lng: -122.1897797};

function fromLatLngToPoint(latLng, map) {
  var topRight = map
    .getProjection()
    .fromLatLngToPoint(map.getBounds().getNorthEast());
  var bottomLeft = map
    .getProjection()
    .fromLatLngToPoint(map.getBounds().getSouthWest());
  var scale = Math.pow(2, map.getZoom());
  var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
  return new google.maps.Point(
    (worldPoint.x - bottomLeft.x) * scale,
    (worldPoint.y - topRight.y) * scale
  );
}
var win_w = $(window).width();
var options;
if (win_w <= 1024) {
  options = {
    zoom: 12,
    center: { lat: 37.523328, lng: -122.30706 },
    panControl: false,
    //zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    draggable: false,
    scrollwheel: false,
    styles: [
      {
        featureType: "all",
        stylers: [{ hue: "#7bbaf1" }, { saturation: -20 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ lightness: 100 }, { visibility: "simplified" }],
      },
      {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
} else {
  options = {
    zoom: 12,
    center: { lat: 37.523328, lng: -122.30706 },
    panControl: false,
    //zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
    styles: [
      {
        featureType: "all",
        stylers: [{ hue: "#7bbaf1" }, { saturation: -20 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ lightness: 100 }, { visibility: "simplified" }],
      },
      {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
}
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), options);
  var latlng = new google.maps.LatLng(37.507615, -122.336198);
  var marker = new google.maps.Marker({
    position: djtile,
    map: map,
    icon: "images/icon-map-2.png",
    title: "D&J Tile Company, Inc. 1045 Terminal Way San Carlos, CA 94070",
  });
  function calc_point() {
    $(".info_map").css({
      top: fromLatLngToPoint(latlng, map).y,
      left: fromLatLngToPoint(latlng, map).x,
      display: "block",
    });
  }
  map.addListener("drag", function () {
    calc_point();
  });
  map.addListener("center_changed", function () {
    calc_point();
  });
  map.addListener("zoom_changed", function () {
    calc_point();
  });
  google.maps.event.addDomListener(window, "load", function () {
    calc_point();
  });
}
$.fn.resbtn = function () {
  this.each(function () {
    var elem = $(this),
      target = $(elem.attr("href"));
    elem.click(function (e) {
      e.stopPropagation();
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        target.removeClass("open");
      } else {
        $("body").click();
        $(this).addClass("open");
        target.addClass("open");
      }

      return false;
    });
    target.click(function (e) {
      e.stopPropagation();
    });
    $("body").click(function () {
      elem.removeClass("open");
      target.removeClass("open");
    });
  });
};
$(document).ready(function () {
  $(".hover_img").hover(
    function () {
      var idArea = $(this).attr("data-id");
      $("#img_hover").attr("src", "images/home_img/hover_" + idArea + ".png");
    },
    function () {
      $("#img_hover").attr("src", "images/portfolio_img.png");
    }
  );
  $(".button_menu").resbtn();
  $(".scrolltop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  $(window).bind("scroll", function () {
    var totop = $(window).scrollTop();
    if (totop > 200) {
      $(".scrolltop").addClass("show");
    } else {
      $(".scrolltop").removeClass("show");
    }
    if (totop > 0) {
      $(".header").addClass("green-bg");
    } else {
      $(".header").removeClass("green-bg");
    }
  });
});
//fix height bang nhau
equalheight = function (container) {
  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function () {
    $el = $(this);
    $($el).height("auto");
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest =
        currentTallest < $el.height() ? $el.height() : currentTallest;
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

$(window).on("load", function () {
  equalheight(".equalheight");
});

$(window).resize(function () {
  equalheight(".equalheight");
});
