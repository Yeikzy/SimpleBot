const Discord = require('discord.js');
const superagent = require('superagent'); 
const usedCommand = new Set();

module.exports.run = async (client, message, args) => {

    if(message.content.startsWith("?hug")){

let victim = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
const { body } = await superagent
.get("https://nekos.life/api/v2/img/hug");
const embedhug = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Un câlin c'est mignon")
.setDescription(`${message.author} fait un câlin à ${victim}`)
.setImage(body.url)
.setTimestamp()

if(usedCommand.has(message.author.id)){ return message.channel.send("<:exclamationmark:845361080531681310> [Cooldown] , Pas si vite les calins tu va la/le tuer attendez 5 secondes").then(message => message.delete({timeout : 3000}))
} else {
    message.channel.send(embedhug)
    usedCommand.add(message.author.id)
    setTimeout(() => {
        usedCommand.delete(message.author.id);
    }, 5000)

}
}
}
module.exports.help = {
name: "hug",

}