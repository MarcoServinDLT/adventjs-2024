import { organizeShoes } from "./challenge-5";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
        ],
        output: [38, 42]
    },
    {
        id: 2,
        description: "sample test",
        input: [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 38 },
            { type: 'R', size: 38 }
        ],
        output: [38, 38]
    },
    {
        id: 3,
        description: "sample test",
        input: [
            { type: 'I', size: 38 },
            { type: 'R', size: 36 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
        ],
        output: [42]
    }

];

describe('Reto #5: 👞 Emparejando botas', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( organizeShoes(input) ).toStrictEqual(output)
        })
    });

});
