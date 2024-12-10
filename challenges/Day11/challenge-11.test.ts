import { decodeFilename } from "./challenge-11";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: '2023122512345678_sleighDesign.png.grinchwa',
        output: 'sleighDesign.png' 
    },
    {
        id: 2,
        description: "sample test",
        input: '42_chimney_dimensions.pdf.hack2023',
        output: 'chimney_dimensions.pdf' 
    },
    {
        id: 3,
        description: "sample test",
        input: '987654321_elf-roster.csv.tempfile',
        output: 'elf-roster.csv'
    }
];

describe('Reto #11: 🏴☠️ Nombres de archivos codificados', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( decodeFilename(input) ).toEqual(output)
        })
    });
});

