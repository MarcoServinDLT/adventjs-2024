import { distributeWeight } from "./challenge-19";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: 3,
        output: ` _ 
|_|_
|___|` 
    },
    {
        id: 2,
        description: "sample test",
        input: 4,
        output: ` ___ 
|___|
|___|`
    },
    {
        id: 3,
        description: "sample test",
        input: 6,
        output: ` _ 
|_|___
|     |
|_____|`
       }

];

describe('Reto #19: 📦 Apila cajas mágicas para repartir regalos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( distributeWeight(input) ).toEqual(output)
        })
    });
});

