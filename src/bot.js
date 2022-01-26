const { Telegraf } = require('telegraf');
const data = require('./CONFIG.json');
const { mathValidation } = require('./valid');

const bot = new Telegraf(data.token);

bot.start(msg => msg.reply('Welcome'));

bot.on('message', (msg) => {
    if (msg.message.chat.id === -615198225) {
        if (mathValidation(msg.message.text)) {
            msg.telegram.sendMessage('-1001737589132', `${msg.message.chat.id}\n${msg.message.text}`);
        }
    }
    // console.log(msg.message.text);
});

bot.launch();