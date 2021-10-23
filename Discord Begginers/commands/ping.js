const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  const {
    color
  } = require('../config.json');


  const pingEmbed = new Discord.MessageEmbed()
  pingEmbed.setDescription(`:robot: **Ping en cours...**`)
  pingEmbed.setColor(color)

  const m = await message.channel.send(pingEmbed);
  const ping = m.createdTimestamp - message.createdTimestamp;

  const pongEmbed = new Discord.MessageEmbed()
  pongEmbed.setDescription(`:robot: La latence du bot est de **${ping}ms**`)
  pongEmbed.setColor(color)
  m.edit(pongEmbed);
}
module.exports.help = {
  name: "ping",
  category: "autre"
}
