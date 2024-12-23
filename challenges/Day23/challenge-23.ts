export function findMissingNumbers(nums: number[]): number[] {
    const n = Math.max(...nums);
    const count = Array(n).fill(false);
    for(const num of nums) {
        count[num-1] = true;
    }
    return count.map( (find, i) => find ? null : i+1 )
        .filter( (num) => num );
}
