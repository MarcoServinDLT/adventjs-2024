export function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
    const phones = agenda.match(/\+\d+-\d+-\d+-\d+/g);
    const names = agenda.match(/\<[^\>]+\>/g);
    const add = agenda.replaceAll(/\<[^\>]+\>|\+\d+-\d+-\d+-\d+/g, '');
    const addresses = add.slice( +(add.startsWith('|')) ).split('\n');
    const matches = phones.map( (p, i) => p.includes(phone) ? i : -1 )
        .filter( (n) =>  n >= 0);
    return matches.length === 1 
        ? { name: names[ matches[0] ].slice(1,-1), address: addresses[ matches[0] ].trim() }
        : null
}
