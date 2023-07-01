import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import { msg } from './test';

const app : Application = express();

const add = (a : number, b : number) : number => a + b;

app.get('/', (req : Request, res : Response) => {
    console.log(add(5, 5));    
    res.send('Hello World!');
});

async function main(): Promise<void>
{
    // const file_data = await fs.promises.readFile('./file.txt')
    // console.log(file_data);
    console.log('Helo World!');
}

main();
console.log(msg);

app.listen(3000, () => console.log("server running on http://localhost:3000/"))