const userInputString = prompt(
  "Please order some Froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,coffee,coffee,strawberry"
);
// have the string of flavors split into an array of strings
const stringArray = userInputString.split(",");

console.log(stringArray);

const froyoFlavors = {};
for (let i = 0; i < stringArray.length; i++) {
  const currentFlavor = stringArray[i];
  froyoFlavors[currentFlavor] = 1;
  console.log(currentFlavor);
}
console.log(froyoFlavors);
