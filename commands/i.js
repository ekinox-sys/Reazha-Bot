require("moment-duration-format");
const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setFooter("© 2021 Reazha Bot", client.user.avatarURL())
    .addField("» **Botun Sahibi**", "<@852901991722123274>")
    .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
    .addField("» **📻Gecikme süreleri**","Mesaj Gecikmesi : {ping1} ms \nBot Gecikmesi : {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Bellek kullanımı📠**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Çalışma süresi💻**", seksizaman, true)
    .addField("» **Kullanıcılar🙆‍♂️**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Sunucular🖥**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar📋**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **Node.JS sürüm🛡**", `${process.version}`, true)
    .addField("» **CPU🛠**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("» **Bit**", `\`${os.arch()}\``, true)
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "istatistik"
};
