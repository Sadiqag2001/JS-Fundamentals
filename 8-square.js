function add(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return NaN;
  }
  return a + b;
}

const args = process.argv.slice(2);
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);

console.log(add(a, b));
