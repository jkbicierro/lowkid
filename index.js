
const { Client, MessageEmbed } = require('discord.js');

const eco = require("discord-economy");
const client = new Client();

const settings = {
    prefix: '/',
    token: 'Njg2MDg2MDU4Njc2NDUzMzg1.XnVaww.tevCsvZZ1e26s6xcXNbSnKnRby4',
    confess: '😈｜anonymous',
    general: '🌸｜general-chat',
    svr: 'Lowkid 낮은아이 PH'
}

client.on('ready', () => {
  console.log('Pakantot.');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === settings.general)
    if(!channel) return;

    const embed = new MessageEmbed()
    .setTitle(settings.svr)
    .setThumbnail('https://i.imgur.com/w0y9l7X.png')
    .setAuthor('Lowkid', 'https://i.imgur.com/w0y9l7X.png', 'https://discord.gg/n5PGyV')
    .addField('Username:', `${member}`, true)
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

    // Economy
    if (command === 'balance') {
 
        var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} lowbucks.`);
    }
    if (command === 'daily') {
 
        var output = await eco.Daily(message.author.id)
        //output.updated will tell you if the user already claimed his/her daily yes or no.
     
        if (output.updated) {
     
          var profile = await eco.AddToBalance(message.author.id, 5)
          message.reply(`You claimed your daily coins successfully! You now own ${profile.newbalance} lowbucks.`);
     
        } else {
          message.channel.send(`Sorry, you already claimed your daily lowbucks!\nBut no worries, over ${output.timetowait} you can daily again!`)
        }
    }
    if (command === 'lowbucks') {
        message.channel.send(`under maintenance`)
    }
    // Confess
    if (command === 'confess') {
        const confess = message.guild.channels.cache.find(confess => confess.name === settings.confess)
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
    /*if (command === 'welcome') {
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
    }*/
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