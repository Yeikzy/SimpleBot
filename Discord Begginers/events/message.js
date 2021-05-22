const { prefix, hellolist } = require('../config.json');

module.exports = async (client, message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    hellolist.forEach(element => {
        if(message.content.toLowerCase().includes(element.toLowerCase())) {
            message.react('👋');
        }
    });

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = client.commands.get(command);

    if(!cmd) return;

    cmd.run(client, message, args);
};