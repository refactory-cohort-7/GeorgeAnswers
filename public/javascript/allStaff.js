const serialNumber = () => {
  // Select a tbody tag with returns a Nodelist.
  let serialNum = document.querySelectorAll('tbody');

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
