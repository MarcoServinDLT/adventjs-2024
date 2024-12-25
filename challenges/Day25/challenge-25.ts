export function execute(code: string): number {
    let pc = 0;
    let lastInstruction = '';
    const sum = {
        '+': 1,
        '-': -1
    };
    for(const instruction of code) {
        const consitions = [
            lastInstruction === '[' && instruction !== ']',
            lastInstruction === '{' && pc === 0,
        ];
        if(lastInstruction === '[')
            pc = 0;
        lastInstruction = !consitions.some( val => val )
            ? instruction
            : lastInstruction;
        pc += sum[lastInstruction] ?? 0;
    }
    return pc;
}
