const { isValidISBN10 } = require('../src/helpers/assert')

describe('isValidISBN10', () => {

    it('should return true for a valid ISBN-10 without hyphens', () => {
        expect(isValidISBN10('0471958697')).toBe(true);
    });

    it('should return true for a valid ISBN-10 with hyphens', () => {
        expect(isValidISBN10('0-471-60695-2')).toBe(true);
    });

    it('should return false for an invalid ISBN-10 with incorrect checksum', () => {
        expect(isValidISBN10('1234567890')).toBe(false);
    });

    it('should return false for an ISBN-10 too short', () => {
        expect(isValidISBN10('123456789')).toBe(false);
    });

    it('should return false for an ISBN-10 too long', () => {
        expect(isValidISBN10('12345678901')).toBe(false);
    });

    it('should return false for an ISBN-10 with letters in the middle', () => {
        expect(isValidISBN10('0A471606952')).toBe(false);
    });

    it('should return false for an ISBN-10 with special characters in the middle', () => {
        expect(isValidISBN10('0@4716#6952')).toBe(false);
    });

    it('should return false for a string with leading/trailing white spaces', () => {
        expect(isValidISBN10(' 0471958697 ')).toBe(false);
    });
});
