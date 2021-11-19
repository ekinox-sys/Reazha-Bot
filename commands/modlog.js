const Discord = require('discord.js')
const config = require("../config.json")
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`));
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`ekinoxmodlog_${message.guild.id}`)
if (args[0] === "sıfırla" || args[0] === "kapat") {
if(!logkanal) return message.channel.send(new Discord.MessageEmbed()                                          
  .addField("Hata",`:x:**Mod-Log Ayarlı Değil**:x:`)
  .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
  .setColor("GREEN")
  .setFooter("Reazha Bot & ! Ekinox 2021 "));
db.delete(`ekinoxmodlog_${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı:white_check_mark: ",`**Mod-Log Başarılı Bir Şekilde Sıfırlandı**:white_check_mark: `)
  .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
  .setFooter("Reazha Bot & ! Ekinox 2021 "));
return
}
if (!logk) return message.channel.send(new Discord.MessageEmbed()
  .addField(":x:Hata",`**Hatalı kullanım! Doğru Kullanım =>** ${config.prefix}modlog #kanal  `)
  .setColor("GREEN")
  .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
  .setFooter("Reazha Bot & ! Ekinox 2021 "));
db.set(`ekinoxmodlog_${message.guild.id}`, logk.id)
message.channel.send(new Discord.MessageEmbed()
  .addField("**İşlem Başarılı** :white_check_mark:  ",`**Mod-Log Kanalı** ${logk} **Olarak Ayarlandı**:white_check_mark: `)
  .addField("**İşlemi iptal etmek için => ** .mod-log sıfırla  ")
  .setColor("GREEN")
  .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
  .setFooter("Reazha Bot & ! Ekinox 2021 "))

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0 
};

exports.help = {
    name: 'mod-log',
    description: 'Moderasyon Loglarınızı Kayıt Eder',
    usage: 'mod-log'
};