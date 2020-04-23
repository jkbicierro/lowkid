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
    familyemoji: '❒',
    svr: 'Lowkid 낮 PH'
}

bot.on('ready', async message => {
    console.log('Pakantot.');
    bot.user.setActivity('Lowkid v0.3.1');
});

bot.on('guildMemberAdd', member => { // user
    const channel = member.guild.channels.cache.find(channel => channel.id === settings.general)
    if(!channel) return;
    const embed = new MessageEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
    .setThumbnail(member.user.displayAvatarURL())
    .setColor(settings.svrclr)
    .setDescription(`Welcome to **Lowkid**, ${member}. *this server is for people to socialize, and interests such as **anime, manga, games, art, and more** to be shared as one!*`);

    const lwkd = bot.emojis.cache.find(emoji => emoji.name === 'lowkid2');
    const emoji1 = bot.emojis.cache.find(emoji => emoji.name === 'nani');
    const aaawsa = bot.channels.cache.find(aaawsa => aaawsa.id === settings.general)
    aaawsa.send(embed).then(async embedMessage => {
        await embedMessage.react(lwkd);
        await embedMessage.react(emoji1);
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
    if (command === 'pay') {
 
        var user = message.mentions.users.first()
        var amount = args[1]
        
        if (!user) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** Reply the user you want to send money to!`)
            message.channel.send(embed);
            return;
        }
        if (!amount) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** Specify the amount you want to pay!`)
            message.channel.send(embed);
            return;
        }
    
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** You have fewer coins than the amount you want to transfer!`)
            message.channel.send(embed);
            return;
        } 
     
        var transfer = await eco.Transfer(message.author.id, user.id, amount)
        //message.reply(`Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
        const embed = new MessageEmbed()
  
        .setColor(settings.svrclr)
        .setDescription(`💶 Transfering coins successfully done!`)
        .addField(`${message.author.tag} Balance:`, '`'+`${transfer.FromUser} Lowbucks`+'`', false)
        .addField(`${user.tag} Balance:`, '`'+`${transfer.ToUser} Lowbucks`+'`', false)
        message.channel.send(embed); 
    }
    if (command === 'dice') { 
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`🎲 **${message.author}** roll the dice: **${Math.floor(Math.random()*6 + 1)}**`)
        message.channel.send(embed);
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
        .setDescription(`**Anonymous**\n${params}`);
        const lwkd = bot.emojis.cache.find(emoji => emoji.name === 'lowkid2');
        const aaawsa = bot.channels.cache.find(aaawsa => aaawsa.id === '701441730112651274')
        aaawsa.send(embed).then(async embedMessage => {
            await embedMessage.react(lwkd);
            await embedMessage.react('📧');
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
  
        awit = message.content.slice (4);
        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(awit)
        .setColor(settings.svrclr)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        
        const lwkd = bot.emojis.cache.find(emoji => emoji.name === 'lowkid2');
        const aaawsa = bot.channels.cache.find(aaawsa => aaawsa.id === settings.announce)
        aaawsa.send("@everyone",embed).then(async embedMessage => {
            await embedMessage.react(lwkd);
            await embedMessage.react('📢');
        });
        message.react("👍")
    }

    if (command === 'info') {

        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription('**Discord:** *https://www.discord.io/lowkid/*\n**Website:** *https://www.ezire.ph/*\n**Facebook:** *https://www.facebook.com/lowkidapprel/*\n**Instagram:** *https://www.instagram.com/Lowkidapparel/*')
        message.channel.send(embed);
        message.react("👍")
    }
    if (command === 'sponsor') {
        const embed = new MessageEmbed()
        .setTitle('Sponsorship Rewards')
        .setDescription('These are our sponsorship rewards if you sponsor the following you will get the reward right next to it.')
        .setColor(settings.svrclr)
        .addField('💰 50 Pesos Load', '`Custom role`', false)
        .addField('💰 50 Pesos Load', '`Custom color`', false)
        .addField('💰 50 Pesos Load', '`Custom emoji`', false)
        .addField('💰 50 Pesos Load', '`Nickname access`', false)
        .addField('💰 50 Pesos Load', '`+$100,000`', false)
        .addField('💰 100 Pesos Load', '`+$200,000`', false)
        .addField('💰 250 Pesos Load', '`+$350,000`', false)
        .addField('💰 500 Pesos Load', '`+$600,000`', false)
        .addField('💰 Nitro Classic', '`+$350,000`', false)
        .addField('💰 Discord Nitro', '`+$600,000`', false)
        message.channel.send(embed);
        message.react("👍")
    }
    if (command === 'help') // author
    {
        if (args[0] === 'club') {
            const embed = new MessageEmbed()
            .setDescription('**Club**\n`Usage: /families`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            message.react("👍")
            return;
        }
        if (args[0] === 'fun') {
            const embed = new MessageEmbed()
            .setDescription('**Fun**\n`Usage: /slap, /kiss`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            message.react("👍")
            return;
        }
        if (args[0] === 'economy') {
            const embed = new MessageEmbed()
            .setDescription('**Economy**\n`Usage: /(bal)ance, /daily, /dice, /dicebet, /grind, /pay`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            message.react("👍")
            return;
        }
        const embed = new MessageEmbed()
        .setDescription('**Usage:** /help [option]\n\
            `Options: club, fun, economy`')
        .setColor(settings.svrclr)
        message.channel.send(embed);
        message.react("👍")
    }
    
    if (command === 'families') {
        const embed = new MessageEmbed()
        .setDescription('**Families**')
        .setColor(settings.svrclr)
        message.guild.roles.fetch().then(roles => {
            roles.cache.forEach((current_role) => {
                if (current_role.name.includes(settings.familyemoji)) {
                    embed.addField(current_role.name, '`Members: ' + current_role.members.size + ' | Leader: nizepogi`', false);
                }
            })
        })
        .catch(error => console.log(error))
        setTimeout(() => {
            message.channel.send(embed);
            message.react("👍")
        }, 500);
    }
    if (command === 'suggest') 
    {
        suggest = message.content.slice (8);
        const embed = new MessageEmbed()
        .setAuthor(`Suggested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(suggest)
        .setColor(settings.svrclr)
        message.react("👍")
        const emoji = bot.emojis.cache.find(emoji => emoji.name === 'check');
        const emoji1 = bot.emojis.cache.find(emoji => emoji.name === 'ekis');
        const emoji2 = bot.emojis.cache.find(emoji => emoji.name === 'lowkid2');
        const aaawsa = bot.channels.cache.find(aaawsa => aaawsa.id === '699895210431348836')
        aaawsa.send(embed).then(async embedMessage => {
            await embedMessage.react(emoji2);
            await embedMessage.react(emoji);
            await embedMessage.react(emoji1);
            await embedMessage.react('📪');
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
        message.react("👍")
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