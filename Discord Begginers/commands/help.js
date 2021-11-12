const Discord = require('discord.js')

module.exports = {
    run: (client, message) => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('⚙️ Résultat de votre commande :')
        .setColor('#d30000')
        .addField('🎉 **Fun** ', '`?avatar`,`?banner`')
		.addField('🥤 **Love**', '`?kiss` , `?hug`')
		.addField('📣 **Utility** ', '`?ping`,`?say`,`?botinfo`,`?clear`')
		.addField('🛠 **Admin**', '`?ban`,`?kick`,`?warn`,`?unwarn`')
        .addField('🏆 **Support us**', '`?twitter` , `?github`')
        .setFooter('By Yeikzy' , 'https://cdn.discordapp.com/attachments/653296971481612311/866109743332327444/yeikzypng.png'))

    },
    help: {

        name : 'help'
    }
}
