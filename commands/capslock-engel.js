const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.json')

exports.run = async(client, message, args) => {
    ////////
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın.`)
        ///////

    ///////
    const prefix = db.fetch(`prefix.${message.guild.id}`) || "-"
    if (!args[0]) {
        message.channel.send(`**Örnek Kullanım:** ${prefix}capslock-engel aç/kapat`)
    }
    ///////


    ///////
    if (args[0] === 'aç') {
        db.set(`capslock_${message.guild.id}`, true)
        message.channel.send(`Capslock Engel Sistemi Aktif`)
        return
    }
    ///////


    ///////
    if (args[0] === 'kapat') {
        db.delete(`capslock_${message.guild.id}`)
        message.channel.send(`Capslock Engel Sistemi Devre Dışı`)
        return
    }
    ///////


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['capslock-engell'],
    permLevel: 0
};
exports.help = {
    name: 'capslock-engell',
    description: 'capsengel oyş',
    usage: 'capslock-engell'
};