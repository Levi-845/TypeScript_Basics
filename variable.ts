let x: number = 10;
if (true) {
    let x: number = 20; // Block scope
    console.log(x); // 20
}
console.log(x); // 10


let y: number = 30;
if (true) {
    let y: number = 40; // Block scope
    console.log(y); // 40
}
console.log(y); // 30


const z: number = 50;
// z = 60; // Error: Assignment to constant variable
console.log(z); // 50
