const { Client, MessageEmbed } = require('discord.js');
const eco = require("discord-economy");

const bot = new Client();

const settings = {
    prefix: '/',
    token: 'NzAxNDA0NjgzOTAxNTk5Nzc1.XqJt8w.x3YmAY47DlgnFyuSuStw6uDQhg0', 
    general: '703103351549722664', // Channel ID
    announce: '703103351549722664', // Channel ID
    copyright: '© ᴸᵂᴷᴰ 2020',
    svrclr: '#f08080',
    familyemoji: '❒',
    turfs: '686086586642989148', // category id
    turflogs: '702813712943415321', // channel id
    familiesrole: '703103980695453737', // role id
    svr: 'Lowkid 낮 PH'
}

bot.on('ready', async message => {
    console.log('Pakantot.');
    bot.user.setActivity('Lowkid v0.4.1');
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
            current_channel.guild.roles.fetch().then(roles => {
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
                    current_channel.guild.roles.fetch(highestrole_id.toString()).then(rolewinner => {
                        // highestrole_id will be winner of current_channel
                        //var newname = current_channel.name.replace(current_channel.name.substring(0, 1), rolewinner.name.substring(0, 1));
                        current_channel.setName(current_channel.name.replace(current_channel.name.substring(1, 2), rolewinner.name.substring(1, 2)));
                        const msgchnl = current_channel.guild.channels.cache.find(confess => confess.id === settings.turflogs);
                        const embed = new MessageEmbed()
                        .setColor(settings.svrclr)
                        .setDescription(rolewinner.toString() + " has taken over **" + current_channel.name + "** with **" + highest + "** members!")
                        msgchnl.send(embed);
                    });
                }
                else if(tie === true && highest > 0) {
                    var oldowner = "";
                    roles.cache.forEach((current_role) => {
                        if (current_role.name.includes(settings.familyemoji) && current_role.name.substring(1, 2) === current_channel.name.substring(1, 2)) {
                            oldowner = current_role.toString();
                        }
                    });
                    const msgchnl = current_channel.guild.channels.cache.find(confess => confess.id === settings.turflogs);
                    const embed = new MessageEmbed()
                    .setColor(settings.svrclr)
                    .setDescription("The battle for **" + current_channel.name + "** resulted in a tie, no victors! " + oldowner + " still reigns!")
                    msgchnl.send(embed);
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
    var Guild = category.guild;
    //check each channel
    channels.forEach((current_channel) => {
 
        if(current_channel.type === 'voice') {
            // check time if 20:00(8pm) and during the first 10 minute (8:00 and ends on 8:11)
            if(date.getHours() === 20 && date.getMinutes() < 10) {
                //open the channels
                current_channel.guild.roles.fetch(settings.familiesrole).then(role => {
                    if(!current_channel.permissionsFor(role).has("CONNECT"))
                        current_channel.updateOverwrite(role, { CONNECT: true });
                })

                if(date.getMinutes() === 0 && date.getSeconds() < 2 && announced === false) {
                    announced = true;
                    const annchannel = current_channel.guild.channels.cache.find(confess => confess.id === settings.announce);
                    const embed = new MessageEmbed()
                    .setColor(settings.svrclr)
                    .setDescription('The territory war has now started! Read <#702804654915846204> for more information.')
                    annchannel.send("@everyone", embed);
                }
                // if ending then start count
                if(date.getMinutes() === 9 && date.getSeconds() >= 58 && counting === false) {
                    counting = true;
                    countMembers();
                    announced = false;
                }
            }
            else {
                //close the channels
                current_channel.guild.roles.fetch(settings.familiesrole).then(role => {
                    if(current_channel.permissionsFor(role).has("CONNECT"))
                        current_channel.updateOverwrite(role, { CONNECT: false });
                })
                .catch(console.error);

                if(counting)
                    counting = false;
            }
        
        }
    });
}
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
        var user;
        user = message.mentions.users.first(); 
        if (!user) { 
            if (!args[0]) { 
                var output = await eco.FetchBalance(message.author.id)
                const embed = new MessageEmbed()
                .setColor(settings.svrclr)
                .setDescription(`💶 **${message.author}** currently has **${output.balance}** lowbucks!`)
                //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
                message.channel.send(embed);
            } 
        } 
        else { 
            var output = await eco.FetchBalance(user.id)
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${user}** currently has **${output.balance}** lowbucks!`)
            //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
            message.channel.send(embed);
        }
    }
    if (command === 'leaderboard') {
 
        //If you use discord-economy guild based you can use the filter() function to only allow the database within your guild
        //(message.author.id + message.guild.id) can be your way to store guild based id's
        //filter: x => x.userid.endsWith(message.guild.id)
     
        //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
        if (message.mentions.users.first()) {
     
          var output = await eco.Leaderboard({
            filter: x => x.balance > 50,
            search: message.mentions.users.first().id
          })
          message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on my leaderboard!`);
     
        } else {
     
          eco.Leaderboard({
            limit: 3, //Only takes top 3 ( Totally Optional )
            filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
          }).then(async users => { //make sure it is async
     
            if (users[0]) var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
            if (users[1]) var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
            if (users[2]) var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
 
            message.channel.send(`My leaderboard:
     
    1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
    2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
    3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`)
     
          })
     
        }
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
    if (command === 'givemoney') {
        var user = message.mentions.users.first()
        var amount = args[1]
        if (!user) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** Reply the user you want to give money to!`)
            message.channel.send(embed);
            return;
        }
        if (!amount) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** Specify the amount you want to give!`)
            message.channel.send(embed);
            return;
        }
        var profile = eco.AddToBalance(user.id, amount)
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`💶 Added **${amount}** lowbucks to ${user}'s balance!`)
        message.channel.send(embed); 
    }
    if (command === 'setmoney') {
        var user = message.mentions.users.first()
        var amount = args[1]
        if (!user) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** Reply the user you want to set money to!`)
            message.channel.send(embed);
            return;
        }
        if (!amount) {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription(`💶 **${message.author.username}** Specify the amount you want to set!`)
            message.channel.send(embed);
            return;
        }
        var profile = eco.SetBalance(user.id, amount)
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`💶 Set **${amount}** lowbucks to ${user}'s balance!`)
        message.channel.send(embed); 
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
    if (command === 'dicebet') { 
        var user;
        var bet = args[1]
        user = message.mentions.users.first(); 
        if(user) {
            if(!bet) {
                const embed = new MessageEmbed()
                .setColor(settings.svrclr)
                .setDescription('**Usage:** /dicebet [user] [bet]\n`ex. /dicebet @Lowkid 1000`')
                message.channel.send(embed); 
            } else {
                var p1 = Math.floor(Math.random()*6 + 1);
                var p2 = Math.floor(Math.random()*6 + 1);
                const embed = new MessageEmbed()
                .setColor(settings.svrclr)
                .setDescription(`${message.author} roll the dice: ${p1} ${user} roll the dice: ${p2}`)
                message.channel.send(embed); 
                //if (p1 = p2) return message.reply('TIE')
                if (p1 > p2) return message.reply(`winner:${message.author}`)
                else if (p1 < p2) return message.reply(`winner:${user}`)
                else if (p1 = p2) return message.reply('TIE')
            }
        } else {
            if(!args[0]) {
                const embed = new MessageEmbed()
                .setColor(settings.svrclr)
                .setDescription('**Usage:** /dicebet [user] [bet]\n`ex. /dicebet @Lowkid 1000`')
                message.channel.send(embed); 
            }
        }
    }
 
    if (command === 'dice') { 
        //var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
        //message.reply(`The dice rolled `+Math.floor(Math.random()*6 + 1))
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`🎲 **${message.author.username}** roll the dice: **${Math.floor(Math.random()*6 + 1)}**`)
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
            return;
        }
        if (args[0] === 'fun') {
            const embed = new MessageEmbed()
            .setDescription('**Fun**\n`Usage: /slap, /kiss`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            return;
        }
        if (args[0] === 'lowbucks') {
            const embed = new MessageEmbed()
            .setDescription('**Lowbucks**\n`Usage: /(bal)ance, /daily, /dicebet, /grind, /pay, /dice`\n\n`Staff: /givemoney, /setmoney`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            return;
        }
        const embed = new MessageEmbed()
        .setDescription('**Usage:** /help [option]\n\
            `Options: club, fun, lowbucks`')
        .setColor(settings.svrclr)
        message.channel.send(embed);
    }
    
    if (command === 'families') {
        const turfs = bot.channels.cache.find(category => category.id === settings.turfs).children;
        const embed = new MessageEmbed()
        .setDescription('**Families**')
        .setColor(settings.svrclr)
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
    if (command === 'time') {
        message.reply(Date());
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
