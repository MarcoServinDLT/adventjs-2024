export function generateGiftSets(gifts: string[]): string[][] {
    if(gifts.length === 0) {
        return [];
    }
    let combinations = [ [gifts[0]] ];
    const exclude = generateGiftSets( gifts.slice(1) );
    combinations.push( 
        ...exclude.map( n => [ gifts[0], ...n ] )
    );
    combinations.push( ...exclude );
    return combinations.sort( (a, b) => a.length - b.length);
}
