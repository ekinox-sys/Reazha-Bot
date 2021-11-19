const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yeterli yetkiye sahip değilsin `Rolleri yönet` ")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("Rolü vereceğim kişiyi yazmadın, doğru kullanım `=> .rolver <@Kisi> <@Rol> `")

const rol = message.mentions.roles.first()
if (!rol) return message.channel.send("Vereceğim rolü yazmadın, doğru kullanım `=> .rolver <@Kisi> <@Rol> `")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.add(rol.id).then(a=> {
message.channel.send("İşlem başarılı, rol verildi.")
}).catch(err => message.channel.send("Rolü veremedim."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol',
  description: 'Rol verir.',
  usage: 'rolver'
};