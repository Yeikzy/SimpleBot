<p align="center"><img align="center" width="500" src="./.github/assets/header-white.png#gh-dark-mode-only"/></p>
<p align="center"><img align="center" width="500" src="./.github/assets/header-black.png#gh-light-mode-only"/></p>

<p align="center"> 
<a href="https://github.com/Yeikzy/EasyDiscordBot"><img src="https://img.shields.io/github/languages/top/Yeikzy/EasyDiscordBot"></a>
        <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/Yeikzy/EasyDiscordBot" alt="License: MIT"></a>
   <img src="https://img.shields.io/github/stars/Yeikzy/EasyDiscordBot"/>
   <img src="https://img.shields.io/github/forks/Yeikzy/EasyDiscordBot"/>

</p>
</div>

</div>

## ⚙️ Configuration

1. Clone this repository and following commands.
```
$ npm install pm2 -g

$ git clone https://github.com/Yeikzy/SimpleBot
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
}
```

4. Edit the ``index.js`` for a personal status.

```js
// status ; dnd, invisible, online, idle
// activity ; WATCHING, LISTENING, PLAYING

client.on("ready", () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    client.user.setStatus("connect")
    client.user.setActivity(`Yeikzy` , {type: "WATCHING"})
})
```

5. Launch the bot.

Open a terminal and run these commands:
```
$ pm2 start index.js
$ pm2 monit
```

## 📊 Project Activity

![Alt](https://repobeats.axiom.co/api/embed/15556c445712dbddf3baa88a4950db1faf8e6e69.svg "Repobeats analytics image")

## 💖 Support the Project

Thank you so much already for using my projects! If you want to go a step further and support my open source work, buy me a coffee:

<a href='https://ko-fi.com/Yeikzy' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

To support the project directly, feel free to open issues for icon suggestions, or contribute with a pull request!
