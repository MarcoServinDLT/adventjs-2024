export function isRobotBack(moves: string): true | [number, number] {
    const directions = {
        'U': [1, 0],
        'R': [0, 1],
        'D': [-1, 0],
        'L': [0, -1]
    };
    const inverse = {
        'U': 'D',
        'R': 'L',
        'D': 'U',
        'L': 'R'
    }
    let r = 0, c = 0;
    let lastMove = '';
    const madeMoves = new Set();
    let effect = 1;
    for(const move of moves) {
        const [mr, mc] = directions[move] ?? [0, 0]; 
        switch(lastMove) {
            case '*':
                lastMove = move;
                effect = 2;
                break;
            case '!':
                lastMove = inverse[move];
                effect = -1;
                break;
            case '?':
                const apply = !madeMoves.has(move);
                effect = apply ? 1 : 0;
                lastMove = apply ? move : lastMove;
                break;
            default:
                lastMove = move;
                effect = 1;
                break;
        }
        madeMoves.add(lastMove)
        r += mr*effect;
        c += mc*effect;
    }
    return Boolean(r | c)
        ? [c,r]
        : true;
} 
