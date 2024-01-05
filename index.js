const dotenv = require('dotenv');
const telegramBot = require('node-telegram-bot-api');
const responses = require('./src/responses')

dotenv.config()

const token = process.env.TELEGRAM_TOKEN;

const bot = new telegramBot(token, {polling: true});

bot.on('polling_error', console.error) //Error handler in case of Syntax errors

bot.onText(/\/start/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.start.text, {
            'reply_markup': {
                'keyboard': responses.start.options.keyboard
            }
        })
    } catch (error) {
        console.error(error)
    }
});

bot.onText(/\/about/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.about.text)
    } catch (error) {
        console.error(error)
    }
})

bot.onText(/\/links/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.links.text)
    } catch (error) {
        console.error(error)
    }
})


bot.onText(/\/help/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.help.text, {
            'reply_markup': {
                'keyboard': responses.help.options.keyboard
            }
        })
    } catch (error) {
        console.error(error)
    }
})