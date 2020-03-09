const sentence = "hello there from lighthouse labs";

// Create a variable to store the delay times
let timeout = 0;
for (const char of sentence) {

  // Write each char using the timeout value as delay,
  // incrementing timeout each time by 50ms
  setTimeout(() => {
    process.stdout.write(char);
  }, timeout); // <= 1s delay to make it noticeable. Can dial it down later.
  timeout += 50;
}

// Write a newline character after sentence completes, which we can ensure
// by using the final timeout value
setTimeout(() => {
  process.stdout.write('\n');
}, timeout);