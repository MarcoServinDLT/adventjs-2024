import { prepareGifts } from "./challenge-1";

const testCases = [
    {
        id: 1,
        description: "repeated items",
        input: [3, 1, 2, 3, 4, 2, 5],
        output: [1, 2, 3, 4, 5]
    },
    {
        id: 2,
        description: "an element repeated multiple times",
        input: [6, 5, 5, 5, 5],
        output: [5, 6]
    },
    {
        id: 3,
        description: "empty array",
        input: [],
        output: []
    },
    {
        id: 4,
        description: "ASCII order",
        input: [11, 1, 8, 9],
        output: [1, 8, 9, 11]
    }

];

describe('Reto #1: 🎁 ¡Primer regalo repetido!', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( prepareGifts(input) ).toStrictEqual(output)
        })
    });

    describe('Performance test ⏳', () => {
        test('test #1 testing with 100,000', () => {
            const performaceInput = Array.from({ length: 100_000}, () => 
                Math.floor( Math.random() * 100 )
            );
        
            const start = performance.now();
            const result = prepareGifts(performaceInput);
            const executionTime = performance.now() - start;

            expect(executionTime).toBeLessThan(1_000)
        })
    });

});
