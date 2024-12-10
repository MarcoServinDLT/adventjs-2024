export function compile (instructions: string[]): number {
    const registers = {  };
    let PC = 0;
    const setInstructions = {
        'MOV': (arg1: string, arg2: string) => {
            registers[arg1] ??= +arg1 ? +arg1 : 0;
            registers[arg2] ??= 0;
            registers[arg2] = registers[arg1];
        },
        'INC': (r: string, _) => { registers[r] ??= 0; registers[r]++ },
        'DEC': (r: string, _) => { registers[r] ??= 0; registers[r]-- },
        'JMP': (r: string, l: number) => {
            PC = registers[r] === 0 ? +l-1 : PC;
        } 
    }

    while(PC < instructions.length) {
        const [ins, arg1, arg2] = instructions[PC].split(' '); 
        setInstructions[ins](arg1, arg2);
        PC++;
    }

    return registers['A'];
}
