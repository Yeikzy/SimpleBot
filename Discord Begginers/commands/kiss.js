const Discord = require('discord.js');
const nekos = require("nekos.life");
const usedCommand = new Set();
const {
    sfw: { kiss, slap },
  } = new nekos();

module.exports.run = async (client, message, args) => {

if(message.content.startsWith("?kiss")){
const { url } = await kiss().catch(() => {});

let member = await message.mentions.members.first() ||         message.guild.members.cache.get(args[0]) ||   
message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 const embedkiss = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(`${message.author} fait un bisous à ${member}!`)
   .setImage(url)
  .setTimestamp()

if(usedCommand.has(message.author.id)){ return message.channel.send("<:exclamationmark:845361080531681310> [Cooldown] , Pas si vite les bisous tu va la/le tuer attendez 5 secondes").then(message => message.delete({timeout : 3000}))
} else {
    message.channel.send(embedkiss)
    usedCommand.add(message.author.id)
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000)
 
}
}
}
module.exports.help = {
name: "kiss"
}