var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Check position of scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);



var navbar = document.getElementById("navbarWrapper");
var logo = document.getElementById("logo");
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove sticky when you leave the scroll position
function addSticky() {
  if (window.pageYOffset >= sticky - 150) {
    navbar.classList.add("sticky");
    logo.classList.add("hidelogo");
  } else {
    navbar.classList.remove("sticky");
    logo.classList.remove("hidelogo");
  }
}
document.addEventListener("scroll", addSticky);