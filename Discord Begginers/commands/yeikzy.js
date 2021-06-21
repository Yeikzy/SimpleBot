const Discord = require('discord.js');

module.exports.run = async (client, message) => {
    const user = message.author;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#eab3ff')
	.setFooter('Yeikzy', 'https://i.imgur.com/Qs9Kczr.png')
	.addFields(
		{ name: 'Created by Yeikzy', value: '[Lien](https://discord.gg/wzjFNpTbwj)' },
	)
	.setTimestamp()
	.setAuthor(`${user.username}`, `${user.avatarURL()}`);

message.channel.send(exampleEmbed);

};

module.exports.help = {
    name: 'Yeikzy',
};
