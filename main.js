const Discord = require('discord.js')
const TOKEN = "OTM3MjAzNjMxOTY5NjY1MDg0.YfYU5g.8xdMVfmfrw1_OaNF_4bhihcw_6Y"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Loged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!youtube"){
        message.reply("Hello world")
    }
})

const welcomeChannelId = "933800308319076353"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
})

client.login(TOKEN)
