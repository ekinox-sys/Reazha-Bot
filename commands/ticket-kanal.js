const Discord = require("discord.js");
const data = require("quick.db");
const config = require("../config.json");
exports.run = async (client, message, args) => {
  const prefix =
    (await data.fetch(`prefix.${message.guild.id}`)) || config.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Bu komutu kullanmak için yetkin yok.");

  if (args[0] === "ayarla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (kanalbelirle)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#GREEN`)
          .setDescription(
            `Mesajı göndereceğim kanal zaten ayarlı: ${prefix}ticket-kanal sıfırla`
          )
      );
    let kanal = message.mentions.channels.first();
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#GREEN`)
          .setDescription(`Bir kanalı etiketlemelisin.`)
      );
    if (!kanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#GREEN`)
          .setDescription(`Etiketlediğin kanalı bulamıyorum.`)
      );
    data.set(`kanal.${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#GREEN`)
        .setDescription(
          `Mesajın kanalı başarıyla ayarlandı: ${prefix}ticket gönder`
        )
    );
  }

  if (args[0] === "sıfırla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(
        new Discord.MessageEmbed().setDescription(
          `Mesajı göndereceğim kanal zaten ayarlı değil: ${prefix}ticket-kanal ayarla`
        )
      );

    data.delete(`kanal.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#GREEN`)
        .setDescription(
          `Mesajın kanalı başarıyla sıfırlandı: ${prefix}ticket-kanal ayarla #kanal`
        )
    );
  }

  if (!message.includes === "sıfırla" || "ayarla") {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#GREEN`)
        .setDescription("Sadece `ayarla` veya `sıfırla` kullanın.")
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticket-kanal"],
  permLevel: 0
};

exports.help = {
  name: "ticket-kanal"
};
