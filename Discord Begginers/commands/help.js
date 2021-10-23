const Discord = require('discord.js')

module.exports = {
    run: (client, message) => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('⚙️ Résultat de votre commande :')
        .setColor('#4baf70')
        .addField('🛠 **Admin**', '`?ban`,`?kick`,`?mute`,`?unmute`')
        .addField('🛡 **Sécuriter** ', '`?antiRaidon`,`?antiRaidoff`')
        .addField('☎️ **Support**', '`?support`')
        .setFooter('By Yeikzy' , 'https://cdn.discordapp.com/attachments/653296971481612311/866109743332327444/yeikzypng.png'))

    },
    help: {

        name : 'help'
    }
}