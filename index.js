const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "^";

client.login(process.env.token);

client.on('ready', () => {
    client.user.setActivity("^help || nullbyte");
    console.log("Online");
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'join-logs');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });
  


//______________________________________________4 commands here
//COMMANDS

client.on('message', msg => {
    if(msg.content === `${prefix}` + 'sc561345') {
        const appembed = {
            color: 0x0099ff,
            title: 'Applications',
            url: 'https://discord.gg/xQ66k5q',
            author: {
                name: 'NullBot',
                icon_url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
                url: 'https://discord.gg/xQ66k5q',
            },
            description: 'Applications',
            thumbnail: {
                url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
            },
            fields: [
                {
                    name: 'Staff Application (CLOSED)',
                    value: 'https://forms.gle/vu288Put6iH6uA3GA',
                    url: "https://forms.gle/vu288Put6iH6uA3GA",
                },
                {
                    name: 'Support Applications (CLOSED)',
                    value: 'https://docs.google.com/forms/d/e/1FAIpQLSfraisKIUfa2HokbDfxRwZxqc3Wq6a_uHVFIHEgeO103RvIMA/viewform',
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfraisKIUfa2HokbDfxRwZxqc3Wq6a_uHVFIHEgeO103RvIMA/viewform",
                    inline: false,
                },
                
            ],
            image: {
                url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
            },
            timestamp: new Date(),
            footer: {
                text: '#Applications',
                icon_url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
            },
        };
        
        msg.channel.send({ embed: appembed });
            
    }
})




client.on('message', msg => {
    if(msg.content === `${prefix}` + 'msg' ) {
        msg.channel.send("");
    }
});

client.on('message', msg => {
    if (msg.content === `${prefix}` + 'dispatch') {
        msg.channel.send("https://www.youtube.com/watch?v=kzPgHFyUM54&t=474s");
    }
});

client.on('message', msg => {
    if (msg.content.startsWith('https://discord.gg/')) {
      msg.delete()
      msg.reply("Do not send server invites!")
    }
  });4
//__________________________________________________
//COMMANDS

client.on('message', msg => {
    if (msg.content === `${prefix}` + 'civ1') {
        msg.channel.send("https://www.youtube.com/watch?v=Zu0PCGoOP2s&t=366s");
    }
});

client.on('message', msg => {
    if (msg.content === `${prefix}` + 'civ2') {
        msg.channel.send("https://www.youtube.com/watch?v=Pozs8DzoN7A&t=38s");
    }
});

client.on('message', msg => {
    if (msg.content === `${prefix}` + 'leo') {
        msg.channel.send("Bolo: https://www.youtube.com/watch?v=W4OjhS69DSA, Signal 100 & Panic: https://www.youtube.com/watch?v=M7nivQiTOWI, Person Search: https://www.youtube.com/watch?v=zEBDnUchWhM&t=41s, vehicle search: https://www.youtube.com/watch?v=FHZ9PuHhANI, Status: https://www.youtube.com/watch?v=zGkW8P9-R7s&t=8s");
    }
});

client.on('message', msg => {
    if (msg.content === `${prefix}` + 'help') {
        const helpembed = {
            color: 0x0099ff,
            title: 'Commands',
            url: 'https://discord.gg/xQ66k5q',
            author: {
                name: 'NullBot',
                icon_url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
                url: 'https://discord.gg/xQ66k5q',
            },
            description: 'Prefix: ^',
            thumbnail: {
                url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
            },
            fields: [
                {
                    name: 'youtube channel',
                    value: 'youtube',
                },
                {
                    name: 'Civilian Part 1',
                    value: 'civ1',
                    inline: false,
                },
                {
                    name: 'Civilian Part 2',
                    value: 'civ 2',
                    inline: false,
                },
                {
                    name: 'All LEO RELATED VIDEOS',
                    value: 'leo',
                    inline: false,
                },
                {
                    name: 'Welcome command',
                    value: 'gif welcome',
                    inline: false,
                },
                {
                    name: 'Dispatch Video',
                    value: 'dispatch',
                    inline: false,
                },
                {             
                },
        ],      
            image: {
                url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
            },
            timestamp: new Date(),
            footer: {
                text: 'Commands',
                icon_url: 'https://yt3.ggpht.com/a/AATXAJxnJtrv6tfhRIfazxKu8gHmrAppIvpi6mURUujYHQ=s100-c-k-c0xffffffff-no-rj-mo',
            },
        };
        
        msg.channel.send({ embed: helpembed });
    }
});

client.on('message', msg => {
    if (msg.content === `${prefix}` + 'youtube') {
        msg.channel.send("https://www.youtube.com/channel/UCt5VMb9JNaARARJNvFMbiHQ");
                                                                                      
    }
});

client.on('message', msg => {
    if (msg.content === `^` + 'gif welcome') {
        msg.channel.send("Welcome Gif: https://tenor.com/view/welcome-gif-10939070");
                                                                                      
    }
});

