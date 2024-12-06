export function inBox(box: string[]): boolean {
    const gifts = box.join().match(/\*/g)?.length ?? 0;

    let giftsInBox = 0;
    for(const level of box.slice(1, -1)) {
        giftsInBox += level.slice(1,-1).match(/\*/g)?.length ?? 0;
    }
    
    return (gifts > 0) ? gifts === giftsInBox : false;
}
