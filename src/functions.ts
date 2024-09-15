import { hiWorldProps } from "./types";

export function hiWorld({firstName, lastName, age}: hiWorldProps) {
    console.log('Hi World!');
    console.log(`Your first name is ${firstName}`);
    if(lastName) {
        console.log(`Your last name is ${lastName}`);
    }
    if(age) {
        console.log(`Your age is ${age}`);
    }
}
