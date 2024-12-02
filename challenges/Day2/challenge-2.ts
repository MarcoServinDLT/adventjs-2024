export function createFrame(names: string[]): string {
    const maxLenght = Math.max( ...names.map( (n) => n.length ) );
    const top = ''.padEnd(maxLenght+4, '*');

    return [ 
        top,
        ...names.map( (name: string) => `* ${name.padEnd(maxLenght)} *` ),
        top
    ].join("\n")
}
