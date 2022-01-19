const Discord = require("discord.js");



module.exports.run = async (client, message, args) => {

	

    if(!message.member.hasPermission("BAN_MEMBER")) return message.channel.send("> **Pour exécuter les commandes de Modération , vous devez avoir la permission `de banir de membres.` !**");

    

    if(message.mentions.users.size === 0) return message.channel.send("> **Mentionnez l'utilisateur à bannir !**");

    

	const user = message.mentions.users.first();

	const reason = args.splice(1).join(' ') || 'Non spécifié';

	const embedB = new Discord.MessageEmbed()

	.setColor("RANDOM")

	.setTitle(`${user.tag} a été banni !`)

	.setDescription(`**Raison :** ${reason}`)

	.setFooter("404", 'https://cdn.discordapp.com/attachments/653296971481612311/833760157459808260/yeikzypng.png')

    const directmessage = `> Vous êtes banni définitivement de **${message.guild.name}** , par **${message.author.tag}** | Raison : ${reason} \n\n*Vous pouvez également être débanni seulement si la modération le souhaite !*`;

	const error = new Discord.MessageEmbed()

	.setColor(0x474747)

	.setTitle("🚫 | Vous ne pouvez pas bannir des utilisateurs ayant la permission `Administrateur` !")

	




	

	user.send(directmessage).then(member => {

	

	    message.guild.member(user).ban(reason)

		message.channel.send(embedB)

     });

};



module.exports.help = {

    name: "ban"

};