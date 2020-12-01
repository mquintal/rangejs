![Build status](https://travis-ci.org/mquintal/rangejs.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/mquintal/rangejs/badge.svg?branch=main)](https://coveralls.io/github/mquintal/rangejs?branch=main)

# rangejs
This is a micro-library which creates ranges using generators. Is similar to [lodash/range](https://lodash.com/docs/4.17.15#range) but intead of returning an array it returns a generator which then you can iterate through. This approach can be quite usefull when there are memory allocation concerns/limitations.

## how to install

`npm install grangejs`

or 

`yarn add grangejs`

## how to use

```js
import { range } from 'grangejs';
// const { range } = require('grangejs'); 

// Using a for loop
for(const num of range(10)) {
    console.log(num);
}

// outputs: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// Using a while loop
const gen = range(3);
let result = gen.next();

while(!result.done) {
    console.log(result.value);
    result = gen.next();
}
// outputs: 0, 1, 2

// Getting values manually
const gen = range(2);

console.log(gen.next().value); // outputs: 0
console.log(gen.next().value); // outputs: 1

```

### few other examples which you can use
- range(-1, -4) -> -1, -2, -3
- range(0, -10, -2) -> 0, -2, -4, -6, -8
- range(0, -10, 2) -> 0, -2, -4, -6, -8
- range(0, 10, 2) -> 0, 2, 4, 6, 8
- range(0, 10, -2) -> 0, 2, 4, 6, 8
- range(5, 10, 0) -> 5, 5, 5, 5, 5


