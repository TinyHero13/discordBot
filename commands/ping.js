const Discord = require("discord.js");

module.exports.run = async(bot,msg,args) =>{
  const pingMsg = args.join(" ");
  msg.reply('pong :flushed:'); 
}