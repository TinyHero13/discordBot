const Discord = require("discord.js");

module.exports.run = async(bot,msg,args) =>{
  const sayMsg = args.join(" ");
  msg.delete().catch(console.error);
  msg.channel.send(sayMsg);
}