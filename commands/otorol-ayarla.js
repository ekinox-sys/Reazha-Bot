const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const config = require("../config.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || config.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:by:752306236606906399>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:by:752306236606906399>  **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @rol #kanal\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`<a:by:752306236606906399>   **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Reazha Otorol▬▬▬▬▬▬▬▬▬
║► 752305081545916438> Otorol Aktif Edildi. :white_check_mark:                              
║► 752305081545916438>  **${rol}** Olarak Güncelledim!   :white_check_mark:    
║► 752305081545916438>  Otorol Kanalını **${kanal}** Olarak Güncelledim! :white_check_mark: 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['otorol-ayarla']
  };
  
  exports.help = {
    name: 'otorol-ayarla',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'otorol-ayarla'
  };