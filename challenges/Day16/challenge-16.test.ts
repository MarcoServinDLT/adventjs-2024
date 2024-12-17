import { removeSnow } from "./challenge-16";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: 'zxxzoz',
        output: 'oz'
    },
    {
        id: 2,
        description: "sample test",
        input: 'abcdd',
        output: 'abc'
    },
    {
        id: 3,
        description: "sample test",
        input: 'zzz',
        output: 'z'
    },
    {
        id: 4,
        description: "sample test",
        input: 'a',
        output: 'a'
    }


];

describe('Reto #16: ❄️ Limpiando la nieve del camino', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( removeSnow(input) ).toEqual(output)
        })
    });
});

