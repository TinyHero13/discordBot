const Discord = require("discord.js");

module.exports.run = async(bot,msg,args) =>{
    const embed = new Discord.MessageEmbed()
    .setTitle('Comandos')
    .setColor('#000000')
    .setDescription('Prefixo: # \n #anime \n #ping \n #help \n #say');
    await msg.channel.send(embed);
}



