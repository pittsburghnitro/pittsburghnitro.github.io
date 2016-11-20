function inViewport($el) {
    var height = document.body.offsetHeight,
        rect = $el[0].getBoundingClientRect(),
        top = rect.top,
        bottom = rect.bottom;

    return bottom < height ? bottom : height;
}

var viewPort = $('#CoverImageViewport');
var overlay = $('#Overlay');

function styleSvg() {
  var offset = inViewport(viewPort);
  overlay.height(offset);
  requestAnimationFrame(styleSvg);
}

styleSvg();
