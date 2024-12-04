export function createXmasTree(height: number, ornament: string): string {
    const width = (height *2) -1;
    const trunk = '#'.padStart(height).padEnd(width);
    const tree = Array.from({length: height}).map( (_, i) => 
        ornament
            .padStart(i+1, ornament)
            .padEnd(i*2+1, ornament)
            .padStart(height+i)
            .padEnd(width)
    );
    return [
        ...tree,
        trunk,
        trunk
    ].join('\n')
}
