import { isTreesSynchronized } from './challenge-24'

const testCases = [

    {
        id: 1,
        description: "sample test case",
        input: {
            tree1: {
                value: '🎄',
                left: { value: '⭐' },
                right: { value: '🎅' }
            },
            tree2: {
                value: '🎄',
                left: { value: '🎅' },
                right: { value: '⭐' }
            }
        },
        output: [true, '🎄']
    },
    {
        id: 2,
        description: "sample test case",
        input: {
            tree1: {
                value: '🎄',
                left: { value: '⭐' },
                right: { value: '🎅' }
            },
            tree2: {
                value: '🎄',
                left: { value: '🎅' },
                right: { value: '🎁' }
            }
        },
        output: [false, '🎄']
    },
    {
        id: 3,
        description: "sample test case",
        input: {
            tree1: {
                value: '🎄',
                left: { value: '⭐' },
                right: { value: '🎅' }
            },
            tree2: {
                value: '🎄',
                left: { value: '⭐' },
                right: { value: '🎅' }
            }
        },
        output: [false, '🎄']
    },
    {
        id: 4,
        description: "sample test case",
        input: {
            tree1: { value: '🎅' },
            tree2: { value: '🧑‍🎄' }
        },
        output: [false, '🎅']
    }

]

describe('Reto #24: 🪞 Verifica si los árboles son espejos mágicos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( isTreesSynchronized(input.tree1, input.tree2) ).toEqual(output)
        })
    });

});
