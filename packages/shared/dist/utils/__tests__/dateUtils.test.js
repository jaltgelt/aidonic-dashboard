import { formatDate, formatNumber } from '../dateUtils';
describe('dateUtils', () => {
    describe('formatDate', () => {
        it('should format date string to YYYY-MM-DD format', () => {
            const dateString = '2025-01-15T10:30:00Z';
            const result = formatDate(dateString);
            expect(result).toBe('2025-01-15');
        });
        it('should handle different date formats', () => {
            const dateString = '2025-02-10T12:00:00.000Z';
            const result = formatDate(dateString);
            expect(result).toBe('2025-02-10');
        });
    });
    describe('formatNumber', () => {
        it('should format numbers with commas', () => {
            const number = 1234567;
            const result = formatNumber(number);
            expect(result).toBe('1,234,567');
        });
        it('should handle zero', () => {
            const number = 0;
            const result = formatNumber(number);
            expect(result).toBe('0');
        });
        it('should handle small numbers', () => {
            const number = 123;
            const result = formatNumber(number);
            expect(result).toBe('123');
        });
    });
});
