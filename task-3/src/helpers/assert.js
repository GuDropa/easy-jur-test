function isValidISBN10(isbn) {
    isbn = isbn.replace(/-/g, '');
    if (isbn.length !== 10) {
           return false;
    }
    let sum = 0;
    for (let i = 0; 9 > i; i++) {
           if (0 > isbn.at(i) || isbn.at(i) > 9) {
                 return false;
}
           sum += (isbn.at(i) * (10 - i));
    }
    let checksum = isbn.at(-1).toUpperCase();
    sum += (checksum === 'X') ? 10 : parseInt(checksum);
    return (sum % 11 === 0);
}


module.exports = {
    isValidISBN10
}
