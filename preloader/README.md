# Анимация загрузки данных

Домашнее задание к занятию 3.1 «Асинхронные запросы».

## Описание 

Необходимо написать загрузку курса валют. 
К сожалению, страница отдаёт данные довольно медленно, поэтому нужно
реализовать анимацию загрузки результата.

![Demo](./demo.gif)

### Исходные данные

1. Основная HTML-разметка
2. Базовая CSS-разметка

На странице есть изображение анимации загрузки:

```html
<img id="loader" class="loader loader_active" src="https://i.postimg.cc/66SGMVs5/mcru-ajax-loader.gif">
```

У элемента есть класс *loader_active*, при котором элемент показывается на странице
(без него элемент будет скрыт).

Все данные о курсе валют необходимо подгрузить в элемент *#items*

Стандартный HTML-шаблон для валюты: 

```html
<div class="item__code">
    USD
</div>
<div class="item__value">
    32
</div>
<div class="item__currency">
    руб.
</div>
```

Для загрузки данных о курсе валют, необходимо отправить GET-запрос по адресу:
*https://students.netoservices.ru/nestjs-backend/slow-get-courses*

Данные приходят в формате JSON. Пример ответа:

```json
{
  "date": "2019-02-18 14:30:56",
  "response": {
    "Date": "2019-02-19T11:30:00+03:00",
    "PreviousDate": "2019-02-16T11:30:00+03:00",
    "PreviousURL": "//www.cbr-xml-daily.ru/archive/2019/02/16/daily_json.js",
    "Timestamp": "2019-02-18T17:00:00+03:00",
    "Valute": {
      "AUD": {
        "ID": "R01010",
        "NumCode": "036",
        "CharCode": "AUD",
        "Nominal": 1,
        "Name": "Австралийский доллар",
        "Value": 47.3467,
        "Previous": 47.2801
      },
      "AZN": {
        "ID": "R01020A",
        "NumCode": "944",
        "CharCode": "AZN",
        "Nominal": 1,
        "Name": "Азербайджанский манат",
        "Value": 39.0492,
        "Previous": 39.3188
      }
    }
  }
}
```

В данном примере в *.item__code* нужно подгрузить значение свойства *CharCode*,
в *.item__value* - *Value*

### Процесс реализации

1. Загрузите данные о курсе валют, отправив GET-запрос 
по адресу *https://students.netoservices.ru/nestjs-backend/slow-get-courses*
2. По факту загрузки скройте анимацию загрузки 

### Повышенный уровень сложности (не обязательно)

Сделайте кэширование данных. При повторном посещении страницы выдавайте данные
прошлого запроса и обновляйте их по получению данных со страницы.

В будущих лекциях мы будем касаться локального хранилища (localStorage).
Для решения этой задачи, вам потребуется познакомиться с темой уже сейчас.

Материалы для изучения:

1. [Window.localStorage](https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage)
2. [LocalStorage на пальцах](https://tproger.ru/articles/localstorage/)

## Решение задач

1. Перейти в папку задания. `cd ./async-requests/preloader`.
2. Открыть файл `task.js` в вашем редакторе кода и выполнить задание.
3. Открыть файл `task.html` в вашем браузере и убедиться в правильности выводимых результатов.
4. Добавить файл `task.js` в индекс git с помощью команды `git add %file-path%`, где %file-path% - путь до целевого файла. `git add task.js`.
5. Сделать коммит используя команду `git commit -m '%comment%'`, где %comment% - это произвольный комментарий к вашему коммиту. `git commit -m 'first commit preloader'`.
6. Опубликовать код в репозиторий homeworks с помощью команды `git push -u origin master`.
7. Прислать ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].

[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/tree/master/github
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/REAMDE.md
[6]: https://netology.ru/

*Никаких файлов прикреплять не нужно.*

Все задачи обязательны к выполнению для получения зачета. Присылать на проверку можно каждую задачу по отдельности или все задачи вместе. Во время проверки по частям ваша домашняя работа будет со статусом "На доработке".

Любые вопросы по решению задач задавайте в чате учебной группы.
