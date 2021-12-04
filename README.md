<div align="center">
   <a href="https://discord.gg/W7cY7FH" target="_blank"><img src="https://github.com/Yeikzy/Yeikzy/blob/main/yeikzy-readme.jpg" align="center" /></a>
</div>

# How do I use it ?

1. Clone this repository in your webserver root
Simply type the following commands:
```
$ npm install pm2 -g

$ git clone https://github.com/Yeikzy/EasyDiscordBot
```

2. Use this commands:

```js 
$ npm install discord.js
```

3. Edit the ``config.json`` and replace the token and the prefix

```js
{
    "prefix": "yourprefix",
    "token": "yourtoken",
    "hellolist": ["yo ","Salut", "Hello", "Bonjour", "wsh", "slt", "bjr", "cc", "coucou", "wesh", "bonsoir", "hey"] 
}
```

4. Edit the ``events/ready.js`` and put your server id.

```js

module.exports = async(client)=> {
    let guild = client.guilds.cache.get("yourserverid");
    let setPresence = async() => {
        console.log('check')
        guild = await guild.fetch().catch(() => guild);
        await client.user.setPresence({status: 'dnd', activity: {name: guild.memberCount + ' membres ', type: 'WATCHING'}});
    	await client.user.setStatus('dnd')
    }
    setPresence();
    setInterval(setPresence, 30000);
}
```

5. Use the executor.cmd

```Double click on executor.cmd```

# Contact Me

For the slightest problem, you can contact me by my [Discord](https://discord.gg/QW4fSZJW4N) you can mention me and I will get back to you.
