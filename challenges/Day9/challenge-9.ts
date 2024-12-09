export type Space = '·' | '@' | '*' | 'o'
export type Board = Space[]
export type Movement = 'U' | 'D' | 'R' | 'L'
export type Result = 'none' | 'crash' | 'eat'

export function moveTrain(board: any, mov: Movement): Result{
    const y = board.findIndex( (l: string) => l.includes('@') );
    const x = board[y].indexOf('@');
    const {my , mx} = {
        'U': {my: -1, mx: 0},
        'D': {my: 1, mx: 0},
        'R': {my: 0, mx: 1},
        'L': {my: 0, mx: -1}
    }[mov];
    const newPos = board[y+my] ? board[y+my][x+mx] : undefined;
    return {
        '·': 'none' ,
        '*': 'eat',
        'o': 'crash'
    }[newPos] ?? 'crash' as Result;
}
