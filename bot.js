const Discord = require('discord.js');
const client = new Discord.Client();

client.on('redeay', () => {
     console.log('I am redeay!');
});
     
client.on('message',message => {
     if message.content === 'ping') {
      message.reply('pong');
    }
});
// HIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
