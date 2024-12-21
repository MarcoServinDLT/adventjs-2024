import { treeHeight } from './challenge-21';

const testCases = [

    {
        id: 1,
        description: "sample test case",
        input: {
            value: '🎁',
            left: {
                value: '🎄',
                left: {
                    value: '⭐',
                    left: null,
                    right: null
                },
                right: {
                    value: '🎅',
                    left: null,
                    right: null
                }
            },
            right: {
                value: '❄️',
                left: null,
                right: {
                    value: '🦌',
                    left: null,
                    right: null
                }
            }
        },
        output: 3
    }

];
    

describe('Reto #21: 🎄 Calcula la altura del árbol de Navidad', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( treeHeight(input) ).toEqual(output)
        })
    });

});
