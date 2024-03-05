// Imports shapes module
const { Triangle, Circle, Square } = require('./shapes');


// Creates a test for jest. The terst shoudl return 'Shapes render correct SVG'
describe('Shapes render correct SVG', () => {
    test('Triangle renders correct SVG', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150, 10 244, 182 56,182" fill="blue" />')
    })
});
