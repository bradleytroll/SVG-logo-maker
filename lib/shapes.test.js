const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes render correct SVG', () => {
    test('Triangle renders correct SVG', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="blue" />')
    })
});