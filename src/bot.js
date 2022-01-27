const { Telegraf } = require('telegraf');
const data = require('./CONFIG.json');
const { mathValidation, checkMathTeacher, 
    ukrValidation, checkUkrTeacher, 
    engValidation, checkEngTeacher } = require('./valid');

const bot = new Telegraf(data.token);

bot.start((msg) => msg.reply(`Chat id: ${msg.message.chat.id}`));

bot.command('chat_id', (msg) => msg.reply(`Chat ID: ${msg.message.chat.id}`));

bot.on('message', (msg) => {
    const messageText = msg.message.text;
    try {
        if (msg.message.chat.id === -1001439034080) {
            if (mathValidation(messageText)) {
                console.log(msg);
                msg.telegram.sendMessage('-663264400', `${checkMathTeacher(messageText)}\n\n${messageText}`);
            }

            if (ukrValidation(messageText)) {
                console.log(msg);
                msg.telegram.sendMessage('-1001728399269', `${checkUkrTeacher(messageText)}\n\n${messageText}`);
            }

            if (engValidation(messageText)) {
                console.log(msg);
                msg.telegram.sendMessage('-1001457853319', `${checkEngTeacher(messageText)}\n\n${messageText}`);
            }
        }
    } catch (err) {
        console.log(err);
    } 
    // console.log(msg.message.text);
});

bot.launch();