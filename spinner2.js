const animation = ["| ", "/ ", "- ", "\\ ", "| ", "/ ", "- ", "\\ ", "|\n"];

for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}`);
  }, 100 + i * 200);
}
