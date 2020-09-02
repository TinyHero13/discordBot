const Discord = require("discord.js");

module.exports.run = async(bot,msg,args) =>{
  msg.content.startsWith('kick') 
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`Kicaar: ${taggedUser.username}`);
    } else {
      msg.reply('Marca alguem aí!');
    }
}