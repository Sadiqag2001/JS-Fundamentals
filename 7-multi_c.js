const args = process.argv.slice(2);
const count = parseInt(args[0], 10);

if (Number.isNaN(count)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  let output = '';
  while (i < count) {
    output += 'C is fun\n';
    i++;
  }
  console.log(output.trim());
}
