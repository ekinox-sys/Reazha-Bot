const Discord = require("discord.js");
const db = require('quick.db');
const ms = require("ms");
const config = require("../config.json");
const prefix = config.prefix;

var muterolu = "Muted"; 

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`);
  let mutekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!mutekisi)
    return message.reply(
      `:warning: Lütfen kullanıcı etıketleyın! \nDoğru Kullanım; **${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>**`
    );
  if (mutekisi.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      `:warning: Yetkili kişiyi muteleyemem! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``
    );
    if (!muterolu)
    return message.reply(`
    :warning: *Muted* rolü olmadan kişiyi mutelemeyemem.
    `);

  let sebep = args.splice(2, args.length).join(" ");
  let muterol = message.guild.roles.cache.find(role => role.name == muterolu);
  if (!muterol) {
    try {
      muterol = await message.guild.roles.create({
        name: muterolu,
        color: "2f3136",
        permissions: [],
        reason: 'Mute için!'
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.createOverwrite(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
    .replace(`sn`, `s`)
    .replace(`dk`, `m`)
    .replace(`sa`, `h`)
    .replace(`g`, `d`);

  if (!mutezaman) return message.reply(`:warning: Lütfen zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``);

  await mutekisi.roles.add(muterol.id);
  message.channel.send(
    new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setColor('2f3136')
    .setAuthor("İşlem : Mute")
    .setTimestamp()
    .addField("**Kullanıcı:**", `<@${mutekisi.id}>`)
    .addField("**Moderatör:**", message.author)
    .addField("**Süre:**", args[1])
    .addField("**Sebep:**", `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`)
    .setFooter("© 2021 Reazha", bot.user.avatarURL())
  );

  setTimeout(function() {
    mutekisi.roles.remove(muterol.id);
    message.channel.send(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`);
  }, ms(mutezaman));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tempmute"],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
  usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
};