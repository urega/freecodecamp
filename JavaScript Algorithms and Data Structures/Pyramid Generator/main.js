// Pyramid generator

const character = "!";
const count = 8;
const rows = [];
let result = "";
let inverted = false;

//for loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

// while loop
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

//for of
for (const row of rows) {
  result = result + row + "\n";
}
//function
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

console.log(result);
