import { organizeInventory } from "./challenge-3";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [
            { name: 'doll', quantity: 5, category: 'toys' },
            { name: 'car', quantity: 3, category: 'toys' },
            { name: 'ball', quantity: 2, category: 'sports' },
            { name: 'car', quantity: 2, category: 'toys' },
            { name: 'racket', quantity: 4, category: 'sports' }
        ],
        output: {
            toys: {
                doll: 5,
                car: 5
            },
            sports: {
                ball: 2,
                racket: 4
            }
        }
    },
    {
        id: 2,
        description: "sample test",
        input: [
            { name: 'book', quantity: 10, category: 'education' },
            { name: 'book', quantity: 5, category: 'education' },
            { name: 'paint', quantity: 3, category: 'art' }
        ],
        output: {
            education: {
                book: 15
            },
            art: {
                paint: 3
            }
        }
    },
    {
        id: 3,
        description: "empty array",
        input: [],
        output: {}
    }

 ];

describe('Reto #3: 🏗️ Organizando el inventario', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( organizeInventory(input) ).toStrictEqual(output)
        })
    });

});
