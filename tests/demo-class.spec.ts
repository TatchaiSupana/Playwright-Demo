import { test } from "@playwright/test";
import { Student } from "../models/student";

test('basic demo class student', async () =>{
    let studentA = new Student('Jhon','Doe',17,5);
    const fullnameA = studentA.getFullname();
    console.log(fullnameA);
    console.log(studentA.getGrage);
    studentA.setGrade(6);
    console.log(studentA.getGrage);
});