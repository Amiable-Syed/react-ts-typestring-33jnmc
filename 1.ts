// first Block
setTimeout(() => {
  console.log(1);
});

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(true).then(() => {
  console.log(3);
});

queueMicrotask(() => {
  console.log(4);
});

console.log(5);
console.log(6);

// second Block

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// third block
function* generator(number) {
  yield number;
  yield (number += 10);
  yield (number += 10);
}

const gen = generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// fourth block

const person = { name: 'Turing', age: 30, skills: [1, 2, '3'], isAdmin: true };

function returnA<Type>(arg: Type): Type {
  return arg.length;
}

console.log('Turing'.printTuring(3)); // Turing, Turing, Turing.

// ex: 'Turing 2'.printTuring(4); // Turing 2, Turing 2, Turing 2, Turing 2.

// fifth block

const arr = [];
const user = arr.reduce((acc, curr) => {
  return {
    ...acc,
    [curr.id]: curr,
  };
}, {});
