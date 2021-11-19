const Discord = require("discord.js")
const db = require('quick.db')
const config = require('../config.json');


module.exports.run= async(client, message, args) => {
const user = message.mentions.users.first() || client.users.cache.get(args[0])
if(!user) return message.channel.send('Bir ID Gir veya Birisini Etiketle!')
const veri = await db.get('komutk_'+user.id)
message.channel.send(user.username+" İsimli Kişi 'Komut İsmini Yaz' İsimli Komutu "+veri+" Kere Kullanmış")
},

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['komutveri', 'kv'],
    permLevel: 0
};

exports.help = {
    name: "komutveri"
};