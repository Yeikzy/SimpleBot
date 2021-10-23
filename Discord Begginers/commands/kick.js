const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const {
        colorError,
        colorSucces
    } = require('../config.json');


    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        const notperm = new Discord.MessageEmbed()
        notperm.setAuthor('Erreur')
        notperm.setColor(colorError)
        notperm.setDescription(`:x: Vous n'avez pas la permission d'expulser un membre`)
        return message.channel.send(notperm)
    }

    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        const notpermbot = new Discord.MessageEmbed()
        notpermbot.setAuthor('Erreur')
        notpermbot.setColor(colorError)
        notpermbot.setDescription(`:x: Vous ne m'avez pas accordé la permission d'expulser des membres`)
        return message.channel.send(notpermbot)
    }

    if (message.mentions.users.size === 0) {
        const notmention = new Discord.MessageEmbed()
        notmention.setAuthor('Erreur')
        notmention.setColor(colorError)
        notmention.setDescription(`:x: Vous n'avez pas mentionné de membre à expulser`)
        return message.channel.send(notmention)
    }

    const kick = message.guild.member(message.mentions.users.first());

    if (!kick) {
        const nottrv = new Discord.MessageEmbed()
        nottrv.setAuthor('Erreur')
        nottrv.setColor(colorError)
        nottrv.setDescription(`:x: Je n'ai pas trouvé l'utilisateur sur le serveur`)
        return message.channel.send(nottrv)
    }

    const ava = message.mentions.members.first();

    await kick.kick().then(member => {
        const kicked = new Discord.MessageEmbed()
        kicked.setAuthor(`Succès`)
        kicked.setColor(colorSucces)
        kicked.setDescription(`${ava} a bien été expulsé du serveur par ${message.author}`)
        return message.channel.send(kicked)
    })
}
module.exports.help = {
    name: "kick",
    category: "mod"
}