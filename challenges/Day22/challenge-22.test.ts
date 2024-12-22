import { generateGiftSets } from './challenge-22'

const testCases = [

    {
        id: 1,
        description: "sample test case",
        input: ['car', 'doll', 'puzzle'],
        output: [
            ['car'],
            ['doll'],
            ['puzzle'],
            ['car', 'doll'],
            ['car', 'puzzle'],
            ['doll', 'puzzle'],
            ['car', 'doll', 'puzzle']
        ]
    },
    {
        id: 2,
        description: "sample test case",
        input: ['ball'],
        output: [
            ['ball']
        ]
    },
    {
        id: 3,
        description: "sample test case",
        input: ['game', 'pc'],
        output:  [
            ['game'],
            ['pc'],
            ['game', 'pc']
        ]
    }

]

describe('Reto #22: 🎁 Genera combinaciones de regalos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( generateGiftSets(input) ).toEqual(output)
        })
    });

});
