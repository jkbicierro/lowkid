
const { Client, MessageEmbed } = require('discord.js');

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
    .addField('Username:', `${member}`, true)
    .setColor('RANDOM')
    .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
    .setDescription('Welcome to Lowkid, this server is for people to socialize, and interests such as anime, manga, games, art, and more to be shared as one!');
    channel.send(embed);
});

client.on('message', async message => 
{
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

    // Confess
    if (command === 'confess') {
        const confess = message.guild.channels.cache.find(confess => confess.name === settings.confess)
        if(!confess) return;
        mentionMessage = message.content.slice (8);
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .addField('Anonymous', mentionMessage, true)
        .setFooter('Usage: /confess [text].', 'https://i.imgur.com/w0y9l7X.png');
        message.delete();
        confess.send(embed);
    }
    
    if (command === 'slap') {

        const embed = new MessageEmbed()
        .setAuthor(message.member.user.tag + ' slaps ' + message.mentions.users.first(), message.author.displayAvatarURL(), '')
        .setImage('https://media.giphy.com/media/reXcrlJ3OhvDq/giphy.gif')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
        message.delete();
        message.channel.send(embed);
    }
    if (command === 'kiss') {
        const embed = new MessageEmbed()
        .setImage('https://media.giphy.com/media/perRo4txxsFxe/giphy.gif')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
        message.delete();
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
        message.delete();
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