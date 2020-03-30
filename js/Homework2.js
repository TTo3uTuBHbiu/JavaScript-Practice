// Task1
let someArr = [
[],
[],
[]
];

for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 6; j++) {
			let k = Math.random();
			if (k > 0.5){
				someArr[i][j] = Math.floor(Math.random() * 99);
			}else{
				someArr[i][j] = Math.floor(Math.random() * -99);
			}
		}
}
console.log(someArr);
let max = -100;
let maxIndex = '';
for (let i = 0;i < someArr.length; i++) {
	for (let j = 0; j < someArr[i].length; j++) {
		if (max < someArr[i][j]) {
			max = someArr[i][j];
			maxIndex = '';
			maxIndex = i + 'и' + j; 
		}
	}
}
console.log(max,maxIndex);


// Task 2 

let someStr = prompt().trim();
let subStr = prompt().trim();

console.log(someStr.lastIndexOf(subStr));

while (someStr.includes(subStr)){
	console.log(someStr.substring(someStr.indexOf(subStr),someStr.lastIndexOf(subStr)) + 
		'Подстрока входит в строку начиная с  '+ someStr.indexOf(subStr) + ' символа.');
	someStr = someStr.replace(subStr,'');

}

// Task 3

let anotherStr = prompt().trim();
let newStr = anotherStr[0].toUpperCase() + anotherStr.slice(1);
console.log(newStr);

// Task 4

let animals = ['dog', 'cat', 'rabbit', 'mouse'];
let index;
for (let i = 0; i < animals.length; i++) {
	if (animals[i] == 'cat'){
		index = i;
	}
}

animals.splice(index,1)

console.log(animals);
