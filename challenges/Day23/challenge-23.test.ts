import { findMissingNumbers } from './challenge-23'

const testCases = [

    {
        id: 1,
        description: "sample test case",
        input: [1, 2, 4, 6],
        output: [3, 5]
    },
    {
        id: 2,
        description: "sample test case",
        input: [4, 8, 7, 2],
        output: [1, 3, 5, 6]
    },
    {
        id: 3,
        description: "sample test case",
        input: [3, 2, 1, 1],
        output:  []
    },
    {
        id: 4,
        description: "sample test case",
        input: [5, 5, 5, 3, 3, 2, 1],
        output:  [4]
    }

]

describe('Reto #23: 🔢 Encuentra los números perdidos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( findMissingNumbers(input) ).toEqual(output)
        })
    });

});
