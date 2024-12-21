export function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
    const cont = {};
    for(const r of received) {
        cont[r] ??= 0; cont[r]++;
    }
    for(const e of expected) {
        cont[e] ??= 0; cont[e]--;
    }
    const missing = Object.keys(cont)
        .filter( k => cont[k] < 0 )
        .reduce( (obj, k) => { obj[k] = Math.abs(cont[k]); return obj }, {});
    const extra = Object.keys(cont)
        .filter( k => cont[k] > 0 )
        .reduce( (obj, k) => { obj[k] = Math.abs(cont[k]); return obj }, {});
    return {
        missing: missing as Record<string,number> ,
        extra: extra as Record<string, number>
    };
}
  
