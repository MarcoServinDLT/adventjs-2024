import { createFrame } from "./challenge-2";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: ['midu', 'madeval', 'educalvolpz'],
        output: `***************
* midu        *
* madeval     *
* educalvolpz *
***************`
    },
    {
        id: 2,
        description: "sample test",
        input: ['midu'],
        output: `********
* midu *
********`
    },
    {
        id: 3,
        description: "sample test",
        input: ['a', 'bb', 'ccc'],
        output: `*******
* a   *
* bb  *
* ccc *
*******`
    },
    {
        id: 4,
        description: "sample test",
        input: ['a', 'bb', 'ccc', 'dddd'],
        output: `********
* a    *
* bb   *
* ccc  *
* dddd *
********`
    }

];

describe('Reto #2: 🖼️ Enmarcando nombres', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( createFrame(input) ).toStrictEqual(output)
        })
    });

});
