const { Client, MessageEmbed } = require('discord.js');
const eco = require("discord-economy");

const bot = new Client();


// main settings
const settings = {
    prefix: '/',
    token: 'Njg2MDg2MDU4Njc2NDUzMzg1.Xp6jAA.vFAL-SbVa3nVwc6jKjf0XYUhYQU', 
    general: '682110743503437845', // Channel ID
    announce: '691109820903718993', // Channel ID
    copyright: '© ᴸᵂᴷᴰ 2020',
    svrclr: '#f08080',
    red: '#ff0000',
    green: '#00ff00',
    yellow: 'ffff00',
    familyemoji: '❒',
    turfs: '696550521313558568', // category id
    turflogs: '702806543002763324', // channel id
    familiesrole: '682438247506378760', // role id
    perms: 'ADMINISTRATOR',
    slap: [
        'https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif?itemid=14358509',
        'https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
        'https://i.imgur.com/fm49srQ.gif',
        'https://i.imgur.com/4MQkDKm.gif',
        'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
        'https://i.pinimg.com/originals/78/36/e6/7836e675b2a68671895ce7f35ad224c2.gif',
        'https://i.imgur.com/o2SJYUS.gif',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b02c16d5-1b1b-4139-92e6-ca6b3d768d7a/d6wv007-5fbf8755-5fca-4e12-b04a-ab43156ac7d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwMmMxNmQ1LTFiMWItNDEzOS05MmU2LWNhNmIzZDc2OGQ3YVwvZDZ3djAwNy01ZmJmODc1NS01ZmNhLTRlMTItYjA0YS1hYjQzMTU2YWM3ZDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4MVfHXfzK83yI6L2NpBfVb2knaJtyGd7TlSEDH79bH8',
        'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif'
    ],
    kiss: [
        'https://media1.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
        'https://media1.tenor.com/images/68a37a5a1b86f227b8e1169f33a6a6bb/tenor.gif?itemid=13344389',
        'https://media2.giphy.com/media/Gj8bn4pgTocog/source.gif',
        'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
        'https://media3.giphy.com/media/KH1CTZtw1iP3W/source.gif'
    ],
    hug: [
        'https://media1.tenor.com/images/d90bb447bb3886ec1ae3c8095d614917/tenor.gif?itemid=12887232',
        'https://media3.giphy.com/media/wnsgren9NtITS/source.gif',
        'https://i.imgur.com/XEs1SWQ.gif',
        'https://media1.giphy.com/media/lrr9rHuoJOE0w/source.gif',
        'https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif',
        'https://i.imgur.com/r9aU2xv.gif',
        'https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif'
    ],
    cuddle: [
        'https://media1.tenor.com/images/4a211d5c5d076ad8795d8a82f9f01c29/tenor.gif?itemid=13221038',
        'https://media.tenor.com/images/69f015303c94bc9c35aba4e8eef4be5e/tenor.gif',
        'https://media.tenor.com/images/e90e0290b5e9025c790a3f6932477de3/tenor.gif',
        'https://thumbs.gfycat.com/PeriodicLonelyApisdorsatalaboriosa-size_restricted.gif',
        'https://pa1.narvii.com/6103/377538d76d83ec7d9d2be32870d43f2ac931a412_hq.gif'
    ],
    svr: 'Lowkid 낮 PH'
}

// dev settings
/*const settings = {
    prefix: '/',
    // change mo lang yung token para sa test bot mo
    token: 'NzAxNDA0NjgzOTAxNTk5Nzc1.XqOJVA.OKeRk-pvIKZG10PV-U3rHFMfgh8', 
    general: '701433491673317417', // Channel ID
    announce: '701433491673317417', // Channel ID
    copyright: '© ᴸᵂᴷᴰ 2020',
    svrclr: '#f08080',
    red: '#ff0000',
    green: '#00ff00',
    yellow: 'ffff00',
    familyemoji: '❒',
    turfs: '686086586642989148', // category id
    turflogs: '702813712943415321', // channel id
    familiesrole: '703103980695453737', // role id
    permission: 'ADMINISTRATOR',
    slap: [
        'https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif?itemid=14358509',
        'https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
        'https://i.imgur.com/fm49srQ.gif',
        'https://i.imgur.com/4MQkDKm.gif',
        'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
        'https://i.pinimg.com/originals/78/36/e6/7836e675b2a68671895ce7f35ad224c2.gif',
        'https://i.imgur.com/o2SJYUS.gif',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b02c16d5-1b1b-4139-92e6-ca6b3d768d7a/d6wv007-5fbf8755-5fca-4e12-b04a-ab43156ac7d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwMmMxNmQ1LTFiMWItNDEzOS05MmU2LWNhNmIzZDc2OGQ3YVwvZDZ3djAwNy01ZmJmODc1NS01ZmNhLTRlMTItYjA0YS1hYjQzMTU2YWM3ZDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4MVfHXfzK83yI6L2NpBfVb2knaJtyGd7TlSEDH79bH8',
        'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif'
    ],
    kiss: [
        'https://media1.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif',
        'https://media1.tenor.com/images/68a37a5a1b86f227b8e1169f33a6a6bb/tenor.gif?itemid=13344389',
        'https://media2.giphy.com/media/Gj8bn4pgTocog/source.gif',
        'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
        'https://media3.giphy.com/media/KH1CTZtw1iP3W/source.gif'
    ],
    hug: [
        'https://media1.tenor.com/images/d90bb447bb3886ec1ae3c8095d614917/tenor.gif?itemid=12887232',
        'https://media3.giphy.com/media/wnsgren9NtITS/source.gif',
        'https://i.imgur.com/XEs1SWQ.gif',
        'https://media1.giphy.com/media/lrr9rHuoJOE0w/source.gif',
        'https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif',
        'https://i.imgur.com/r9aU2xv.gif',
        'https://i.pinimg.com/originals/ab/58/a8/ab58a8f3ad91fd62911f84bf3d54127c.gif'
    ],
    cuddle: [
        'https://media1.tenor.com/images/4a211d5c5d076ad8795d8a82f9f01c29/tenor.gif?itemid=13221038',
        'https://media.tenor.com/images/69f015303c94bc9c35aba4e8eef4be5e/tenor.gif',
        'https://media.tenor.com/images/e90e0290b5e9025c790a3f6932477de3/tenor.gif',
        'https://thumbs.gfycat.com/PeriodicLonelyApisdorsatalaboriosa-size_restricted.gif',
        'https://pa1.narvii.com/6103/377538d76d83ec7d9d2be32870d43f2ac931a412_hq.gif'
    ],
    svr: 'Lowkid Dev'
}*/

bot.on('ready', async message => {
    console.log('Pakantot.');
    bot.user.setActivity('Lowkid v0.5.1');
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
                        if(usersInChannel === highest && highest > 0) {
                            tie = true;
                        }
                        if(usersInChannel > highest){
                            highest = usersInChannel;
                            highestrole_id = current_role.id;
                        }
                    }
                })
                if(tie === false && highest > 0) {
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
                    if(current_channel.name.substring(1, 2) === '?') // if no old owner
                        embed.setDescription("The battle for **" + current_channel.name + "** resulted in a tie, no victors!");
                    else
                        embed.setDescription("The battle for **" + current_channel.name + "** resulted in a tie, no victors! " + oldowner + " still reigns!");
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
                current_channel.guild.roles.fetch(settings.familiesrole).then(role => {
                    if(current_channel.permissionsFor(role).has("CONNECT")) {
                        // close the channels
                        current_channel.updateOverwrite(role, { CONNECT: false });
                        current_channel.members.forEach((current_member) => {
                            current_member.voice.kick() // disconnect the members
                        });
                    }
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
    .setImage('https://media.discordapp.net/attachments/682783839944572976/683582223101722624/awe.jpg')
    .setDescription(`Welcome to **Lowkid**, ${member}. *this server is for people to socialize, and interests such as **anime, manga, games, art, and more** to be shared as one!*\n\n\
        Don't forget to check <#682933389791068181> to get more info. You can also input this commands, **/help, /updates, /sponsor, etc**`);
    const lwkd = bot.emojis.cache.find(emoji => emoji.name === 'lowkid2');
    const emoji1 = bot.emojis.cache.find(emoji => emoji.name === 'nani');
    const aaawsa = bot.channels.cache.find(aaawsa => aaawsa.id === settings.general)
    aaawsa.send(embed).then(async embedMessage => {
        await embedMessage.react(lwkd);
        await embedMessage.react(emoji1);
    });
});

var authorid = [];
var diceamount = [];
var dicewithid = [];



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
        .setColor(settings.green)
        .setDescription(`💶 You claimed your daily lowbucks successfully! You now own **${profile.newbalance}** lowbucks!`)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
        } else {
        const embed = new MessageEmbed()
        .setColor(settings.red)
        .setDescription(`💶 Sorry, you already claimed your daily lowbucks! But no worries, over **${output.timetowait}** you can daily again!`)
        //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
        message.channel.send(embed);
        }
    }
    if (command === 'givemoney') {
        var user = message.mentions.users.first()
        var amount = args[1]
        if (!message.member.hasPermission(settings.perms)) return StaffOnly(message.author)
        if (!user) return Usage(command,'user','amount')
        if (!amount) return Usage(command,'user','amount')
 
        var profile = eco.AddToBalance(user.id, amount)
        const embed = new MessageEmbed()
        .setColor(settings.green)
        .setDescription(`💶 Added **${amount}** lowbucks to ${user}'s balance!`)
        message.channel.send(embed); 
    }
    if (command === 'boost') {
        var user = message.mentions.users.first()
        var boost = args[1];
        if (!message.member.hasPermission(settings.perms)) return StaffOnly(message.author)
        if (!user) return Usage(command,'user', 'no. of boost')
        if (!boost) return Usage(command,'user', 'no. of boost')
 
        const eboost = bot.emojis.cache.find(emoji => emoji.name === 'boost');
        const ecoin = bot.emojis.cache.find(emoji => emoji.name === 'coin');
        const enitro = bot.emojis.cache.find(emoji => emoji.name === 'nitro');

        boost = boost * 10000
        eco.AddToBalance(user.id, boost)
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`${enitro} ${user}**, thank you for boosting the server!**\n\n*Check <#682112634333691928> to know more about your perks, you can also type /help [premium] for more info.*`)  
        message.channel.send(embed); 

        const embed2 = new MessageEmbed()
        .setColor(settings.green)
        .setDescription(`${ecoin} ${user} just received **${boost}** lowbucks!`)  
        message.channel.send(embed2); 
        const embed3 = new MessageEmbed()
        .setColor(settings.green)
        .setDescription(`${eboost} ${user} just received <@&683270095677554750> role for boosting the server!`)  
        message.channel.send(embed3); 
    } 
    
    if (command === 'setmoney') {
        var user = message.mentions.users.first()
        var amount = args[1]
        if (!message.member.hasPermission(settings.perms)) return StaffOnly(message.author)
        if (!user) return Usage(command,'user','amount')
        if (!amount) return Usage(command,'user','amount')

        var profile = eco.SetBalance(user.id, amount)
        const embed = new MessageEmbed()
        .setColor(settings.green)
        .setDescription(`💶 Set **${amount}** lowbucks to ${user}'s balance!`)
        message.channel.send(embed); 
    }
    if (command === 'pay') {
 
        var user = message.mentions.users.first()
        var amount = args[1]
        
        if (!user) return Usage(command,'user','amount')
        if (!amount) return Usage(command,'user','amount')
    
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`💶 ${message.author}, you have fewer lowbucks than the amount you want to transfer!`)
            message.channel.send(embed);
            return;
        } 
     
        var transfer = await eco.Transfer(message.author.id, user.id, amount)
        //message.reply(`Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
        const embed = new MessageEmbed()
  
        .setColor(settings.green)
        .setDescription(`💶 Transfering coins successfully done!`)
        .addField(`${message.author.tag} Balance:`, '`'+`${transfer.FromUser} Lowbucks`+'`', false)
        .addField(`${user.tag} Balance:`, '`'+`${transfer.ToUser} Lowbucks`+'`', false)
        message.channel.send(embed); 
    }
    if (command === 'dicebet' || command === 'db' || command === 'bet') { 
        var user;
        var bet = args[1];
        user = message.mentions.users.first(); 
        if(user) {
            if(!bet) return Usage(command,'user','bet')
            var bal = await eco.FetchBalance(message.author.id)
            if(bal.balance < bet) {
                const embed = new MessageEmbed()
                .setColor(settings.red)
                .setDescription(`${message.author}, you don't have that much money.`)
                message.channel.send(embed);
                return;
            }
            if(bet < 1) {
                const embed = new MessageEmbed()
                .setColor(settings.red)
                .setDescription(`${message.author}, you can't bet less than 1 lowbuck.`)
                message.channel.send(embed);
                return;
            }
            if(user === message.author) {
                const embed = new MessageEmbed()
                .setColor(settings.red)
                .setDescription(`${message.author}, you can't offer a bet to yourself.`)
                message.channel.send(embed);
                return;
            }
            else {
                var diceidd;
                var authoridd;
                var amount;
                for(let i = 0; ; i++) {
                    if(dicewithid[i] === user.id) {
                        dicewithid[i] = void 0; //set as undefined
                    }
                    if(authorid[i] === message.author.id) {
                        dicewithid[i] = user.id;
                        diceamount[i] = bet;
                        diceidd = dicewithid[i];
                        amount = diceamount[i];
                        authoridd = authorid[i];
                        break;
                    }
                    if(authorid[i] == null) {
                        dicewithid[i] = user.id;
                        diceamount[i] = bet;
                        diceidd = dicewithid[i];
                        amount = diceamount[i];
                        authorid[i] = message.author.id;
                        authoridd = authorid[i];
                        break;
                    }
                }
                const embed = new MessageEmbed()
                .setColor(settings.yellow)
                .setDescription("<@" + authoridd + ">" + " has offered a dice bet to " + "<@" + diceidd + ">" + " for **" + amount + "** lowbucks.")
                .setFooter('Type /acceptbet or /ab to accept.', 'https://i.imgur.com/w0y9l7X.png')
                message.channel.send(embed);
            }
        } 
        else return Usage(command,'user','bet')
    }
    if (command === 'acceptbet' || command === 'ab') {

        for(let i = 0;i < dicewithid.length ; i++) {
            if(dicewithid[i] == message.author.id) {
                var bal = await eco.FetchBalance(message.author.id);
                if(bal.balance < diceamount[i]) {
                    const embed = new MessageEmbed()
                    .setColor(settings.red)
                    .setDescription(`${message.author}, you can't afford to accept this bet.`)
                    message.channel.send(embed);
                    dicewithid[i] = void 0; // reset this variable to null
                    authorid[i] = void 0; //reset this variable to null
                    return;
                }
                var balauthor = await eco.FetchBalance(authorid[i]);
                if(balauthor.balance < diceamount[i]) {
                    const embed = new MessageEmbed()
                    .setColor(settings.red)
                    .setDescription("<@" + authorid[i] + "> can't afford to accept this bet.")
                    message.channel.send(embed);
                    dicewithid[i] = void 0; // reset this variable to null
                    authorid[i] = void 0; //reset this variable to null
                    return;
                }
                var p1 = Math.floor((Math.random()*6) + 1);
                var p2 = Math.floor((Math.random()*6) + 1);
                const embed = new MessageEmbed()
                .setColor(settings.svrclr)
                .setDescription(`${message.author} rolls a dice which lands on the number **${p1}**.\n<@` + authorid[i] + `> rolls a dice which lands on the number **${p2}**.`)
                message.channel.send(embed); 

                if (p1 > p2) {
                    const embed = new MessageEmbed()
                    .setColor(settings.green)
                    .setDescription(`💶 ${message.author} has won **${diceamount[i]}** lowbucks!`);
                    message.channel.send(embed);
                    eco.AddToBalance(message.author.id,diceamount[i]);
                    eco.SubtractFromBalance(authorid[i],diceamount[i]);
                }
                else if (p1 < p2) {
                    const embed = new MessageEmbed()
                    .setColor(settings.green)
                    .setDescription(`💶 <@` + authorid[i] + `> has won **${diceamount[i]}** lowbucks!`);
                    message.channel.send(embed);
                    eco.AddToBalance(authorid[i],diceamount[i]);
                    eco.SubtractFromBalance(message.author.id,diceamount[i]);
                }
                else if (p1 === p2) {
                    const embed = new MessageEmbed()
                    .setColor(settings.yellow)
                    .setDescription(`💶 TIE!`);
                    message.channel.send(embed);
                }

                dicewithid[i] = void 0; // reset this variable to null
                authorid[i] = void 0; //reset this variable to null

                return; // end loop and end command if found
            }
        }
        const embed = new MessageEmbed()
        .setColor(settings.red)
        .setDescription(`${message.author}, you haven't received any offers for dice betting.`);
        message.channel.send(embed);

    }
    if (command === 'duel') { 
        var bet = args[0];
        if(!bet) return Usage(command,'bet')
        var bal = await eco.FetchBalance(message.author.id)
        if(bal.balance < bet) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`${message.author}, you don't have that much money.`)
            message.channel.send(embed);
            return;
        }
        if(bet < 1) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`${message.author}, you can't duel for less than 1 lowbuck.`)
            message.channel.send(embed);
            return;
        }
        if(bet > 10000) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`${message.author}, you can't duel for more than 10,000 lowbucks.`)
            message.channel.send(embed);
            return;
        }
        else {
            var p1 = Math.floor((Math.random()*3) + 1); // author
            var p2 = Math.floor((Math.random()*3) + 1); // bot
            
            if (p1 > p2) {
                eco.AddToBalance(message.author.id,bet);
                const embed = new MessageEmbed()
                .setColor(settings.green)
                .setDescription(`💶 ${message.author}, you won **${bet}** lowbucks!`)
                message.channel.send(embed);
            }
            else if (p1 < p2) { 
                eco.SubtractFromBalance(message.author.id, bet);
                const embed = new MessageEmbed()
                .setColor(settings.red)
                .setDescription(`💶 ${message.author}, you lost **${bet}** lowbucks.`)
                message.channel.send(embed);
            }
        }
    }
    if (command === 'dice') { 
        //var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
        //message.reply(`The dice rolled `+Math.floor(Math.random()*6 + 1))
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`${message.author} rolls a dice which lands on the number **${Math.floor(Math.random()*6 + 1)}**.`)
        message.channel.send(embed);
    }
  
    // Confess
    if (command === 'confess') {
        params = message.content.slice (8);
        
        if(!params || params.length === 0) return Usage(command,'text')
        
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
            .setDescription('**Fun**\n`Usage: /slap, /kiss, /hug, /cuddle`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            return;
        }
        if (args[0] === 'lowbucks') {
            const embed = new MessageEmbed()
            .setDescription('**Lowbucks**\n`Usage: /(bal)ance, /daily, /dice(bet), /(a)ccept(b)et, /duel, /work, /pay, /dice`\n\n`Staff: /givemoney, /setmoney`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            return;
        }
        if (args[0] === 'server') {
            const embed = new MessageEmbed()
            .setDescription('**Server**\n`Usage: /suggest, /confess (DM)`')
            .setColor(settings.svrclr)
            message.channel.send(embed);
            return;
        }
        const embed = new MessageEmbed()
        .setDescription('**Usage:** /help [option]\n\
            `Options: club, fun, lowbucks, server`')
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
        if(args[0]) {
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
        else return Usage(command, 'text')
    }
    
    if (command === 'embed') 
    {
        if(args[0]) {
            mama = message.content.slice (6);
            const embed = new MessageEmbed()
            .setDescription(mama)
            .setColor(settings.svrclr)
            //.setFooter(settings.copyright, 'https://i.imgur.com/w0y9l7X.png');
            message.channel.send(embed);
            message.react("👍")
        }
        else return Usage(command, 'text')
    }
    if (command === 'time') {
        message.reply(Date());
    }
    if (command === 'cuddle') 
    {
        var user;
        user = message.mentions.users.first(); 
        if(!user) return Usage(command, 'user')
        var img = settings.cuddle
        var img2 = img[Math.floor(Math.random() * img.length)]
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`${message.author} cuddles ${user}!`)
        .setImage(img2)
        message.channel.send(embed);
        return;
    }
    if (command === 'hug') 
    {
        var user
        user = message.mentions.users.first(); 
        if(!user) return Usage(command, 'user')
        var img = settings.hug
        var img2 = img[Math.floor(Math.random() * img.length)]
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`${message.author} gave ${user} a hug!`)
        .setImage(img2)
        message.channel.send(embed);
        return;
    }
    if (command === 'slap') 
    {
        var user;
        user = message.mentions.users.first(); 
        if(!user) return Usage(command, 'user')
        var img = settings.slap
        var img2 = img[Math.floor(Math.random() * img.length)]
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`${message.author} slaps ${user}!`)
        .setImage(img2)
        message.channel.send(embed);
        return;
    }
    if (command === 'kiss') {
        var user;
        user = message.mentions.users.first(); 
        if(!user) return Usage(command, 'user')
        var img = settings.kiss
        var img2 = img[Math.floor(Math.random() * img.length)]
        const embed = new MessageEmbed()
        .setColor(settings.svrclr)
        .setDescription(`${message.author} kisses ${user}'s lips.`)
        .setImage(img2)
        message.channel.send(embed);
        return;
    }
    if (command === 'work') {
        if(args[0] === 'illegal') {
            var output = await eco.Work(message.author.id, {
                failurerate: 99,
                money: Math.floor((Math.random() * 3500) + 1500),
                jobs: ['rugby smuggler', 'drug dealer', 'arms dealer', 'hitman']
            })
            if (output.earned == 0) {
   
                var moneyx = Math.floor((Math.random() * 3500) + 1500)
                var bal = await eco.FetchBalance(message.author.id)
                /*if (moneyx > bal.balance) {
                    
                    const embed = new MessageEmbed()
                    .setColor(settings.red)
                    .setDescription(`${message.author} worked as a ${output.job} and got caught so you lost **${bal.balance}** lowbucks.`)
                    message.channel.send(embed);
                    eco.Delete(message.author.id)
                    return;
                }*/
                eco.SubtractFromBalance(message.author.id,moneyx);
                const embed = new MessageEmbed()
                .setColor(settings.red)
                .setDescription(`${message.author} worked as a ${output.job} and got caught so you lost **-${moneyx}** lowbucks.`)
                message.channel.send(embed);
                return;
            }
            const embed = new MessageEmbed()
            .setColor(settings.green)
            .setDescription(`${message.author} worked as ${output.job} and earned **${output.earned}** lowbucks.`)
            message.channel.send(embed);
        }
        else if(args[0] === 'legal') {
            var output = await eco.Work(message.author.id, {
                failurerate: 50,
                money: Math.floor((Math.random() * 350) + 450),
                jobs: ['trucker', 'pizzaboy', 'barber', 'waterboy', 'waiter']
            })
            if (output.earned == 0) {
                var moneyx = Math.floor((Math.random() * 350) + 450)
                eco.AddToBalance(message.author.id, moneyx);
                const embed = new MessageEmbed()
                .setColor(settings.green)
                .setDescription(`${message.author} worked as ${output.job} and earned **${moneyx}** lowbucks.`)
                message.channel.send(embed);
                return;
            }
            const embed = new MessageEmbed()
            .setColor(settings.green)
            .setDescription(`${message.author} worked as ${output.job} and earned **${output.earned}** lowbucks.`)
            message.channel.send(embed);
        }
        else {
            const embed = new MessageEmbed()
            .setColor(settings.svrclr)
            .setDescription('**Usage:** /work\n`Options: legal, illegal`')
            message.channel.send(embed);
        }
    }
    if (command == 'delete') { //You want to make this command admin only!
 
        var user = message.mentions.users.first()
        if (!user) return message.reply('Please specify a user I have to delete in my database!')
     
        if (!message.member.hasPermission(settings.perms)) return StaffOnly(message.author)
     
        var output = await eco.Delete(user.id)
        if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')
     
        message.reply('Error: Could not find the user in database.')
     
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
    function Usage(cmd, args1, args2) {
        if (args2) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`**Usage:** /${cmd} [${args1}] [${args2}]`)
            message.channel.send(embed); 
            return;
        }
        else if (args1) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`**Usage:** /${cmd} [${args1}]`)
            message.channel.send(embed); 
            return;
        }
        else if (cmd) {
            const embed = new MessageEmbed()
            .setColor(settings.red)
            .setDescription(`**Usage:** /${cmd}`)
            message.channel.send(embed);
        }
    }

    function StaffOnly(user) {
        const embed = new MessageEmbed()
        .setDescription(`${user}, you need to be admin to execute this command!`)
        .setColor(settings.svrclr)
        message.channel.send(embed);
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
