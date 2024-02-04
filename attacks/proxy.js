const https = require('https');
const fs = require('fs');
const Discord = require("discord.js");
const disbut = require('discord.js-buttons')

const moment = require('moment');

module.exports.run = async (client, message, args) => {
    const ayarlar = require('../ayarlar.json');
    var room = ayarlar.commandroom;
	var version = ayarlar.versionbot;
	var img = ayarlar.img;
	var premium = ayarlar.rolepremium;

		if (message.channel.id != room) {
			return;
		}
		const url = message.content.split (" ")[1]
        const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
		if(!args[0]) {
			var exec = require('child_process').exec
				exec(`python3 proxy.py`, (error, stdout, stderr) => {
			});
			console.log(`[${moment.utc(Date.now())}] [*] Configurar proxy!`)
			const embed = new Discord.MessageEmbed()
			.setTitle("Instalacion exiosa!")
			.setColor('RANDOM')
			.setDescription(`El proxy se ha configurado en el archivo: **proxies.txt**`)
			message.channel.send(embed)
			message.react('✅');
			return;
		}
		if (!urlRegex.test(url)) {
            message.reply("URL invalida.");
			message.react('❌');
            return;
        } else {
			const file = fs.createWriteStream("proxies.txt")
			fs.writeFileSync('proxies.txt', ' ');
			const request = https.get(url, function(response) {
				response.pipe(file)
				console.log(`[${moment.utc(Date.now())}] [*] Configurar archivo proxy!`)
			});
			const embed = new Discord.MessageEmbed()
			.setTitle("Instalacion exitosa!")
			.setColor('RANDOM')
			.setDescription(`El proxy se ha configurado en el archivo: **proxies.txt**`)
			message.channel.send(embed)
			message.react('✅');
		}
}


module.exports.help = {
    name: "proxy",
    aliases: ["proxy"]
}