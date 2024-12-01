import { test } from "@playwright/test";

test('basic hello world function', async () =>{
  helloWorld('Jhon');
});

test('function with return value', async () =>{
    const result = multiplyByTwo(5);
    console.log(result);
  });

function helloWorld(username: string){
    console.log('Hello world'+username);
}

async function multiplyByTwo(input: number): Promise<number>{
    return input *2 ;
}