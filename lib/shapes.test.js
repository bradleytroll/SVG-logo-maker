// Imports shapes module
const { Triangle, Circle, Square } = require('./shapes');


// Creates a test for jest. The terst shoudl return 'Shapes render correct SVG'
describe('Shapes render correct SVG', () => {
    test('Triangle renders correct SVG', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150, 10 244, 182 56,182" fill="blue" />')
    })
});

describe('Shapes render correct SVG', () => {
    test('Circle renders correct SVG', () => {
        const shape = new Circle('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
});

describe('Shapes render correct SVG', () => {
    test('Square renders correct SVG', () => {
        const shape = new Square('blue');
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />')
    })
});
