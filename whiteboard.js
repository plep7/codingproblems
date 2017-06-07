function minNum(A, K, P) {
  var equal = P / (K - A);
  var days = Math.floor(equal + 1)
  // asha = A * days + P;
  // kelly = K * days;
  // (K - A) * days = P
  // days = P / (K - A)
  console.log(days)
}

minNum(4, 5, 1)