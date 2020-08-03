const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "^";

client.login(process.env.token);

client.on('ready', () => {
    client.user.setActivity("^help || nullbyte");
    console.log("Online");
});

client.on('message', msg => {
    if (msg.content === `${prefix}` + "Test") {
        msg.channel.send("Complete")
    }
});