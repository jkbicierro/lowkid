const { Client, MessageEmbed } = require('discord.js');
const eco = require("discord-economy");

const bot = new Client();

const settings = {
    prefix: '/',
    token: 'Njg2MDg2MDU4Njc2NDUzMzg1.Xp6jAA.vFAL-SbVa3nVwc6jKjf0XYUhYQU', 
    general: '682110743503437845', // Channel ID
    announce: '691109820903718993', // Channel ID
    copyright: '© ᴸᵂᴷᴰ 2020',
    svrclr: '#f08080',
    svr: 'Lowkid 낮 PH'
}

bot.on('ready', async message => {
    console.log('Pakantot.');
    bot.user.setActivity('Lowkid v0.1.9');
});

bot.on('guildMemberAdd', member => { // user
    const channel = member.guild.channels.cache.find(channel => channel.id === settings.general)
    if(!channel) return;
    const embed = new MessageEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
    .setThumbnail(member.user.displayAvatarURL())
    .setColor(settings.svrclr)
    //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png')
    .setDescription(`Welcome to **Lowkid**, ${member}. *this server is for people to socialize, and interests such as **anime, manga, games, art, and more** to be shared as one!*`);
    //channel.send(embed);
    const emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'lowkid2');
    const emoji1 = member.guild.emojis.cache.find(emoji => emoji.name === 'nani');
    channel.send({embed: embed}).then(embedMessage => {
        embedMessage.react(emoji);
        embedMessage.react(emoji1);
    });

});

bot.on('message', async message =>  //author
{
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

    if (command === 'bal') {
        var output = await eco.FetchBalance(message.author.id)
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`💶 **${message.author.username}** currently has **${output.balance}** Lowbucks!`)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
    }
    if (command === 'daily') {
        var output = await eco.Daily(message.author.id)
        if (output.updated) {
        var profile = await eco.AddToBalance(message.author.id, 200) //lb
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`💶 You claimed your daily lowbucks successfully! You now own **${profile.newbalance}** lowbucks!`)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
        } else {
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`💶 Sorry, you already claimed your daily lowbucks! But no worries, over **${output.timetowait}** you can daily again!`)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
        }
    }

    // Confess
    if (command === 'confess') {
        params = message.content.slice (8);
        
        if(!params || params.length === 0) {
            const usageembed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`***Usage:** /confess [text]*`);
            
            //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
            message.reply(usageembed);
            message.react("❌")
            return;
        }
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        const confess = bot.channels.cache.find(confess => confess.id === '701441730112651274')
        const lwkd = message.guild.emojis.cache.find(emoji => emoji.name === 'lowkid2');
        message.channel.send({embed: embed}).then(embedMessage => {
            embedMessage.react(lwkd);
            embedMessage.react("📧");
        });
        message.react("👍")
    }
    if (command === 'ajoin') 
    {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          } else {
            message.reply('You need to join a voice channel first!');
        }
    }
    if (command === 'ann') {
        const confess = bot.channels.cache.find(confess => confess.id === settings.announce)
        if(!confess) return;
        awit = message.content.slice (4);
        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(awit)
        .setColor(settings.svrclr)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        confess.send(embed);
    }

    if (command === 'info') {

        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription('**Discord:** *https://www.discord.io/lowkid/*\n**Website:** *https://www.ezire.ph/*\n**Facebook:** *https://www.facebook.com/lowkidapprel/*\n**Instagram:** *https://www.instagram.com/Lowkidapparel/*')
        message.channel.send(embed);
    }

    if (command === 'sponsor') {

        const embed = new MessageEmbed()
        .setTitle('Sponsorship Rewards')
        .setDescription('These are our sponsorship rewards if you sponsor the following you will get the reward right next to it.')
        .setColor(settings.svrclr)
        .addField('💰 50 Pesos Load', 'Custom role', false)
        .addField('💰 50 Pesos Load', 'Custom color', false)
        .addField('💰 50 Pesos Load', 'Custom emoji', false)
        .addField('💰 50 Pesos Load', 'Nickname access', false)
        .addField('💰 50 Pesos Load', '+$100,000', false)
        .addField('💰 100 Pesos Load', '+$200,000', false)
        .addField('💰 250 Pesos Load', '+$350,000', false)
        .addField('💰 500 Pesos Load', '+$600,000', false)
        .addField('💰 Nitro Classic', '+$350,000', false)
        .addField('💰 Discord Nitro', '+$600,000', false)


        message.channel.send(embed);
    }
    if (command === 'suggest') 
    {
        suggest = message.content.slice (8);
        const embed = new MessageEmbed()
        .setAuthor(`Suggested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(suggest)
        .setColor(settings.svrclr)
        message.react("👍")
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'check');
        const emoji1 = message.guild.emojis.cache.find(emoji => emoji.name === 'ekis');
        const emoji2 = message.guild.emojis.cache.find(emoji => emoji.name === 'lowkid2');
        const aaawsa = bot.channels.cache.find(aaawsa => aaawsa.id === '699895210431348836')
        aaawsa.send({embed: embed}).then(embedMessage => {
            embedMessage.react(emoji2);
            embedMessage.react(emoji);
            embedMessage.react(emoji1);
            embedMessage.react("📪");
        });
    }
    
    if (command === 'embed') 
    {
        mama = message.content.slice (6);
        const embed = new MessageEmbed()
        .setDescription(mama)
        .setColor(settings.svrclr)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
    }
    if (command === 'slap') {

        const embed = new MessageEmbed()
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL(), '')
        .setImage('https://media.giphy.com/media/reXcrlJ3OhvDq/giphy.gif')
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png')
        message.channel.send(embed);
    }
    if (command === 'kiss') {
        const embed = new MessageEmbed()
        .setAuthor(message.member.user.tag, message.author.displayAvatarURL(), '')
        .setImage('https://media.giphy.com/media/perRo4txxsFxe/giphy.gif')
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png')
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
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png')
        message.channel.send(embed);
    }
});




bot.login(settings.token);