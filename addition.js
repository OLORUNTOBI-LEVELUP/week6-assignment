var sum = [1,2,3,4,5,6,7].reduce(add, 0);
function add (a, b) {
    return a + b;
}
console.log(sum)