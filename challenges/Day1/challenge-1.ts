export function prepareGifts(gifts: number[]): number[] {
    return [...new Set(gifts)].sort( (n1, n2) => n1 - n2 );
 }
