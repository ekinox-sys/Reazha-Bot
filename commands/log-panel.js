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
  
  **[${prefix}modlog <#Kanal>](https://ekinoxdev.site)** Mod-Log kurar. (logkur komutunu kullana bilirsiniz)
  **[${prefix}logkur](https://ekinoxdev.site)** Log kanallarını kurar. (mod-log'tan bağımsızdır)
  `)
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** |  | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    

  exports.conf = {
    aliases: ['log', 'logpanel', 'lp','logs'], 
    permLevel: 0, 
    kategori: "Genel" 

  };

  exports.help = {
    name: 'log-panel',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'log-panel', 
  };