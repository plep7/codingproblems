function nthFibonacci(n) {
  return (n <= 2) ? 1 : nthFibonacci(n - 1) + nthFibonacci(n - 2);
}