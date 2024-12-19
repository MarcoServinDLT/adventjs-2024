import { findInAgenda } from "./challenge-18";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: { agenda:`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
           phone: '1' 
        },
        output: null 
    },
    {
        id: 2,
        description: "sample test",
        input: { agenda:`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
           phone: '34-600-123-456' 
        },
        output: { name: "Juan Perez", address: "Calle Gran Via 12" }
    },
    {
        id: 3,
        description: "sample test",
        input: { agenda:`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
           phone: '600-987' 
        },
        output: { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
    },
];

describe('Reto #18: 📇 La agenda mágica de Santa', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( findInAgenda(input.agenda, input.phone) ).toStrictEqual(output)
        })
    });
});

