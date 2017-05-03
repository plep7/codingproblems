function areSimilar(a, b) {
    var errors = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            errors.push([a[i], b[i]]);
        }
    }
    if (errors.length > 2) {
        return false
    } else if (errors.length === 2) {
        if (errors[0][0] === errors[1][1] && errors[0][1] === errors[1][0]) {
            return true;
        } else {
            return false;
        }
    } else if (errors.length === 1) {
        return false;
    } else {
        return true
    }
}
