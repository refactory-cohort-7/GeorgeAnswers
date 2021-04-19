// This goes back to the previous page.
const backBtn = document.getElementById('goBack');
if (backBtn) {
  backBtn.addEventListener('click', e => {
    window.history.back();
  });
}

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

// Stick Navigation header
// When the user scrolls the page, execute stickyHeader().
window.onscroll = function () {
  stickyHeader();
};

// Select a tbody tag with returns a Nodelist.
let serialNum = document.getElementsByClassName('serialAnchor');

// Check if Element with tag tbody is present.

if (serialNum.length > 0) {
  const serialNumber = () => {
    // Selects the table data cell of td with class 'serialNum'.
    const tData = document.getElementsByClassName('serialNum');

    /* Selects first item of the nodelist; then selects the nodelist property called 'rows' whose value is an HTMLCollection containing table rows of interest. */
    const singleRows = serialNum[0].rows;

    // Loop through singleRows
    for (let i = 0; i < singleRows.length; i += 1) {
      // Feeds Serial Number of item in the table.
      tData[i].textContent = i + 1;
    }
  };

  serialNumber();
}

// Creates timestamps for requests and subscriptions
const registerRequest = document.getElementById('register');
if (registerRequest) {
  const timeOfOrder = () => {
    const orderPeriod = new Date();
    const date = orderPeriod.getDate();
    const month = orderPeriod.getMonth();
    const year = orderPeriod.getFullYear();

    const hours = orderPeriod.getHours();
    const minutes = orderPeriod.getMinutes();

    document.getElementById('date').value = `${date}-${month}-${year}`;
    document.getElementById('time').value = `${hours}:${minutes}`;
  };

  registerRequest.addEventListener('click', timeOfOrder);
}
