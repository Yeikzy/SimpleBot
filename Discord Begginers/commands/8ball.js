const Discord = require("discord.js")

module.exports = async (client, message, args) => {
	if (!args[1]) return message.channel.send("**:8ball: | Veuillez entrez une question**");
	
    var replies = ["Oui", "Peut-être", "Je ne sais pas", "Exactement", "Oui c'est ça", "Je crois que non", "Bien sur que oui", "Bien sur que non","Je crois que oui", "Je suis pas sur"];
	const res = Math.floor((Math.random() * replies.length));
  
  message.channel.send(replies[res]);
};

module.exports.help = {
	name: '8ball'
};