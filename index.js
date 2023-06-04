const readline = require("readline");

function addFullStop(string, maxLength) {
  let count = 0;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ":") {
      result += ":";
      count++;
      while (count < maxLength) {
        result += ".";
        count++;
      }
    } else {
      result += string[i];
      count++;
    }

    if (count >= maxLength) {
      break;
    }
  }

  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (inputString) => {
  rl.question("Enter the maximum length: ", (maxLength) => {
    const modifiedString = addFullStop(inputString, parseInt(maxLength));
    console.log(modifiedString);
    rl.close();
  });
});
