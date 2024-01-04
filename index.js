const dotenv = require('dotenv');
const telegramBot = require('node-telegram-bot-api');
const responses = require('./src/responses')

dotenv.config()

const token = process.env.TELEGRAM_TOKEN;

const bot = new telegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.startResponse, {
            'reply_markup': {
                'keyboard': responses.keyboard
            }
        })
    } catch (err) {
        console.error(error)
    }
});

bot.onText(/\/about/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.aboutResponse)
    } catch (error) {
        console.error(error)
    }
})

bot.onText(/\/links/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.linksResponse)
    } catch (error) {
        console.error(error)
    }
})


bot.onText(/\/help/, (msg) => {
    try {
        bot.sendMessage(msg.chat.id, responses.helpResponse, {
            'reply_markup': {
                'keyboard': responses.keyboard
            }
        })
    } catch (error) {
        console.error(error)
    }
})