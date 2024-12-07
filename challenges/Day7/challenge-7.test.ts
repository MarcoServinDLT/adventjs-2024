import { fixPackages } from "./challenge-7";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: 'a(cb)de',
        output: 'abcde'
    },
    {
        id: 2,
        description: "sample test",
        input: 'a(bc(def)g)h',
        output: 'agdefcbh'
    },
    {
        id: 3,
        description: "sample test",
        input: 'abc(def(gh)i)jk',
        output: 'abcighfedjk'
    },
    {
        id: 4,
        description: "sample test",
        input: 'a(b(c))e',
        output: 'acbe'
    }
];

describe('Reto #7: 👹 El ataque del Grinch', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( fixPackages(input) ).toStrictEqual(output)
        })
    });

});
