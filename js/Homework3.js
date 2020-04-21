//Task 1
let num = 132132132;
function sumDigits (a) {
    if (a < 10) {
    return a;
    } else if (a >= 10)
    return (a % 10) + Math.floor(sumDigits(a / 10));
    }
console.log(sumDigits(num));

//Task 2

let someStr = 'qwe weqwsd we wq lox gad qweqe   lol  sdad gad sadqw wdq ';
let spamStr1 = 'lox';
let spamStr2 = 'gad';
let spamStr3 = 'lol';
let count = 0;
function spamFilter (str,spam1,spam2,spam3){

    while (str.includes(spam1)) {
	    count++;
	    str = str.replace(spam1,'');
    }
    while (str.includes(spam2)) {
    	    count++;
    	    str = str.replace(spam2,'');
        }
    while (str.includes(spam3)) {
        	    count++;
        	    str = str.replace(spam3,'');
            }
    return (count >= 5) ? 5 : count;
}
console.log("Оценка спама по пятибальной шкале: " + spamFilter(someStr,spamStr1,spamStr2,spamStr3));



//Task 3
function formWord (count){
    let str = '';
    if (count % 100 > 9 && count % 100 < 20) {
        str = count + ' товаров';
        return str;
    }else {
        switch(count % 10){
            case 1 :
                    str = count + ' товар';
                    return str;
            case 2 :
            case 3 :
            case 4 :
                    str = count + ' товара';
                    return str;
            case 5 :
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 0 :
                    str = count + ' товаров';
                    return str;
    }
   }
}

console.log(formWord(34));

//Task 4
let usersArr = [{
    name:'Алексей',
    age:26
},{
      name:'Владимир',
    age:16
  },{
     name:'Илья',
     age:78
   },{
      name:'Роман',
      age:4
    }];

function ageControl(arr,from,to = 130){
    let resultArr = [];
    arr.forEach(function(element,i,arr){
        if (arr[i].age >= from && arr[i].age < to) {
            resultArr.push(arr[i].name);
         }
    })
    return resultArr;
}
console.log(ageControl(usersArr,25));

//Task 5
 let users = [
     {
         login: "qwe",
         age: 34,
         city: "Москва",
         favouriteLangs: ["php", "js"]
     },
     {
         login: "asd",
         age: 23,
         city: "Алмата",
         favouriteLangs: ["python", "javascript"]
     },
     {
         login: "rty56",
         age: 58,
         city: "Якутск",
         favouriteLangs: ["java", "php"]
     },
     {
         login: "rty57",
         age: 58,
         city: "Спб",
         favouriteLangs: ["java", "scala"]
     },
     {
         login: "ght",
         age: 45,
         city: "Владивосток",
         favouriteLangs: ["php", "ruby"]
     },
 ];

function favLang(arr,favouriteLang){
let resultArr = [];
arr.forEach(function(element,i,arr){
        arr[i].favouriteLangs.forEach(function(item,k,subArr){
            if (subArr[k] == favouriteLang) resultArr.push(arr[i].login);
        });

      });
    return resultArr;

}

console.log(favLang(users,'php'));

//Task 6


users.sort(function(a, b){
let nameA=a.city, nameB=b.city ;
if (nameA < nameB)
  return -1
if (nameA > nameB)
  return 1

return 0
})

console.log(users);
