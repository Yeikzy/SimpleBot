const Discord = require('discord.js'); 
        module.exports.run = async (client, message, args) => {



let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;


message.channel.send(`Voici l'avatar de ${member.user.tag} \n${member.user.displayAvatarURL({dynamic: true, size: 1024 })}`)

}