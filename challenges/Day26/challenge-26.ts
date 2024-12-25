export function getCompleted(timeWorked: string, totalTime: string): string {
    const [wHours, wMinutes, wSeconds] = timeWorked.split(':');
    const [tHours, tMinutes, tSeconds] = totalTime.split(':');
    const worked = (+wHours * 3600) + (+wMinutes * 60) + +wSeconds;
    const total = (+tHours * 3600) + (+tMinutes * 60) + +tSeconds;
    return `${ Math.round( (worked / total) * 100 ) }%`;
}
