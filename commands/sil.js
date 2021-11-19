const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const emresil = args.slice(0).join('');

if(emresil.length < 1) {
  return message.reply("Silmem İçin Bir Miktar Belirt")
} else {
  message.channel.bulkDelete(emresil);
message.channel.send("**" + emresil + "** mesaj sildim").then(msg => {
    msg.delete(5000)
});
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};





exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle <miktar>'
};