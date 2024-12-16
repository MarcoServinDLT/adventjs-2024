import { drawTable } from "./challenge-15";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: [
            { name: 'Alice', city: 'London' },
            { name: 'Bob', city: 'Paris' },
            { name: 'Charlie', city: 'New York' }
        ],
        output: `+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`
    },
    {
        id: 2,
        description: "sample test",
        input: [
            { gift: 'Doll', quantity: 10 },
            { gift: 'Book', quantity: 5 },
            { gift: 'Music CD', quantity: 1 }
        ],
        output: `+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`
    }
];

describe('Reto #14: 🦌 Acomodando los renos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( drawTable(input) ).toEqual(output)
        })
    });
});

