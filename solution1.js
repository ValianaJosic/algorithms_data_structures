function addUpTo(n){
let total = 0;

for(i = 1 ; i <= n; i++){

    total += i
}
return total
}

console.log(addUpTo(3))

const {performance} = require('perf_hooks');

var t1 = performance.now()
addUpTo(1000000000)
var t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
