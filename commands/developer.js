const Discord = require('discord.js')
const config = require('../config.json') 

exports.run = async (client, message, args) => {
    var prefix = config.prefix;

//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** | **" +   + "** | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** | **" +   + "** | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** | **" +   + "** | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** | **" +   + "** | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** | **" +   + "** | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)
    return message.channel.send(Sahip)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Bulunan kategori:** \`Developer Commands\` \n `)
  .addField('Kategoriler:', `
  **[${prefix}restart](https://ekinoxdev.site)** Bot'a restart atar.
  **[${prefix}durumdeğiş](https://ekinoxdev.site)** Botun oynuyorunu değişir.




  `)
        .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/Cj4xstwYXK)`  + "** |  | **" + `[Ekinox Development](https://ekinoxdev.site/)  `, false)
        .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    

  exports.conf = {
    aliases: ['dev', 'eknx', 'e','ekinox'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'developer',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'developer', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };