/*
found this function here
http://stackoverflow.com/a/26831113
*/

function inViewport($el) {
    var H = $(window).height(),
        r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));
}

var viewPort = $('#CoverImageViewport');
var overlay = $('.overlay');

function styleSvg() {
  var window_offset = inViewport(viewPort);
  overlay.height(window_offset);
  requestAnimationFrame(styleSvg);
}

$(window).on("scroll resize", styleSvg());
