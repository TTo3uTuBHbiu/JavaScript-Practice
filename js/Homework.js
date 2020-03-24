// Task 1
let sum = 4000;
let pay;
let gift = false;
let mess = 'К оплате:';
let giftMess = ',а также вам полагается подарок!';
if (sum < 1000) {
	pay = sum;
} else if (sum >= 1000 && sum < 2000) {
	pay = sum * 0.95;
} else if (sum >= 2000 && sum < 3000) {
	pay = sum * 0.9;
} else if (sum >= 3000) {
	pay = sum * 0.9;
	gift = true;
}
if (gift){
	console.log(mess + pay + giftMess);
} else {
	console.log(mess + pay);
}

// Task 2
let month = 'октябрь';
switch (month) {
	case 'декабрь':
	case 'январь':
	case 'февраль':
		console.log('Зима');
		break;
	case 'июнь':
	case 'июль':
	case 'август':
		console.log('Лето');
		break;
	case 'март':
	case 'апрель':
	case 'май':
		console.log('Весна');
		break;
	case 'сентябрь':
	case 'октябрь':
	case 'ноябрь':
		console.log('Осень');
		break;
	default:
        console.log("Введите название месяца");
}

// Task3
let randomNum = Math.floor(Math.random() * 7 + 1);
let answer = 10;
while (answer !== randomNum) {
	answer = parseInt(prompt('Введите число'));
	if (answer === randomNum) {
		console.log('Вы угадали');
	} else 
		if (answer > randomNum) {
			console.log('Загаданное число меньше');
	}else 
		if (answer < randomNum) {
			console.log('Загаданное число больше');
	}
	if (answer == 0) {
		console.log('Выход');
		break;
	}
}
console.log(randomNum);

// Task 4

let arr = [];
// Создание массива с произвольным количесвтом элементов,
// элементы - случайны,но в диапазоне от 1 до 6,чтобы повысить вероятность суммы равной семи
let randomNumber = Math.floor(Math.random() * 20 + 1); 
for (i = 0; i < randomNumber; i++) {
	arr[i] = Math.floor(Math.random() * 6 + 1);
}
console.log(arr);
let neededNum1;
let neededNum2;
let neededInd1;
let neededInd2;
for (i = 0; i !== arr.length;i++){
	for (j = 0;j !== arr.length;j++){
		if (arr[i] + arr[j] === 7){
			neededNum1 = arr[i];
			neededNum2 = arr[j];
			neededInd1 = i;
			neededInd2 = j;
			break;
		}
	}
}
console.log('Элементы дающие в сумме 7: '+ neededNum1 + ' с индексом ' + neededInd1 + ' и ' + neededNum2 + ' с индексом '+ neededInd2);