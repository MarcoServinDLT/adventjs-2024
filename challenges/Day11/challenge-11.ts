export function decodeFilename(filename: string): string {
    return filename.match(/[a-zA-Z\-][a-zA-Z\-_]*\.[a-z]+/)[0];
}
