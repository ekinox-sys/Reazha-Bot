const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.send(ozelmesajkontrol) }
    const pingozel = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription('Botun davet bağlantısı: [Tıkla](https://discord.com/oauth2/authorize?client_id=885943190534897674&scope=bot&permissions=8)');
    return message.author.send(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet bağlantısını gönderir.',
  usage: 'davet'
};