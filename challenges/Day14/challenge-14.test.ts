import { minMovesToStables } from "./challenge-14";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [[2, 6, 9], [3, 8, 5]],
        output: 3
    },
    {
        id: 2,
        description: "sample test",
        input: [[1, 1, 3], [1, 8, 4]],
        output: 8
    }
];

describe('Reto #14: 🦌 Acomodando los renos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( minMovesToStables(input[0], input[1]) ).toEqual(output)
        })
    });
});

