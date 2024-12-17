export function detectBombs(grid: boolean[][]): number[][] {
    let minds = []
    for(let i=0; i<grid.length; i++) {
        minds.push([])
        for(let j=0; j<grid[0].length; j++) {
            minds[i].push( +( grid[i-1]?.[j-1] ?? false ) +
                +( grid[i-1]?.[j] ?? false ) +
                +( grid[i-1]?.[j+1] ?? false ) +
                +( grid[i]?.[j-1] ?? false ) +
                +( grid[i]?.[j+1] ?? false ) +
                +( grid[i+1]?.[j-1] ?? false ) +
                +( grid[i+1]?.[j] ?? false ) +
                +( grid[i+1]?.[j+1] ?? 0) );
        }
    }
    return minds;
}
