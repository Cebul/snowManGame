var dragndrop = (function() {

  var myX = '';
  var myY = '';
  var whichArt = '';
  var snowman = '';

  function resetZ() {
    var elements = document.querySelectorAll('img');
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    }
  }
  function moveStart(e) {
    snowman = document.querySelector('#snowman');
    wichtArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    mtY = e.offsetY === undefined ? e.layerY : e.offsetY;
    resetZ();
    if(!snowman) wichtArt.style.zIndex = 10;
  }
  function moveDragOver (e) {
    e.preventDefault();
  }
  function moveDrop(e) {
    e.preventDefault();
    wichtArt.style.left = e.pageX - myX + 'px';
    wichtArt.style.top = e.pageY - myY + 'px';
  }
  function touchStart(e) {
    e.preventDefault();
    var whichArt = e.target;
    var touch = e.touches[0];
    var moveOffsetX = whichArt.offsetLeft - touch.pageX;
    var moveOffsetY = whichArt.offsetTop - touch.pageY;
    resetZ();
    whichArt.style.zIndex = 10;

    whichArt.addEventListener('touchmove', function() {
      var positionX = touch.pageX + moveOffsetX;
      var positionY = touch.pageY + moveOffsetY;
      whichArt.style.left = positionX + 'px';
      whichArt.style.top = positionY + 'px';
    }, false);
} 

  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  document.querySelector('body').addEventListener('drop', moveDrop, false);
  document.querySelector('body').addEventListener('touchstart', touchStart, false);


})();