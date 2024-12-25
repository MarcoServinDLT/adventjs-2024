import { getCompleted } from './challenge-26'

const testCases = [

    {
        id: 1,
        description: "sample test case",
        input: {
            timeWorked: '01:00:00',
            totalTime: '03:00:00'
        },
        output: '33%'
    },
    {
        id: 2,
        description: "sample test case",
        input: {
            timeWorked: '01:00:00',
            totalTime: '01:00:00'
        },
        output: '100%'
    },
    {
        id: 3,
        description: "sample test case",
        input: {
            timeWorked: '01:10:10',
            totalTime: '03:30:30'
        },
        output: '33%'
    },
    {
        id: 4,
        description: "sample test case",
        input: {
            timeWorked: '03:30:30',
            totalTime: '05:50:50'
        },
        output: '60%'
    },

]

describe('Reto #26: 🎯 Calcula el porcentaje completado', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( getCompleted(input.timeWorked, input.totalTime) ).toEqual(output)
        })
    });

});
