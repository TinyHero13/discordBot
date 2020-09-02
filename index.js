const express = require('express');
const app = express();
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const bot = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

bot.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token

bot.on('message', msg => {
  if(msg.author.bot) return;//Ignorar mensagens de outros bots
  if(msg.channel.type == "dm")  return;//Ignorar mensagens na dm
  if(!msg.content.startsWith(config.prefix)) return;//ignorar msgs q n começam com o prefixo especificado
  
  let args = msg.content.split(" ").slice(1);
  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  try{
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(bot,msg,args);
  }
  catch (err){
    console.error("Erro:"+err);
  }
});

//Escreve no console
bot.on('ready', () => {
  console.info(`Logado como: ${bot.user.tag}!`);
});