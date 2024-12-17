import { detectBombs } from "./challenge-17";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [
            [true, false, false],
            [false, true, false],
            [false, false, false]
        ],
        output:  [
            [1, 2, 1],
            [2, 1, 1],
            [1, 1, 1]
        ]
    },
    {
        id: 2,
        description: "sample test",
        input: [
            [true, false],
            [false, false]
        ],
        output:  [
            [0, 1],
            [1, 1]
        ]
    },
    {
        id: 3,
        description: "sample test",
        input: [
            [true, true],
            [false, false],
            [true, true]
        ],
        output: 
            [
            [1, 1],
            [4, 4],
            [1, 1]
        ]
    }

];

describe('Reto #17: 💣 Busca las bombas del Grinch', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( detectBombs(input) ).toStrictEqual(output)
        })
    });
});

