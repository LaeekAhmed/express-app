import fs from 'fs';
import { msg } from './test.js';

async function main() {
    const file_data = await fs.promises.readFile('file.txt')
    console.log(file_data);
    console.log('Hello World!');
}

main();
console.log(msg);