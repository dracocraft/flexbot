const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Bot añadido al servidor',
  '**Penta DDOX** da convivencia y doxeo a los servidores',
  'El bot tiene docenas de comandos'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'ayuda | ' + client.guilds.size + ' presentador | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' usuario');
})
