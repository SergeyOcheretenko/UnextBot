const { Telegraf } = require('telegraf');
const data = require('./CONFIG.json');
const { mathValidation, checkMathTeacher } = require('./valid');

const bot = new Telegraf(data.token);

bot.start((msg) => msg.reply(`Chat id: ${msg.message.chat.id}`));

bot.command('chat_id', (msg) => msg.reply(`Chat ID: ${msg.message.chat.id}`));

bot.on('message', (msg) => {
    const messageText = msg.message.text;
    if (msg.message.chat.id === -1001439034080) {
        console.log(messageText.substr(0, 10), mathValidation(messageText));
        if (mathValidation(messageText)) {
            msg.telegram.sendMessage('-663264400', `${checkMathTeacher(messageText)}\n\n${messageText}`);
        }
    }
    // console.log(msg.message.text);
});

bot.launch();