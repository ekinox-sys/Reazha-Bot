const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '852901991722123274') return message.reply('Bu komutu kullanamazsın. Bu komut Yapımcı Komutudur');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durumdeğiş'],
  permLevel: 0
};

exports.help = {
  name: 'durumdeğiş',
  description: 'Botun oynuyor kısmını degiştirir.',
  usage: 'durumdeğiş'
};