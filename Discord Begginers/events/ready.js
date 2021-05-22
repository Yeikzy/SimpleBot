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