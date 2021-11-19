const { MessageEmbed } = require('discord.js')
const config = require('../config.json');

exports.run = async(client, message, args) => {
    if(!message.author.id === config.geliştiriciler) return;

    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM')

        message.guild.channels.create(`[Reazha Logs]`, {type: 'category'}).then(parent => {
            message.channel.send(embed.setDescription("Kanalları kurmaya başlıyorum bu işlem biraz sürebilir!", true)).then(message => message.delete({timeout: 5000}));
            message.guild.channels.create('gelen-giden', {type: 'text'}).then(c => c.setParent(parent.id))
            message.guild.channels.create('ban-log', {type: 'text'}).then(c => c.setParent(parent.id))
            message.guild.channels.create('unban-log', {type: 'text'}).then(c => c.setParent(parent.id))
            message.guild.channels.create('otorol-log', {type: 'text'}).then(c => c.setParent(parent.id))
            message.guild.channels.create('mod-log', {type: 'text'}).then(c => c.setParent(parent.id))
            message.guild.channels.create('guard-log', {type: 'text'}).then(c => c.setParent(parent.id))
            message.guild.channels.create('küfür-log', {type: 'text'}).then(c => c.setParent(parent.id))
            message.channel.send(embed.setDescription("Oluşturmak İstediğin Kanalları Başarıyla Oluşturdum!", true))

    
            message.react("✅")
            })}


            exports.conf = {
                aliases: ['logkur', 'logcreate', 'log','logs'], //Komutun farklı yazılışlarla kullanımları
                permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
                kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız
            
              };
            
              exports.help = {
                name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
                description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
                usage: 'log', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
              };
 

