//    Работаем со строками

//    Задание 1. Вычитайте строку из input. Высчитайте ее длину. Выведите результат.

document.getElementById('button1').onclick = showMas;
var out1 = document.getElementById('out1');

function showMas() {
  var masinp = document.getElementById('input1').value;
  out1.innerHTML = (masinp.length);
}

//    Задание 2. Создайте массив, который содержит имена изображений в определенной папке. Запустите цикл по массиву и выведите все изображения на страницу. Подсказка, для вывода изображения используйте тег <img src=”xxxx”> где xxx – путь к файлу.

document.getElementById('button2').onclick = showImg;
var out2 = document.getElementById('out2');
var img = ["evernote", "dropbox", "github", "wordpress", "google_drive", "stackoverflow"];

function showImg() {
  for (var i = 0; i < img.length; i++) {
    out2.innerHTML += `<img src="images/${img[i]}.png">`;
  }
}
