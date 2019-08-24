// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("logo").onclick = function() {
  myFunction()
};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("logo").classList.toggle("none");

  document.getElementById("pacman").classList.toggle("show");

  setTimeout(function() {
    document.getElementById("pacman").classList.toggle("none");
  }, 8000);

}