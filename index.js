
const { Client, MessageEmbed } = require('discord.js');
//const eco = require("discord-economy");
const bot = new Client();
const settings = {
    prefix: '/',
    token: 'NzAxNDE4NTc5NzAyMzE3MDk3.Xp0mGg.XUWXq7dEBTVatvHuQ1SY2BvhrYQ',
    general: '701433491673317417',
    announce: '701433491673317417',
    regans: '701433491673317417',
    familyemoji: '❒',
    turfs: '686086586642989148', // turfs category, not channel
    svr: 'Lowkid'
}
var Guild;
bot.on('ready', () => {
    console.log('Pakantot.');
    bot.user.setActivity('ʟᴏᴡᴋɪᴅ Families Test');
    setInterval(secondTimer, 1000);
    counting = false;
});
var announced = false;
var counting = false; // to count members of turf channel
function countMembers() {
    const turfcategory = bot.channels.cache.find(category => category.id === settings.turfs);
    var turfs = turfcategory.children;
    turfs.forEach((current_channel) => {
        if(current_channel.members.size != 0 && current_channel.type === 'voice') {
            Guild.roles.fetch().then(roles => {
                var i = 0; // iterator for roles
                var highest = 0;
                var highestrole_id;
                var tie = false;
                roles.cache.forEach((current_role) => {
                    if (current_role.name.includes(settings.familyemoji)) {
                        var usersInChannel = 0;
                        current_role.members.forEach((current_member) => {
                            if(current_member.voice.channelID === current_channel.id) {
                                // this member is in the current_channel
                                usersInChannel++;
                            }
                        });
                        if(usersInChannel === highest) {
                            tie = true;
                        }
                        if(usersInChannel > highest){
                            highest = usersInChannel;
                            highestrole_id = current_role.id;
                        }
                        i++;
                    }
                })
                if(highest > 0 && tie === false) {
                    Guild.roles.fetch(highestrole_id.toString()).then(rolewinner => {
                        // highestrole_id will be winner of current_channel
                        //var newname = current_channel.name.replace(current_channel.name.substring(0, 1), rolewinner.name.substring(0, 1));
                        current_channel.setName(current_channel.name.replace(current_channel.name.substring(1, 2), rolewinner.name.substring(1, 2)));
                        const annchannel = Guild.channels.cache.find(confess => confess.id === settings.announce);
                        const embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(rolewinner.toString() + " has taken over **" + current_channel.name + "** with **" + highest + "** members!")
                        annchannel.send(embed);
                    });
                }
                else if(tie === true) {
                    var oldowner = "";
                    roles.cache.forEach((current_role) => {
                        if (current_role.name.includes(settings.familyemoji) && current_role.name.substring(1, 2) === current_channel.name.substring(1, 2)) {
                            oldowner = current_role.toString();
                        }
                    });
                    const annchannel = Guild.channels.cache.find(confess => confess.id === settings.announce);
                    const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription("The battle for **" + current_channel.name + "** resulted in a tie, no victors! " + oldowner + " still reigns!")
                    annchannel.send(embed);
                }
            });
        }
    });
}
function secondTimer() {
    var date = new Date();

    //get all voice channels of turf category
    const category = bot.channels.cache.find(category => category.id === settings.turfs);
    var channels = category.children;
    //check each channel
    channels.forEach((current_channel) => {
        if(current_channel.type === 'voice') {
            // check time if 20:00(8pm) and during the first 10 minute (8:00 and ends on 8:11)
            if(date.getHours() === 16 && date.getMinutes() < 29) {
                //open the channels
                if(!current_channel.permissionsFor(current_channel.guild.roles.everyone).has("CONNECT"))
                    current_channel.updateOverwrite(current_channel.guild.roles.everyone, { CONNECT: true });
                if(date.getMinutes() === 28 && date.getSeconds() < 2 && announced === false) {
                    announced = true;
                    const annchannel = Guild.channels.cache.find(confess => confess.id === settings.announce);
                    const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription('The turf war has now started!')
                    annchannel.send("@everyone", embed);
                }
                // if ending then start count
                if(date.getMinutes() === 28 && date.getSeconds() >= 58 && counting === false) {
                    counting = true;
                    countMembers();
                    announced = false;
                }
            }
            else {
                //close the channels
                if(current_channel.permissionsFor(current_channel.guild.roles.everyone).has("CONNECT"))
                    current_channel.updateOverwrite(current_channel.guild.roles.everyone, { CONNECT: false });

                if(counting)
                    counting = false;
            }
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
    if (command === 'ajoin') 
    {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
          } else {
            message.reply('You need to join a voice channel first!');
        }
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
        const turfs = bot.channels.cache.find(category => category.id === settings.turfs).children;
        const embed = new MessageEmbed()
        .setDescription('**Families**')
        .setColor('RANDOM')
        message.guild.roles.fetch().then(roles => {
            roles.cache.forEach((current_role) => {
                if (current_role.name.includes(settings.familyemoji)) {
                    var turfcount = 0;
                    var leader = "";
                    message.guild.roles.fetch().then(famleaders => {
                        famleaders.cache.forEach((famleaderrole) => {
                            if(famleaderrole.name.includes("Leader") && famleaderrole.name.substring(1, 2) == current_role.name.substring(1, 2)) {
                                famleaderrole.members.forEach((leadermember) => {
                                    leader = leadermember.toString();
                                })
                            }
                        })
                    })
                    turfs.forEach((current_channel) => {
                        if(current_channel.name.substring(1, 2) == current_role.name.substring(1, 2))
                            turfcount++;
                    });
                    setTimeout(() => {
                        embed.addField('**' + current_role.name + '**', 'Members: ' + current_role.members.size + '\nLeader: ' + leader + '\nPoints: ' + turfcount + "\n━━━━", false);
                    }, 1000);
                }
            })
        })
        .catch(error => console.log(error))
        setTimeout(() => {
            message.channel.send(embed);
        }, 1500);
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
