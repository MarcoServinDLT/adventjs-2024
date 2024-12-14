export function minMovesToStables(reindeer: number[], stables: number[]): number {
    reindeer.sort()
    stables.sort()
    return reindeer.reduce( (acc, rein, idx) => 
        acc + Math.abs(rein - stables[idx])
    , 0);
}
