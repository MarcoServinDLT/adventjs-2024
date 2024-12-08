import { drawRace } from './challenge-8'

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: {
            indices: [0, 5, -3],
            length: 10
        },
        output: `  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`
    },
    {
        id: 2,
        description: "sample test",
        input: {
            indices: [2, -1, 0, 5],
            length: 8
        },
        output: `   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`
    },
    {
        id: 3,
        description: "sample test",
        input: {
            indices: [3, 7, -2],
            length: 12
        },
        output: `  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`
    }
];

describe('Reto #8: 🦌 La carrera de renos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( drawRace(input.indices, input.length) ).toStrictEqual(output)
        })
    });

});
