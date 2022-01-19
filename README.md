<div align="center">
   <a href="https://discord.gg/W7cY7FH" target="_blank"><img src="https://github.com/Yeikzy/EasyDiscordBot/blob/main/workflows/readme-header.png" align="center" /></a>

 <a href="https://discord.gg/kmpnWBzDCa"><img src="https://img.shields.io/discord/903412602921705544.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2 "></a>
        <img src="https://github.com/zaida04/guilded.js/actions/workflows/ci.yml/badge.svg" alt="CI">
        <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a><br>
    </p>
</div>

</div>

# How do I use it ?

1. Clone this repository and following commands or run botinstall.cmd.
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

5. Use the executor.cmd

```Double click on executor.cmd```

# Analytics

![Alt](https://repobeats.axiom.co/api/embed/15556c445712dbddf3baa88a4950db1faf8e6e69.svg "Repobeats analytics image")

# Contributors

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Yeikzy"><img src="https://avatars.githubusercontent.com/u/48528776?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yeikzy</b></sub></a><br /><a href="https://github.com/Yeikzy/EasyDiscordBot" title="Code">💻</a> <a href="#example-Yeikzy" title="Examples">💡</a> <a href="https://github.com/Yeikzy/EasyDiscordBot/pulls" title="Tests">⚠️</a> <a href="#tutorial-Yeikzy" title="Tutorials">✅</a> <a href="#ideas-yeikzy" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Miche-Desti"><img src="https://avatars.githubusercontent.com/u/91158131?v=4" width="100px;" alt=""/><br /><sub><b>Miche</b></sub></a><br /><a href="https://github.com/Yeikzy/EasyDiscordBot" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# Contact Me

For the slightest problem, you can contact me by my [Discord](https://discord.gg/QW4fSZJW4N) you can mention me and I will get back to you.
