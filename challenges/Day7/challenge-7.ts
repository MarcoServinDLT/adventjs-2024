export function fixPackages(packages: string) {
    const stack = [''];
    for(const pack of packages) {
        if(pack === '(')
            stack.push('');
        else if(pack === ')')
            stack[stack.length-2] += stack.pop()
                .split('')
                .reverse()
                .join('');
        else
            stack[stack.length-1] += pack
    }
    return stack[0];
}
