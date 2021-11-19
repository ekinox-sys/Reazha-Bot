const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yeterli yetkiye sahip değilsin `Rolleri yönet` ")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("Rolü alacağım kişiyi yazmadın, doğru kullanım `=> .rolal <@Kisi> <@Rol> `")

const rol = message.mentions.roles.first()
if (!rol) return message.channel.send("alacağım rolü yazmadın, doğru kullanım `=> .rolal <@Kisi> <@Rol> `")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.remove(rol.id).then(a=> {
message.channel.send("İşlem başarılı, rol alındı.")
}).catch(err => message.channel.send("Rolü alamadım."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol',
  description: 'Rol alır.',
  usage: 'rolal'
};