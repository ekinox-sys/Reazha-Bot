const Discord = require('discord.js')
const config = require('../config.json') 

exports.run = async (client, message, args) => {
    var prefix = config.prefix;


//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setImage(
    "https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif"
  )
  .setDescription(`**Bulunan kategori:** \`Yetkili Panel\` \n `)
  .addField('Kategoriler:', `
  
  **[${prefix}ban <@Kişi> <Sebep>](https://ekinoxdev.site)** 
  **[${prefix}kick <@Kişi> <Sebep>](https://ekinoxdev.site)**
  **[${prefix}rolver <@Kişi> <@Rol>](https://ekinoxdev.site)**
  **[${prefix}rolal <@Kişi> <@Rol>](https://ekinoxdev.site)**
  **[${prefix}özeloda <@Kişi>](https://ekinoxdev.site)**
  **[${prefix}modlog <#kanal>](https://ekinoxdev.site)**
  **[${prefix}sil <Miktar>](https://ekinoxdev.site)**
  **[${prefix}otorol-ayarla <@Rol> <#kanal>](https://ekinoxdev.site)**
  **[${prefix}otorol-sıfırla](https://ekinoxdev.site)**
  **[${prefix}mute](https://ekinoxdev.site)**
    `)
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** |  | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    

  exports.conf = {
    aliases: ['deneme', 'deneme', 'deneme','deneme'], 
    permLevel: 0, 
    kategori: "Genel" 

  };

  exports.help = {
    name: 'yetkili-panel',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'yetkili-panel', 
  };