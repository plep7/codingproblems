function shapeArea(n) {
    // Initialize a sum to 1 and a counter
    var counter = 1, sum = 1;
    // While counter < n
    while (counter <= n) {
        sum += 4 * (counter - 1)
        counter++;
    }
    return sum;
}
