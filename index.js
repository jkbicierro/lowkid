
const { Client, MessageEmbed } = require('discord.js');


const client = new Client();
const token = 'Njg2MDg2MDU4Njc2NDUzMzg1.XmSFng.0uS8xLcGzXqQRye5cCkGazVnvZ4';

const PREFIX = '/';

client.on('ready', () => {
  console.log('Pakantot.');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "🌸｜general-chat")
    if(!channel) return;
    channel.send(`> *Welcome to* **Lowkid**, *${member}, please read the rules.*`);
});

client.on('message', message => 
{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]) 
    {
        case 'families':
        {
            const embed = new MessageEmbed()
            .setTitle('Families')
            .setColor(0xff0000) // COLOR SA GILID
            .setDescription('test');
            message.channel.send(embed);
            break;
        }
    }
});

client.login(token);