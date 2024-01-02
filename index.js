const dotenv = require('dotenv');
const telegramBot = require('node-telegram-bot-api')

dotenv.config()

const token = process.env.TELEGRAM_TOKEN;

const bot = new telegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Welcome! Here is the list of available commands:', {
        'reply_markup': {
            'keyboard': [['/about', '/links'], ['/help']]
        }
    })
});

bot.onText(/\/about/, (msg) => {
    bot.sendMessage(msg.chat.id, `Hi! My name is Stepan. I'm trying to become a node.js developer and this is my first telegram bot` )
})

bot.onText(/\/links/, (msg) => {
    bot.sendMessage(msg.chat.id,
        `Here are some of my links:
        \nGithub: https://github.com/StepanBoichuk
        \n Linkedin: https://www.linkedin.com/in/stepan-boichuk-95aa4a248/ 
         `)
})


bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Here is the list of available commands:', {
        'reply_markup': {
            'keyboard': [['/about', '/links'], ['/help']]
        }
    })
})