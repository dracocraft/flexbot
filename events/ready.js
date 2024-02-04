const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Activado, comando descargado exitosamente!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Conectado al nombre ${client.user.username}!`);
  client.user.setStatus("online");
};
