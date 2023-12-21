
console.log("Start");

setTimeout(() => {
    console.log("Time in 10sec");
}, 10000);

console.log("Before expensive task");

for(let i=0; i<10; i++){
    console.log(i);
}

console.log("After expensive task");