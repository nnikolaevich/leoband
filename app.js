var express = require('express');
var app = express();

require('./sender.js');



app.configure(function () {
    app.engine('html', require('ejs').__express) // Используем функцию "template" библиотеки underscore для рендеринга
    app.set('view engine', 'html');
    app.set('views', __dirname + "/tpl");
    //app.set("view options", {layout:'layout.ejs'});   // Файл layout.html по умолчанию будет оборачивать все шаблоны
    app.use(express.static(__dirname + "/public"));     // Делаем файлы из папки public доступными на сайте
});

app.get('/', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('index.html', {selected:[" class='current_page_item'", '', '', '', '', '']});
});

app.get('/contact', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('contact.html', {selected:['', '', '', '', '', " class='current_page_item'"]});
});
app.get('/about', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('about.html', {selected:['', " class='current_page_item'", '', '', '', '']});
});
app.get('/media', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('media.html', {selected:['', '', '', '', " class='current_page_item'", '']});
});
app.get('/news', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('news.html', {selected:['', '', '', " class='current_page_item'", '', '']});
});


app.get('/single', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('single.html', {selected:['', '', "", '', '', '']});
});

app.get('/send', function (req, res) {          // Обрабатываем запрос корневой страницы "/"
    res.render('send.html', {selected:['', '', '', '', '', ''], errorMessage:'Mail has been sent'});
});

app.get('*', function (req, res) {
    res.render('404.html', {
        selected:['', '', '', '', '', ''],
        errorMessage:"Сторінку не знайдено."
    });
    //res.render('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port"
console.log("Listening at " + port);        // Пишем в консоль, что запустились