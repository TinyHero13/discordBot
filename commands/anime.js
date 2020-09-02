const Discord = require('discord.js');

exports.run = async (bot, msg, args) => {

var list = [
  'https://i.imgur.com/KkTfVqu.gif',
  'https://pa1.narvii.com/7214/9a377cbe4b9e7f7dabc8b788e556e42e97ba2cf3r1-400-224_hq.gif'
];
  
var frases = [
  'Anime legal',
  'Já viu anime hoje?'
]

var rand = list[Math.floor(Math.random() * list.length)];
var rfrases = frases[Math.floor(Math.random() * frases.length)];
let user = msg.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
return msg.reply('Veja um anime');
}

  let avatar = msg.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Anime')
        .setColor('#000000')
        .setDescription(`${msg.author} ${rfrases} ${user}`)
        .setImage(rand)
        .setThumbnail(avatar)
        .setFooter('Oi')
        .setAuthor(msg.author.tag, avatar);
  await msg.channel.send(embed);
}