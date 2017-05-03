function isLucky(n) {
    var firstHalf = 0, secondHalf = 0;
    var str = n.toString();
    
    for (var i = 0; i < str.length / 2; i++) {
        firstHalf += Number(str[i]);
        secondHalf += Number(str[i + str.length / 2]);
    }    

    return firstHalf === secondHalf;
    

}
