const Discord = require('discord.js');
const fs = require('fs')
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})

client.once('ready', () => {
    console.log('Ready!');
})

client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    client.user.setStatus("connect")
    client.user.setActivity(`Yeikzy` , {type: "WATCHING"})
})

const { token,prefix } = require('./config.json');

client.commands = new Discord.Collection();

client.on('message', message => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command)
  
    if (!cmd) return
    cmd.run(client, message, args)
  
  })



  client.commands = new Discord.Collection();

  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;

      let props = require(`./commands/${file}`);
      
      let commandName = file.split(".")[0];
      console.log(` ${commandName}`);
      
      client.commands.set(commandName, props);
    });
  });

client.login(token);
