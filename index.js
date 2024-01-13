const dotenv = require('dotenv');
const telegramBot = require('node-telegram-bot-api');
const responses = require('./src/responses')

dotenv.config()

const token = process.env.TELEGRAM_TOKEN;

const bot = new telegramBot(token, {polling: true});

bot.on('polling_error', console.error); //Error handler in case of Syntax errors

Object.entries(responses).forEach(([command, response]) => {
    const regexpCommand = new RegExp(command);
    bot.onText(regexpCommand, (msg) => {
        try {
            bot.sendMessage(msg.chat.id, response.text, {
                'reply_markup': {
                    'keyboard': response.options.keyboard
                }
            })
        }catch (error) {
            console.error(error);
        }
    })
});
