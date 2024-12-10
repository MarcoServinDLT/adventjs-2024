import { compile } from "./challenge-10";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [
            'MOV -1 C', // copia -1 al registro 'C',
            'INC C', // incrementa el valor del registro 'C'
            'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
            'MOV C A', // copia el registro 'C' al registro 'a',
            'INC A' // incrementa el valor del registro 'a'
        ],
        output: 2 
    },
    {
        id: 2,
        description: "sample test",
        input: [
            'INC C', // incrementa el valor del registro 'C'
            'DEC B', // salta a la instrucción en el índice 1 si 'C' es 0
            'MOV C Y', // copia el registro 'C' al registro 'a',
            'INC Y' // incrementa el valor del registro 'a'
        ],
        output: undefined 
    },
    {
        id: 3,
        description: "sample test",
        input: [
            "MOV 3 C",
            "DEC C",
            "DEC C",
            "DEC C",
            "JMP C 3",
            "MOV C A"
        ],
        output: -1
    }
];

describe('Reto #10: 👩💻 El ensamblador élfico', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( compile(input) ).toEqual(output)
        })
    });

});
