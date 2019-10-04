1.///////////////////////////////////////////////////

/*Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
Открыть песочницу с тестами для задачи.
*/

function ucFirst (str) {
  if (str[0]===" ") {
    str = str.slice(1);
    alert (str[0].toUpperCase()+str.slice(1));
  } else {
    alert (str[0].toUpperCase()+str.slice(1));
  }
}

//REVIEWED by Igor Nepipenko 04/10/19  
//вы руками вырезаете пробельный символ . Давайте вспомним метод trim

function ucFirst (str) {
str = str.trim();
return (str[0].toUpperCase()+str.slice(1));
}


2./////////////////////////////////////////////////

/*Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:*/

function checkSpam (str) {
  str = str.toLowerCase();
  if ((str.indexOf('viagra') != -1)||(str.indexOf('xxx') != -1)) {
    alert("Спам!");
  } else {
    alert("Не спам.");
  }
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

//REVIEWED by Igor Nepipenko 04/10/19  
//Обратите внимание на условия , во втором задании требуют вернуть true/false , а у вас alert, что в результате undefined
//так же можно посмотреть в сторону метода includes
//2 ) сравнения везде  только строгие , мы говорили об этом   !=  =>  !==

function checkSpam (str) {
  str = str.toLowerCase();
  if ((str.indexOf('viagra') !== -1)||(str.indexOf('xxx') !== -1)) {
    return true;
  } return false;
}
// includes
function checkSpam (str) {
  str = str.toLowerCase();
  if ((str.includes('viagra'))||(str.includes('xxx'))) {
    return true;
  } return false;
}

3. ////////////////////////////////////////////////

/*Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, 
чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"*/


function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = `${str.slice(0, maxlength-1)}...`; 
    alert (str);
  } else {
    alert (str);
  }
}

//REVIEWED by Igor Nepipenko 04/10/19  
//Так же и в следуюущем задании , не плодите if else , вспомните о return

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return `${str.slice(0, maxlength-1)}...`; 
  } return str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);


4. /////////////////////////////////////////////////

/*Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert (extractCurrencyValue('$120') === 120 ); // true*/

function extractCurrencyValue(str) {
  if (str[0] === '$') {
    str = str.slice(1);
    return (str);
  } else {
    return (str);
  }
}

extractCurrencyValue('$120')


//REVIEWED by Igor Nepipenko 04/10/19  
//В последнем задании можно посмотреть в сторону startsWith метода строки и снова если делаете return блок else в вашем случае не нужен

function extractCurrencyValue(str) {
  if (str.startsWith('$')) {
    return +str.slice(1).trim();
  } return +str.trim();
}

extractCurrencyValue('$120');
extractCurrencyValue('$    1120');
extractCurrencyValue('     1120');

