
const { Client, MessageEmbed } = require('discord.js');


const client = new Client();
const rainbow = require("./rainbow.json")

const settings = {
    prefix: '/',
    token: 'Njg2MDg2MDU4Njc2NDUzMzg1.XnVaww.tevCsvZZ1e26s6xcXNbSnKnRby4',
    svr: 'Lowkid 낮은아이 PH'
}

client.on('ready', () => {
  console.log('Pakantot.');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "general")
    if(!channel) return;
    //channel.send(`> Welcome to **Lowkid**, *${member}, please read the rules.*`);

    const embed = new MessageEmbed()
    .setTitle(settings.svr)
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor('Lowkid', 'https://i.imgur.com/w0y9l7X.png', 'https://discord.gg/n5PGyV')
    .addField('Username:', message.member.user.tag, true)
    .addField('Member ID:', message.member.id, true)
    .setColor('RANDOM')
    .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
    .setDescription('Welcome to Lowkid this server is for people to socialize, and interests such as anime, manga, games, art, and more to be shared as one!');
    channel.send(embed);
});

client.on('message', async message => 
{
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

    if (command === 'confess') {
        const confess = message.guild.channels.cache.find(confess => confess.name === "confession")
        if(!confess) return;
        mentionMessage = message.content.slice (8);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setDescription('Usage: /confess [text].')
        .setColor('RANDOM')
        .addField('Anonymous', mentionMessage, true)
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        message.delete();
        confess.send(embed);
    }

    if (command === 'welcome') {
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor('Lowkid', 'https://i.imgur.com/w0y9l7X.png', 'https://discord.gg/n5PGyV')
        .addField('Username:', message.member.user.tag, true)
        .addField('Member ID:', message.member.id, true)
        .setColor('RANDOM')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
        .setDescription('Welcome to Lowkid this server is for people to socialize, and interests such as anime, manga, games, art, and more to be shared as one!');
        message.channel.send(embed);
    }
    if (command === 'avatar') {
        var user;
        user = message.mentions.users.first(); 
        if (!user) { 
            if (!args[0]) { 
                user = message.author;
                GetUserAvatar(user);
            } 
            else { 
                var id = args[0]
                client.fetchUser(id).then(user => {
                    GetUserAvatar(user) 
                })
                .catch(error => console.log(error))
            }
        } 
        else { 
            GetUserAvatar(user);
        }
    }
    if (command === 'rainbow') {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(rainbow.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(rainbow.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = rainbow.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, rainbow.rainbowdelay); 
            message.channel.send(rainbow.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if (command === 'stoprainbow')
    {
        setTimeout(function () 
        {
            process.exit()
        }, 1000);
        message.channel.send(rainbow.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
    }
    function GetUserAvatar(user) {
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .setImage(user.displayAvatarURL())
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
        message.channel.send(embed);
    }
});




client.login(settings.token);