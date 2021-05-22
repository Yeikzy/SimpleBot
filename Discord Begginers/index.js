const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();


const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir('./commands/', (error, f) => {
    if(error) return console.log(error);
    console.log(`${f.length} commande${(f.length <= 1) ? '' : 's'} en chargement`);

    const commandes = f.filter(f => f.split('.').pop() === 'js');

    commandes.forEach(f => {
        const commande = require(`./commands/${f}`);
        console.log(`- ${f} chargée`);

        client.commands.set(commande.help.name, commande);
    });
});


fs.readdir('./events/', (error, f) => {
    if(error) return console.log(error);
    console.log(`${f.length} event${(f.length <= 1) ? '' : 's'} en chargement`);

    f.forEach(f => {
        const events = require(`./events/${f}`);
        const event = f.split('.')[0];
        console.log(`- ${f} chargé`);

        client.on(event, events.bind(null, client));
    });
});

client.login(token);