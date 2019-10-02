1.///////////////////////////////////////////////////

/*Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
Открыть песочницу с тестами для задачи.
*/

let str = `hello`;

function ucFirst (str) {
	alert (str[0].toUpperCase()+str.slice(1));
}


2./////////////////////////////////////////////////

/*Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:*/

function checkSpam (str) {
	let phrase = str.toLowerCase();
	if ((phrase.indexOf('viagra') != -1)||(phrase.indexOf('xxx') != -1)) {
		alert("Спам!");
	} else {
	  alert("Не спам.");
	}
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");



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
