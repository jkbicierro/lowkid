
const { Client, MessageEmbed } = require('discord.js');
//const eco = require("discord-economy");
const bot = new Client();
const settings = {
    prefix: '/',
    token: 'NzAxNDE4NTc5NzAyMzE3MDk3.Xp0mGg.XUWXq7dEBTVatvHuQ1SY2BvhrYQ',
    general: '686135103952519168',
    announce: '686135103952519168',
    regans: '686135103952519168',
    familyemoji: '❒',
    turfs: '686086586642989148', // turfs category, not channel
    svr: 'Lowkid'
}

bot.on('ready', () => {
    console.log('Pakantot.');
    bot.user.setActivity('ʟᴏᴡᴋɪᴅ Families Test');
    //setInterval(secondTimer, 1000);
});
var Guild;
bot.on("guildCreate", guild => {
    Guild = guild;
});
function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
}
var counting = false; // to count members of turf channel
var usersInChannel = Create2DArray(50); // make sure to clear the values after counting (in case of new and deleted fams)
function countMembers() {
    const category = bot.channels.cache.find(category => category.id === settings.turfs);
    var channels = category.children;
    var i = 0; // iterator for channels
    channels.forEach((current_channel) => {
        Guild.roles.fetch().then(roles => {
            var x = 0; // iterator for currentrole
            roles.cache.forEach((current_role) => {
                if (current_role.name.includes(settings.familyemoji)) {
                    usersInChannel[i][x] = 0;
                    current_role.members.forEach((current_member) => {
                        if(current_member.voice.channelID === current_channel.id) {
                            // this member is in the current_channel
                            usersInChannel[i][x]++;
                        }
                    });
                    x++;
                }
            })
        });
        i++;
    });
    setTimeout(() => {
        i = 0; // reset iterator
        channels.forEach((current_channel) => {
            Guild.roles.fetch().then(roles => {
                x = 0; //reset also
                roles.cache.forEach((current_role) => {
                    if (current_role.name.includes(settings.familyemoji)) {
                        //var maxRow = usersInChannel.map(function(row){ return Math.max.apply(Math, row); });
                        if(Math.max.apply(null, usersInChannel[i]) === usersInChannel[i][x]) {
                            // then this is the winner

                        }
                        x++;
                    }
                });
            });
            i++;
        });
    }, 2000);
}
function secondTimer() {
    var date = new Date();

    //get all voice channels of turf category
    const category = bot.channels.cache.find(category => category.id === settings.turfs);
    var channels = category.children;
    //check each channel
    channels.forEach((current_channel) => {
        // check time if 20:00(8pm) and during the first minute (8:00 and ends on 8:01)
        if(date.getHours() === 20 && date.getMinutes() < 10) {
            //open the channels
            if(!current_channel.permissionsFor(current_channel.guild.roles.everyone).has("CONNECT"))
                current_channel.updateOverwrite(current_channel.guild.roles.everyone, { CONNECT: true });
            
            // if ending then start count
            if(date.getMinutes === 9 && date.getSeconds() >= 58 && !counting) {
                counting = true;
                countMembers();
            }
        }
        else {
            //close the channels
            if(current_channel.permissionsFor(current_channel.guild.roles.everyone).has("CONNECT"))
                current_channel.updateOverwrite(current_channel.guild.roles.everyone, { CONNECT: false });

            if(counting)
                counting = false;
        }
    });
}
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
    Guild = message.guild;
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

    /*if (command === 'balance') {
        var output = await eco.FetchBalance(message.author.id)
        //const confess = message.guild.channels.cache.find(confess => confess.id === settings.announce)
        //if(!confess) return;
        const embed = new MessageEmbed()
        .setTitle(`${message.author.tag}`)
        .setColor('RANDOM')
        .addField('Balance', `${output.balance}`, true)
        .setThumbnail('https://i.imgur.com/w0y9l7X.png')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
    }
    if (command === 'bal') {
        var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} lowbucks.`);
    }
    if (command === 'daily') {
    
        var output = await eco.Daily(message.author.id)
    
        if (output.updated) {
    
        var profile = await eco.AddToBalance(message.author.id, 2) //lb
        message.reply(`You claimed your daily lowbucks successfully! You now own ${profile.newbalance} lowbucks.`);
    
        } else {
        message.channel.send(`Sorry, you already claimed your daily lowbucks!\nBut no worries, over ${output.timetowait} you can daily again!`)
        }
    }*/
    if (command === 'fg') {
        const confess = message.guild.channels.cache.find(confess => confess.id === settings.announce)
        if(!confess) return;
        awewe = message.content.slice (3);
        const embed = new MessageEmbed()
        .setTitle(awewe)
        .setColor('RANDOM')
        .setDescription('React anything to enter giveaway')
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        confess.send(embed);
    }
    if (command === 'fgf') {
        const confess = message.guild.channels.cache.find(confess => confess.id === settings.announce)
        if(!confess) return;
        awwe = message.content.slice (4);
        const embed = new MessageEmbed()
        .setTitle('Giveaway Ended')
        .setColor('RANDOM')
        .addField('Lowkid Giveaway Winner:', awwe, true)
        .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
        confess.send(embed);
    }
    // Confess
    if (command === 'confess') {
        params = message.content.slice (8);
        
        if(!params || params.length === 0) {
            const usageembed = new MessageEmbed()
            .setTitle(settings.svr)
            .setColor('RANDOM')
            .addField('Usage:', '/confess [text]', true)
            .setThumbnail('https://i.imgur.com/w0y9l7X.png')
            .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png');
            message.reply(usageembed);
            return;
        }
        const embed = new MessageEmbed()
        .setTitle(settings.svr)
        .setColor('RANDOM')
        .addField('Anonymous', params, true)
        .setThumbnail('https://i.imgur.com/w0y9l7X.png')
        .setFooter('Usage: /confess [text].', 'https://i.imgur.com/w0y9l7X.png');
        //message.delete();
        const confess = bot.channels.cache.find(confess => confess.id === settings.general)
        confess.send(embed);
    }
    if (command === 'ajoin') 
    {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          } else {
            message.reply('You need to join a voice channel first!');
        }
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
    if (command === 'families') {
        var embedlist = "";
        const linebreak = "\n";
        const separator = " | Members: "
        message.guild.roles.fetch().then(roles => {
            roles.cache.forEach((current_role) => {
                if (current_role.name.includes(settings.familyemoji)) {
                    embedlist = embedlist.concat(current_role.name, separator, current_role.members.size, linebreak);
                }
            })
        })
        .catch(error => console.log(error))
        setTimeout(() => {
            const embed = new MessageEmbed()
            .setTitle(settings.svr)
            .setColor('RANDOM')
            .addField("Families", embedlist, false)
            .setFooter('Copyright LWKD 2020', 'https://i.imgur.com/w0y9l7X.png')
            message.channel.send(embed);
        }, 500);
    }

    if(command === 'testopen') {
        const category = bot.channels.cache.find(category => category.id === settings.turfs);
        var channels = category.children;

        channels.forEach((current_channel) => {
            if(!current_channel.permissionsFor(current_channel.guild.roles.everyone).has("CONNECT"))
                current_channel.updateOverwrite(current_channel.guild.roles.everyone, { CONNECT: true });
        });
    }
    if(command === 'testclose') {
        const category = bot.channels.cache.find(category => category.id === settings.turfs);
        var channels = category.children;
        channels.forEach((current_channel) => {
            if(current_channel.permissionsFor(current_channel.guild.roles.everyone).has("CONNECT"))
                current_channel.updateOverwrite(current_channel.guild.roles.everyone, { CONNECT: false });
        });
    }
    if(command === 'ee') {
        countMembers();
        setTimeout(() => {
            var max = usersInChannel[0].reduce(function(a, b) {
                return Math.max(a, b);
            });
            message.reply(max);
        }, 500);
    }
    if(command === 'aa') {
        countMembers();
        setTimeout(() => {
            var max = usersInChannel[1].reduce(function(a, b) {
                return Math.max(a, b);
            });
            message.reply(max);
        }, 500);
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
