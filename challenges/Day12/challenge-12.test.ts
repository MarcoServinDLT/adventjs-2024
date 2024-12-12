import { calculatePrice } from "./challenge-12";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: '***',
        output: 3
    },
    {
        id: 2,
        description: "sample test",
        input: '*o',
        output: 4
    },
    {
        id: 3,
        description: "sample test",
        input: '@@@',
        output: 300
    },
    {
        id: 4,
        description: "sample test",
        input: '*o@',
        output: 94
    },
    {
        id: 5,
        description: "sample test",
        input: '#@Z',
        output: undefined
    }


];

describe('Reto #12: 💵 ¿Cuánto cuesta el árbol?', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( calculatePrice(input) ).toEqual(output)
        })
    });
});

