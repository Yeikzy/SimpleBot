const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
        if(!message.member.hasPermission("KICK_MEMBERS")) return 
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send((new Discord.MessageEmbed)
        .setDescription('Il faut que tu indiques un nombre de messages à supprimer <:red_circle:804851648111443969>'))

        if (count < 1 || count > 999) return message.channel.send((new Discord.MessageEmbed)
        .setDescription('Le nombre de message doit être compris entre 1 et 99 <:red_circle:804851648111443969>'))
        
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send((new Discord.MessageEmbed)
        .setDescription(`${size - 1} messages ont été supprimés avec succès <:yes:804853910669885460> !`)).then(sent => sent.delete({timeout: 1e3})
        .setColor("f68fff"))
    },


    module.exports.help = {
        name: "clear"
    };
