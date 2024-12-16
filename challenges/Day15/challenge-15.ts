export function drawTable(data: Array<Record<string, string | number>>): string {
    const headers = Object.keys(data[0])
    const colSizes = headers.map( (h) => 
        Math.max(h.length, ...data.map( (d) => d[h].toString().length ))
    );
    const tableDivision = `+${ colSizes.map( (l) => '-'.repeat(l+2)).join('+') }+`;
    return [
        tableDivision,
        `| ${ headers.map( (h, i) => (h[0].toUpperCase() + h.slice(1)).padEnd(colSizes[i]) ).join(' | ') } |`,
        tableDivision,
        ...data.map( (d) => 
            `| ${ headers.map( (h, i) => d[h].toString().padEnd(colSizes[i]) ).join(' | ') } |`
        ),
        tableDivision,
    ].join('\n');
}
