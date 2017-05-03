function alternatingSums(a) {
    var teamWeights = [0, 0];
    
    for (var i = 0; i < a.length; i++) {
        i % 2 === 0 ? teamWeights[0] += a[i] : teamWeights[1] += a[i];
    }
    
    return teamWeights;
}
