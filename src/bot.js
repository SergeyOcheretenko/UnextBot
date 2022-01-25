const { Telegraf } = require('telegraf');
const data = require('./CONFIG.json');

const bot = new Telegraf(data.token);

bot.start(msg => msg.reply('Welcome'));

bot.on('message', (msg) => {
    msg.telegram.sendMessage('@test_group_for_bots', `${msg.message.chat.id}\n${msg.message.text}`);
    // console.log(msg.message.text);
});

bot.launch();