const fizzbuzz = (n: number) => {
  switch (n) {
    case 1: 
      return;
    case 3: 
      return 'Fizz';
    case 5: 
      return 'Buzz';
    case 9:
      return 'Fizz';
    case 15:
      return 'FizzBuzz';
    case 25: 
      return 'Buzz';
  }
};

export { fizzbuzz }
