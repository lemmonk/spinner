
const chars = ['|','/','-','/','-','\\','|'];

for (let i = 0; i < chars.length; i++) {
  let delay = i * 200;
  setTimeout(() => {
    process.stdout.write(`\r${chars[i]}   `);
  }, delay);
}