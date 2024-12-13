import { isRobotBack } from "./challenge-13";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: 'R!U?U',
        output: [1,0]
    },
    {
        id: 2,
        description: "sample test",
        input: 'UU!U?D',
        output: [0,1]
    },
    {
        id: 3,
        description: "sample test",
        input: 'U?D?U',
        output: true
    },
    {
        id: 4,
        description: "sample test",
        input: 'LLL!R',
        output: [-4,0]
    },
    {
        id: 5,
        description: "sample test",
        input: '*U?U',
        output: [0,2]
    }

];

describe('Reto #13: 🤖 ¿El robot está de vuelta?', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( isRobotBack(input) ).toStrictEqual(output)
        })
    });
});

