function filter(classToDisplay) {
  var imagesToDisplay = document.getElementsByClassName(classToDisplay);
  var allImages = document.getElementsByClassName('image');
  for (i = 0; i < allImages.length; i++) {
    allImages[i].style.display = "none";
  }
  for (i = 0; i < imagesToDisplay.length; i++) {
    imagesToDisplay[i].style.display = "inline-block";
  }
};
function displayModal(classToDisplay) {
  var allModals = document.getElementsByClassName('modal');
  for (i = 0; i < allModals.length; i++) {
    if (allModals[i].className.includes(classToDisplay)) {
      allModals[i].style.display = "flex";
    } else {
      allModals[i].style.display = "none";
    }
  }
}
function close() {
  console.log('hi')
  var allModals = document.getElementsByClassName('modal');
  for (i = 0; i < allModals.length; i++) {
  allModals[i].style.display = "none";
  }
}
