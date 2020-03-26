
const { Client, MessageEmbed } = require('discord.js');
const ssettings = require("./your_settings.json")

const bot = new Client();

const settings = {
    prefix: '/',
    token: 'Njg2MDg2MDU4Njc2NDUzMzg1.XnVaww.tevCsvZZ1e26s6xcXNbSnKnRby4',
    general: '682110743503437845',
    announce: '691109820903718993',
    regans: '683531557482397712',
    svr: 'Lowkid 낮은아이 PH'
}

bot.on('ready', () => {
  console.log('Pakantot.');
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.id === settings.general)
    if(!channel) return;

    const embed = new MessageEmbed()
    .setTitle(settings.svr)
    .setThumbnail('https://i.imgur.com/w0y9l7X.png')
    .addField('Username:', `${member}`, true)
    .setColor('RANDOM')
    .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
    .setDescription('Welcome to Lowkid, this server is for people to socialize, and interests such as anime, manga, games, art, and more to be shared as one!');
    channel.send(embed);
});

bot.on('message', async message => 
{
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

    // Confess
    if (command === 'confess') {
        const confess = message.guild.channels.cache.find(confess => confess.id === settings.general)
        if(!confess) return;
        mentionMessage = message.content.slice (8);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .addField('Anonymous', mentionMessage, true)
        .setThumbnail('https://i.imgur.com/w0y9l7X.png')
        .setFooter('Usage: /confess [text].', 'https://i.imgur.com/w0y9l7X.png');
        message.delete();
        confess.send(embed);
    }
    if (command === 'cnn') {
        const confess = message.guild.channels.cache.find(confess => confess.id === settings.announce)
        if(!confess) return;
        awit = message.content.slice (4);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .addField('Announcement', awit, true)
        .setThumbnail('https://i.imgur.com/w0y9l7X.png')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        confess.send(embed);
    }
    if (command === 'register') {
        const confess = message.guild.channels.cache.find(confess => confess.id === settings.regans)
        if(!confess) return;
        awit = message.content.slice (9);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .setDescription('Registration')
        .addField('Event:', awit, true)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        message.delete();
        confess.send(embed);
    }
    if (command === 'answer') {
        const confess = message.guild.channels.cache.find(confess => confess.id === settings.regans)
        if(!confess) return;
        awitize = message.content.slice (7);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .setDescription('Question and Answer')
        .addField('Answer:', awitize, true)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        message.delete();
        confess.send(embed);
    }
    if (command === 'meh') {
        // Send "pong" to the same channel
        tae = message.content.slice (4);
        message.delete();
        message.author.send(`*${message.author.username} ${tae}.*`);
    }
    if (command === 'do') {
        // Send "pong" to the same channel
        taetae = message.content.slice (3);
        message.delete();
        message.reply(taetae+'.');
    }
    if (command === 'amsg') 
    {
        mama = message.content.slice (5);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setDescription(mama)
        .setColor('RANDOM')
        .setThumbnail('https://i.imgur.com/w0y9l7X.png')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
    }
    if (command === 'slap') {

        const embed = new MessageEmbed()
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL(), '')
        .setImage('https://media.giphy.com/media/reXcrlJ3OhvDq/giphy.gif')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
        message.channel.send(embed);
    }
    if (command === 'kiss') {
        const embed = new MessageEmbed()
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL(), '')
        .setImage('https://media.giphy.com/media/perRo4txxsFxe/giphy.gif')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
        message.channel.send(embed);
    }

    if (command === 'lwkdcolor') 
    {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args)
        if(!rolez) return message.channel.send(ssettings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(ssettings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = ssettings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, 180); //Delay
            message.channel.send(ssettings.messageresponse.success).catch(err=> message.channel.send("No response"))
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
                bot.fetchUser(id).then(user => {
                    GetUserAvatar(user) 
                })
                .catch(error => console.log(error))
            }
        } 
        else { 
            GetUserAvatar(user);
        }
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




bot.login(settings.token);
