export type Shoe = {
    type: 'I' | 'R'
    size: number
}

export function organizeShoes(shoes: any): number[] {
    const boots = {};
    const result = [];
    for(const shoe of shoes) {
        boots[shoe.size] ??= { 'I':0, 'R': 0};
        boots[shoe.size][shoe.type]++;
    }
    for(const [size, types] of Object.entries(boots)) {
        const pair = Math.min(types['I'], types['R']);
        result.push(...Array(pair).fill(+size));
    }
    return result;
}
