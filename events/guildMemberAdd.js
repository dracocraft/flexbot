
const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')

module.exports = async member => {
  
  
   let client = member.client;
  const ayarlar = client.ayarlar
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  
  
  
let prefix;
  
if (db.has(`prefix_${member.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${member.guild.id}`)
}
  
if (db.has(`prefix_${member.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  
  
  
  if (member.bot) return;
  
  //Tag Sistemi
    let tag = await db.fetch(`tagB_${member.guild.id}`);
    var tagK = await db.fetch(`tagKanal_${member.guild.id}`);
    var tagKD = await `${member.guild.channels.get(db.fetch(`tagKanal_${member.guild.id}`)) ? "var" : "No"}`;
  if (db.has(`tagB_${member.guild.id}`) === true) {
member.setNickname(`${tag} ${member.user.username}`)
  

  if(db.has(`tagKanal_${member.guild.id}`) === true) {
    if(tagKD === "var") {
      member.guild.channels.get(tagK).send(`**${member.user.tag}** a \`${db.fetch(`tagB_${member.guild.id}`)}\`Al dar la etiqueta establecida como, el nombre del usuario es \`${member.nickname || `${db.fetch(`tagB_${member.guild.id}`)} ${member.user.username}`}\` se establece!`)
  }}};
//Sayaç
  if (db.has(`sayac_${member.guild.id}`) === true) {
    if (db.has(`sKanal_${member.guild.id}`) === true) {
    const channel = db.fetch(`sKanal_${member.guild.id}`)
    member.guild.channels.get(channel).send(`**${member.user.tag}** Se unio al servidor! \`${db.fetch(`sayac_${member.guild.id}`)}\` deja de ser un miembro \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\`º miembro!`)
    }};
  
  //Otorol
  if (db.has(`otoR_${member.guild.id}`) === true) {
  var rol = member.guild.roles.get(db.fetch(`otoR_${member.guild.id}`));
  var rolD = `${member.guild.roles.get(db.fetch(`otoR_${member.guild.id}`)) ? "var" : "No"}`;
  
  var kanalD = `${member.guild.channels.get(db.fetch(`otoRK_${member.guild.id}`)) ? "var" : "No"}`;
    
    
  if(rolD === "var") {
  member.addRole(rol)
  
  
    if (db.has(`otoRK_${member.guild.id}`) === true) {
      if(kanalD === "var"){
    member.guild.channels.get(db.fetch(`otoRK_${member.guild.id}`)).send(`**${member.user.tag}** se ha configurado correctamente en un rol automático **${rol.name}** Sera el rol dado!`)
  }}}};
  
};
