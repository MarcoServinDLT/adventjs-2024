import { fixGiftList } from "./challenge-20";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: {
            received: ['puzzle', 'car', 'doll', 'car'],
            expected: ['car', 'puzzle', 'doll', 'ball']
        },
        output:  {
            missing: { ball: 1 },
            extra: { car: 1 }
        }
    },
    {
        id: 2,
        description: "sample test",
        input: {
            received: ['book', 'train', 'kite', 'train'],
            expected: ['train', 'book', 'kite', 'ball', 'kite']
        },
        output: {
            missing: { ball: 1, kite: 1 },
            extra: { train: 1 }
        } 
    },
    {
        id: 3,
        description: "sample test",
        input: {
            received: ['bear', 'bear', 'car'],
            expected: ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
        },
        output: {
            missing: { puzzle: 1, car: 2 },
            extra: {}
        }
    }

];

describe('Reto #20: 🎁 Encuentra los regalos faltantes y duplicados', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( fixGiftList(input.received, input.expected) ).toEqual(output)
        })
    });
});

