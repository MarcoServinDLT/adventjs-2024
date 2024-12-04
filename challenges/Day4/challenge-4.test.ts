import { createXmasTree } from "./challenge-4";

const testCases = [
    {
        id: 1,
        description: "sample test",
        input: {height: 5, ornament: '*'},
        output: `    *    
   ***   
  *****  
 ******* 
*********
    #    
    #    `
    },
    {
        id: 2,
        description: "sample test",
        input: {height: 3, ornament: '+'},
        output: `  +  
 +++ 
+++++
  #  
  #  `
    },
    {
        id: 3,
        description: "sample test",
        input: {height: 6, ornament: '@'},
        output: `     @     
    @@@    
   @@@@@   
  @@@@@@@  
 @@@@@@@@@ 
@@@@@@@@@@@
     #     
     #     `
    }

];

describe('Reto #4: 🎄 Decorando el árbol de Navidad', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testCases)('test #$id $description', ({input, output}) => {
            expect( createXmasTree(input.height, input.ornament) ).toStrictEqual(output)
        })
    });

});
