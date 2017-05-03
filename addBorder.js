function addBorder(picture) {
    // Determine the width of the picture
    var len = picture[0].length;
    // Place an astrisk line before the first & after the last
    picture.unshift('*'.repeat(len));
    picture.push('*'.repeat(len));
    // Iterate through the array and add an astrisk before and after each string
    for (var i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*';
    }
    return picture;
}
