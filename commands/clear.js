const Discord = require("discord.js");

exports.run = async (bot, msg, args) => {
  if (!msg.member.permissions.has("MANAGE_MESSAGES")) return msg.reply("Gay");
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100000)
    return msg.reply("Coloca um número aí");

  const fetched = await msg.channel.messages.fetch({
    limit: deleteCount + 1
  });
  msg.channel.bulkDelete(fetched);
  msg.channel
    .send(`**${args[0]} mensagens limpas nesse chat!**`)
    .then(msg => msg.delete({ timeout: 5000 }))
    .catch(error =>
      console.log(`Não foi possível deletar as mensagens: ${error}`)
    );
};
