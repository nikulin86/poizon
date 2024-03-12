const { Telegraf, Markup, Extra } = require('telegraf');
require("dotenv").config();

const token = process.env.TOKEN


const bot = new Telegraf(token);

// старт
bot.command('start', (ctx) => {
    // ctx.reply('Чат - бот активирован. Выберите интересующую категорию');
    ctx.replyWithPhoto({
        source: './img/Free_Shoe_Box_Mockup.png'
    },

        {
            caption: 'Чат - бот активирован. Выберите интересующую категорию',
            parse_mode: 'Markdown',
            // ...Markup.inlineKeyboard([
            //     Markup.button.callback('Сделать заказ 💹', 'plain'),
            //     Markup.button.callback('Рассчитать стоимость покупки 💰', 'italic'),
            //     Markup.button.callback('Часто задаваемые вопросы ❓', 'question'),
            // ])
            reply_markup: {
                keyboard: [
                    [{ text: "Сделать заказ 💹" }],
                    [{ text: "Рассчитать стоимость покупки 💰" }],
                    [{ text: "Часто задаваемые вопросы ❓", callback_data: "question" }]
                ]
            }
        }
        // { caption: 'Чат - бот активирован. Выберите интересующую категорию' }
    );

});

// сделать заказ
bot.hears('Сделать заказ 💹', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/wm8sA347xQw.jpg'
    },

        {
            caption: 'Вы знаете, как пользоваться приложением Poizon или Вам нужна инструкция?',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Знаю 👌", callback_data: "data1" },
                        { text: "Нужна инструкция 📰", callback_data: "data4" }
                    ]
                ]
            }
        }
    )

});

// рaсчитать стоимость
bot.hears('Рассчитать стоимость покупки 💰', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/wm8sA347xQw.jpg'
    },
        {
            caption: 'Рассчитать стоимость заказа можно тут:',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Написать менеджеру 👨‍💻", url: `https://t.me/artur211N` },
                    ]
                ]
            }
        }
    )

});

// вопросы
bot.hears('Часто задаваемые вопросы ❓', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/wm8sA347xQw.jpg'
    },
        {
            caption: 'Вы знаете, как пользоваться приложением Poizon или Вам нужна инструкция?',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [

                    [{ text: "Как сделать заказ ? 🛒", callback_data: "data4" }]
                    ,
                    [{ text: "Товар оригинальный ? 😎", callback_data: "data5" }]
                    ,
                    [{ text: "Что входит в стоимость ? 💸", callback_data: "data6" }]
                    ,
                    [{ text: "Kак отследить доставку ?  🚚", callback_data: "data7" }]
                    ,
                    [{ text: "Сроки доставки ? ⏲️", callback_data: "data8" }]
                    ,
                    [{ text: "Условия сотрудничества 🕴️", callback_data: "data9" }]
                    ,


                ]
            }
        }
    )
});


// сделать заказ
bot.action('data1', (ctx) => {
    ctx.reply('Ура! Новые вещи уже ждут Вас!' + '\n' +
        '' + '\n' +
        'Для оформления заказа напишите нашему менеджеру' + '\n' +
        'В сообщении необходимо указать:' + '\n' +
        '' + '\n' +
        '- Ссылку на товар(ы)' + '\n' +
        '- Размер(ы)' + '\n' +
        '- Стоимость товара в ¥' + '\n' +
        '- Ваш город', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Написать менеджеру 👨‍💻", url: `https://t.me/artur211N` },
                ]
            ]
        }
    })
});


// 'Сейчас мы поможем Вам разобраться
bot.action('data4', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/wm8sA347xQw.jpg'
    },
        {
            caption: 'Сейчас мы поможем Вам разобраться!' + '\n' +
                'Сначала скачайте приложение' + '\n' +
                'Ссылки для скачивания:' + '\n' +
                '' + '\n' +
                'Для IOS' + '\n' +
                'https://apps.apple.com/ru/app/%E5%BE%97%E7%89%A9-%E5%BE%97%E5%88%B0%E8%BF%90%E5%8A%A8x%E6%BD%AE%E6%B5%81x%E5%A5%BD%E7%89%A9/id1012871328' + '\n' +
                '' + '\n' +
                'Для Android' + '\n' +
                'https://www.anxinapk.com/rj/12201303.html' + '\n' +
                '' + '\n' +
                'Если всё понятно, нажмите 👇',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Понятно, далее ⏭️", callback_data: "next1" },
                    ]
                ]
            }
        }
    )
});

bot.action('next1', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/msg1156098774-139804.jpg'
    },
        {
            caption: '1. Внизу приложения выберите «значок сумки»' + '\n' +
                '2. В поисковую строку впишите на английском языке название товара' + '\n' +
                '3. Выберете подходящий товар' + '\n' +
                '' + '\n' +
                'Как это сделать? Смотрите фото!',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Готово, далее ⏭️", callback_data: "next2" },
                    ]
                ]
            }
        }
    )
});


bot.action('next2', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/msg1156098774-139836.jpg'
    },
        {
            caption: 'Посмотрите, есть ли Ваш размер в наличии' + '\n' +
                'Чтобы это сделать без регистрации, зайдите по ссылке в браузере' + '\n' +
                'Выберете подходящий товар' + '\n' +
                'т.е. вам нужно скопировать ссылку, убрать лишние символы и вставить в поисковую строку' + '\n' +
                'А далее, смотрим размер',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Что дальше?", callback_data: "next3" },
                    ]
                ]
            }
        }
    )
});

bot.action('next3', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/photo1708842871.jpeg'
    },
        {
            caption: 'Для заказа Вам нужно скопировать ссылку и прислать её нам! ' + '\n' +
                'В сообщении нашему менеджеру нужно указать:' + '\n' +
                '- Ссылку на товар(ы)' + '\n' +
                '- Размер(ы)' + '\n' +
                '- Стоимость товара в ¥' + '\n' +
                '- Ваш город' + '\n' +
                'А теперь пишите нашему менеджеру',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Сделать заказ", callback_data: "data1" },
                    ]
                ]
            }
        }
    )
});

// оригинальность

bot.action('data5', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/scale_1200.jpg'
    },
        {
            caption: 'Мы доставляем только оригинальные товары!' + '\n' +
                '' + '\n' +
                'Перед отправкой они проходят проверку качества.' + '\n' +
                '' + '\n' +
                'В проверку входит:' + '\n' +
                '' + '\n' +
                '1) Сверка штрихкода соответствия' + '\n' +
                '2) Пробивание Qr-код сертификата на существование данного поставщика на Poizon' + '\n' +
                '3) Ультрафиолетовый осмотр' + '\n' +
                '4) Визуальная экспертиза',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Другой вопрос ❓", callback_data: "question" },
                    ]
                ]
            }
        }
    )
});
// что входит в стоимость

bot.action('data6', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/Free_Shoe_Box_Mockup.png'
    },
        {
            caption: 'В итоговую стоимость входит:' + '\n' +
                '' + '\n' +
                '➖ Cтоимость самого товара конвертированная с рубля на юань' + '\n' +
                '➖ Выкуп его с маркетплейса' + '\n' +
                '➖ Доставка со склада Poizon на наш склад в Китае ' + '\n' +
                '➖ Доставка до склада в Москве' + '\n' +
                'Доставка до вашего города, до удобного вам пункта выдачи' + '\n' +
                '' + '\n' +
                'Обычная - 1500 руб/кг (3-4 недели)' + '\n' +
                'Ускоренная - 4000 руб/кг (7-10 дней)' + '\n' +
                '' + '\n' +
                '➖ Страховка товара' + '\n' +
                '➖ Наша комиссия' + '\n' +
                '' + '\n' +
                'При заказе менее 500¥ - 499 руб' + '\n' +
                'При заказе более 500¥ - 799 руб',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Другой вопрос ❓", callback_data: "question" },
                    ]
                ]
            }
        }
    )
});
// как отследить доставку

bot.action('data7', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/Free_Shoe_Box_Mockup.png'
    },
        {
            caption: 'Менеджер обязательно сообщит о каждом статусе Вашего заказа!' + '\n' +
                '' + '\n' +
                'Контакт менеджера:' + '\n' +
                '' + '\n' +
                'https://t.me/artur211N' + '\n' +
                '' + '\n' +
                '⏲️ Время работы нашей команды' + '\n' +
                'Ускоренная - 4000 руб/кг (7-10 дней)' + '\n' +
                '' + '\n' +
                'с 09:00 - 00:00 по МСК',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Другой вопрос ❓", callback_data: "question" },
                    ]
                ]
            }
        }
    )
});
// сроки доставки

bot.action('data8', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/Free_Shoe_Box_Mockup.png'
    },
        {
            caption: 'В любой город России и СНГ' + '\n' +
                '' + '\n' +
                'Ускоренная доставка занимает: 7-10 дней' + '\n' +
                '' + '\n' +
                'Обычная доставка занимает: 3-4 недели',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Другой вопрос ❓", callback_data: "question" },
                    ]
                ]
            }
        }
    )
});


// условия
bot.action('data9', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/Free_Shoe_Box_Mockup.png'
    },
        {
            caption: '➖ Время работы нашей команды с 09:00 - 21:00 по МСК' + '\n' +
                '' + '\n' +
                '➖ Доставка только оригинальной продукции с сайта Poizon' + '\n' +
                '' + '\n' +
                '➖ Каждый товар проходит проверку на оригинальность от наших экспертов' + '\n' +
                '' + '\n' +
                '➖ Мы страхуем товар от брака и потери' + '\n' +
                '' + '\n' +
                'Желаем отличного шопинга!',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [

                        { text: "Другой вопрос ❓", callback_data: "question" },
                    ]
                ]
            }
        }
    )
});

bot.action('question', (ctx) => {
    ctx.replyWithPhoto({
        source: './img/wm8sA347xQw.jpg'
    },
        {
            caption: 'Вы знаете, как пользоваться приложением Poizon или Вам нужна инструкция?',
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [

                    [{ text: "Как сделать заказ ? 🛒", callback_data: "data4" }]
                    ,
                    [{ text: "Товар оригинальный ? 😎", callback_data: "data5" }]
                    ,
                    [{ text: "Что входит в стоимость ? 💸", callback_data: "data6" }]
                    ,
                    [{ text: "Kак отследить доставку ?  🚚", callback_data: "data7" }]
                    ,
                    [{ text: "Сроки доставки ? ⏲️", callback_data: "data8" }]
                    ,
                    [{ text: "Условия сотрудничества 🕴️", callback_data: "data9" }]
                    ,


                ]
            }
        }
    )
})


bot.launch();