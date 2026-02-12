const name = "raees";
const repoCount = 50;

// console.log(name + repoCount); old way

console.log(
  `my name is ${name.toUpperCase()} and my repo count is ${repoCount}`,
);
const gameName = new String("chess");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-9, 6);
console.log(anotherString);

const newString2 = "          hello world           ";
console.log(newString2.trim());

const url = "https://www.youtube.com/channel/hiteshchhatwal";
console.log(url.replace("hiteshchhatwal", "coddecode"));

console.log(url.includes("youtube"));

console.log(gameName.split("h"));
