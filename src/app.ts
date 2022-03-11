// function sum(a: number, b: number): number{
//     return a + b;
// }
// const a:number = 10;
// const b:number = 20;
// const result = sum(a, b);
// console.log(result);

// let number1: number = 5;
// let number2: number = 2.8;
// let phrase: string = 'Result is ';
// let permit : boolean = true;
// const result = number1 + number2;
// if(permit) {
//     console.log(phrase + result);
// }else{
//     console.log("Not show result");
// }
// type TPerson = {
//     id: number;
//     name: string;
//     age: number;
//     status?: boolean;
// }
// const person: TPerson = {
//     id: 1,
//     name: "Huy",
//     age: 34
// } 
// const persons: TPerson[] = [
//     {id: 1, name: "Huy3", age: 34, status: true},
//     {id: 2, name: "Huy2", age: 35, status: false},
// ];
// console.log(person.name);

export type User = {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


