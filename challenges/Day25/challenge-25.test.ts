import { execute } from './challenge-25'

const testCases = [

    {
        id: 1,
        description: "sample test case",
        input: '+++',
        output: 3
    },
    {
        id: 2,
        description: "sample test case",
        input: '+{[-]+}+',
        output: 2
    },
    {
        id: 3,
        description: "sample test case",
        input: '-[++{-}]+{++++}',
        output: 5
    },
    {
        id: 4,
        description: "sample test case",
        input: '------[+]++',
        output: 2
    },

]

describe('Reto #25: 🪄 Ejecuta el lenguaje mágico', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( execute(input) ).toEqual(output)
        })
    });

});
