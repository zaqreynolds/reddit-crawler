const countdown = (num) => {
  console.log(num);
  const newNumber = num - 1;
  if (newNumber > 0) {
    countdown(newNumber);
  }
};
countdown(10);
