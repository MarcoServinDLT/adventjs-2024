export type Shoe = {
    type: 'I' | 'R'
    size: number
}

export function organizeShoes(shoes: any): number[] {
    const boots = {};
    shoes.forEach((shoe) => {
        boots[shoe.size] ??= {};
        boots[shoe.size][shoe.type] ??= 0;
        boots[shoe.size][shoe.type]++
    });
    return Object.keys(boots).reduce((pairs: any, size: any) => 
       [...pairs, ...new Array( Math.min(boots[size]['I'] ?? 0, boots[size]['R'] ?? 0) ).fill(+size) ]
    , []);
}
