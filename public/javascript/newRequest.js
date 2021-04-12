const registerRequest = document.getElementById('register');

const timeOfOrder = () => {
  const orderPeriod = new Date();
  const date = orderPeriod.getDate();
  const month = orderPeriod.getMonth();
  const year = orderPeriod.getFullYear();

  const hours = orderPeriod.getHours();
  const minutes = orderPeriod.getMinutes();
  const seconds = orderPeriod.getSeconds();

  document.getElementById('date').value = `${date}-${month}-${year}`;
  document.getElementById('time').value = `${hours}:${minutes}:${seconds}`;
};

timeOfOrder();

// registerRequest.addEventListener('click', timeOfOrder);
