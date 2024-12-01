import { test } from "@playwright/test";

test('demo if else statement', async () =>{
   let myExamResult : number = 70;

   if (myExamResult === 100){
        console.log('A+')
    } else if (myExamResult >= 80){
        console.log('A')
    } else if (myExamResult >= 70){
        console.log('B')
    } else if (myExamResult >= 60){
        console.log('C')
    } else if (myExamResult >= 50){
        console.log('D')
    } else {
        console.log('F')
    }

});

test('demo for loop statement', async () =>{
    const welcomeMsg: string = 'Hello World';
    for (let i = 0;  i < 5 ; i++){
        console.log(welcomeMsg);
    }
 
 });

 test('demo for of statement', async () =>{
    const myFriend : string[] = ['Jhon','Jack','Rose'];
    for(let i in myFriend){
        console.log('index '+i )
        console.log(myFriend[i]);

    }
 
 }); 