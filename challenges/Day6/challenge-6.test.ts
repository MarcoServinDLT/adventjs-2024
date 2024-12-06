import { inBox } from "./challenge-6";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [
            "###",
            "#*#",
            "###"
        ],
        output: true
    },
    {
        id: 2,
        description: "sample test",
        input: [
            "####",
            "#* #",
            "#  #",
            "####"
        ],
        output: true
    },
    {
        id: 3,
        description: "sample test",
        input: [
            "*####",
            "#   #",
            "#  #*",
            "####"
        ],
        output: false
    },
    {
        id: 4,
        description: "sample test",
        input: [
            "#####",
            "#   #",
            "#   #",
            "#   #",
            "#####"
        ],
        output: false
    }
];

describe('Reto #6: 📦 ¿Regalo dentro de la caja?', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( inBox(input) ).toStrictEqual(output)
        })
    });

});
