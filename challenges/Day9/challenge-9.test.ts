import { moveTrain } from './challenge-9'
import type { Space, Board, Movement, Result } from './challenge-9'

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: {
            board: ['·····', '*····', '@····', 'o····', 'o····'],
            mov: 'U' as Movement
        },
        output: 'eat' as Result 
    },
    {
        id: 2,
        description: "sample test",
        input: {
            board: ['·····', '*····', '@····', 'o····', 'o····'],
            mov: 'D' as Movement
        },
        output: 'crash' as Result
    },
    {
        id: 3,
        description: "sample test",
        input: {
            board: ['·····', '*····', '@····', 'o····', 'o····'],
            mov: 'L' as Movement
        },
        output: 'crash' as Result
    },
    {
        id: 4,
        description: "sample test",
        input: {
            board: ['·····', '*····', '@····', 'o····', 'o····'],
            mov: 'R' as Movement
        },
        output: 'none' as Result
    }

];

describe('Reto #9: 🚂 El tren mágico', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( moveTrain(input.board, input.mov) ).toStrictEqual(output)
        })
    });

});
