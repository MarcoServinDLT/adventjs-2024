export function drawRace(indices: number[], length: number): string {
    return indices.map( (pos: number, index: number) => {
        const actualPos = pos < 0 ? length + pos : pos;
        const reindeer = pos === 0 ? '~' : 'r';
        return `${' '.repeat(indices.length - index - 1)}${'~'.repeat(actualPos)}${reindeer}${'~'.repeat(length - actualPos - 1)} /${index+1}`
    }).join('\n')
}
