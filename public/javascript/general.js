// This goes back to the previous page.
const backBtn = document.getElementById('goBack');
if (!backBtn === null) {
  backBtn.addEventListener('click', e => {
    window.history.back();
  });
}

// Stick Navigation header
// When the user scrolls the page, execute stickyHeader().
window.onscroll = function () {
  stickyHeader();
};

// Get the header
const header = document.getElementById('header');

// Get the offset position of the header
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
const stickyHeader = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
    document.body.style.paddingTop = '2.7rem';
  } else {
    header.classList.remove('sticky');
    document.body.style.paddingTop = 0;
  }
};
