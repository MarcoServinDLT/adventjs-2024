export function distributeWeight(weight: number): string {
    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }
    const boxWeights = [10, 5, 2, 1];
    const boxes = [];
    let stackBoxes = [];
    const overlap = (a, b) => a + b.slice(a.length);
    for(const box of boxWeights) {
        boxes.push( ...Array( ~~(weight/box) ).fill(box)  );
        weight %= box;
    }
    for(const w of boxes.reverse()) {
        stackBoxes.push( ...(stackBoxes.length === 0
            ? boxRepresentations[w]
            : [ 
                overlap(stackBoxes.pop(), boxRepresentations[w][0]).trim(),
                ...boxRepresentations[w].slice(1)
            ])
        )
    }
    return stackBoxes.join('\n');
} 
