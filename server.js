const fs = require('fs');
const db = require('quick.db')
const moment = require("moment-duration-format")
const prettyMilliseconds = require('pretty-ms');
const Moment = require('moment')
const mongoose = require("mongoose");
const distub = require("discord-buttons");

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;

require("discord-buttons")(client)

client.queue = new Map();


fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`✔ Event Yüklendi: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});



client.on("ready", () => {
  client.channels.cache.get(config.seskanal).join();
});

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(
        "<:white_check_mark: 752305081545916438>" +
          member.user.username +
          "`** HoşGeldin! Otomatik Rolün Verildi Seninle Beraber** `" +
          member.guild.memberCount +
          "` **Kişiyiz!**"
      );
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
});




client.commands = new Discord.Collection();




fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`💻 Komutlar yüklendi: ${commandName}`);

    });
    console.log(`                                         `)
    console.log(`                                         `)
    console.log(`          Veritabanı yedeklendi! `)
    console.log(`                Bot Aktif!`)

    

    client.on('channelCreate', async channel => {
        const c = channel.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${channel.guild.id}`));
        if (!c) return;
          var embed = new Discord.MessageEmbed()
                          .addField(`Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
          c.send(embed)
      });
      
      client.on('channelDelete', async channel => {
        const c = channel.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${channel.guild.id}`));
        if (!c) return;
          let embed = new Discord.MessageEmbed()
                          .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\nID: ${channel.id}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
      
          c.send(embed)
      });
      
         client.on('channelNameUpdate', async channel => {
        const c = channel.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${channel.guild.id}`));
        if (!c) return;
          var embed = new Discord.MessageEmbed()
                          .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\nID: ${channel.id}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
          c.send(embed)
      });
      
      client.on('emojiCreate', emoji => {
        const c = emoji.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${emoji.guild.id}`));
        if (!c) return;
      
          let embed = new Discord.MessageEmbed()
                          .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\nID: ${emoji.id}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)
      
          c.send(embed)
          });
      client.on('emojiDelete', emoji => {
        const c = emoji.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${emoji.guild.id}`));
        if (!c) return;
      
          let embed = new Discord.MessageEmbed()
                          .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\nID: ${emoji.id}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)
      
          c.send(embed)
          });
      client.on('emojiUpdate', (oldEmoji, newEmoji) => {
        const c = newEmoji.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${newEmoji.guild.id}`));
        if (!c) return;
      
          let embed = new Discord.MessageEmbed()
                          .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)
      
          c.send(embed)
          });
      
      client.on('guildBanAdd', async (guild, user) => {    
          const channel = guild.channels.cache.get(db.fetch(`ekinoxmodlog_${guild.id}`));
        if (!channel) return;
        
        const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
      
          let embed = new Discord.MessageEmbed()
                          .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                          .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)
      
          channel.send(embed)
      });
      
      client.on('guildBanRemove', async (guild, user) => {    
          const channel = guild.channels.cache.get(db.fetch(`ekinoxmodlog_${guild.id}`));
        if (!channel) return;
        
        const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
      
          let embed = new Discord.MessageEmbed()
                          .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                          .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)
      
          channel.send(embed)
      });
      client.on('messageDelete', async message => {    
        if(message.author.bot) return
      
          const channel = message.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${message.guild.id}`));
        if (!channel) return;
        
          let embed = new Discord.MessageEmbed()
                          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                          .setTitle("Mesaj silindi")                
                          .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                         .addField(`Kanal:`,`${message.channel.name}`)
                          .setTimestamp()
                          .setColor("Green")
                          .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)
      
          channel.send(embed)
      });
      
      client.on('messageUpdate', async(oldMessage, newMessage) => {
          if(oldMessage.author.bot) return;
          if(oldMessage.content == newMessage.content) return;
      
          const channel = oldMessage.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${oldMessage.guild.id}`));
          if(!channel) return;
      
          let embed = new Discord.MessageEmbed()
          .setTitle("Mesaj güncellendi!")
          .addField("Eski mesaj : ",`${oldMessage.content}`)
          .addField("Yeni mesaj : ",`${newMessage.content}`)
          .addField("Kanal : ",`${oldMessage.channel.name}`)
          .setTimestamp()
          .setColor("Green")
          .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL}`)
      
          channel.send(embed)
      });


      
      client.on('roleCreate', async (role) => {    
      
          const channel = role.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${role.guild.id}`));
        if (!channel) return;
        
          let embed = new Discord.MessageEmbed()
      .addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
      .setTimestamp()
      .setColor("Green")
      .addField("Rol renk kodu : ",`${role.hexColor}`)
      .setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)
      
          channel.send(embed)
      });
      
      client.on('roleDelete', async (role) => {    
      
          const channel = role.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${role.guild.id}`));
        if (!channel) return;
        
          let embed = new Discord.MessageEmbed()
      .addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
      .setTimestamp()
      .setColor("Green")
          .addField("Rol renk kodu : ",`${role.hexColor}`)
      .setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)
      
          channel.send(embed)
      })
      client.on('voiceStateUpdate', (oldMember, newMember) => {
      
        if (db.has(`ekinoxmodlog_${oldMember.guild.id}`) === false) return;
        
        var kanal = oldMember.guild.channels.cache.get(db.fetch(`ekinoxmodlog_${oldMember.guild.id}`).replace("<#", "").replace(">", ""))
        if (!kanal) return;
        
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel
      
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
      
          const embed = new Discord.MessageEmbed()
          .setColor("Green")
          .setDescription(`${newMember.user.tag} adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
          kanal.send(embed);
          
        } else if(newUserChannel === undefined){
      
          const embed = new Discord.MessageEmbed()
          .setColor("Green")
          .setDescription(`${newMember.user.tag} adlı kullanıcı sesli kanaldan çıkış yaptı!`)
          kanal.send(embed);
          
        }
      });

      const backup = () => {
        fs.copyFile('./database.sqlite', `./backups/yedekleme • ${moment().format('D-M-YYYY • H.mm.ss')} • database.sqlite`, err => {
            if (err) return console.log(err);
            console.log('Veritabanını yedekledim.');
        });
    };

    // Everyone Koruma Başlangıç

    client.on("message", async msg => {
      let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
      if (hereengelle == "acik") {
        const here = ["@here", "@everyone"];
        if (here.some(word => msg.content.toLowerCase().includes(word))) {
          if (!msg.member.permissions.has("ADMINISTRATOR")) {
            msg.delete();
            return msg
              .reply("Yakaladım Seni! Everyone ve Here Etiketlemek Yasak.")
              .then(wiskyx => wiskyx.delete({ timeout: 5000 }));
          }
        }
      } else if (hereengelle == "kapali") {
      }
    });
  

  // Everyone Koruma Son

  //ANTİ RAİD

client.on("guildMemberAdd", async member => {
  let kanal =
      (await db.fetch(`antiraidK_${member.guild.id}`)) == "anti-raid-aç";
  if (!kanal) return;
  var synx2 = member.guild.owner;
  if (member.user.bot === true) {
      if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
          let synx = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setThumbnail(member.user.avatarURL())
              .setDescription(
                  `**${member.user.tag}** (${member.id}) adlı bota bir yetkili izin verdi eğer kaldırmak istiyorsanız **!bot-izni kaldır <botid>**.`
              );
          synx2.send(synx);
      } else {
          let izinverilmemişbot = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setThumbnail(member.user.avatarURL())
              .setDescription(
                  "**" +
                  member.user.tag +
                  "**" +
                  " (" +
                  member.id +
                  ") " +
                  "adlı bot sunucuya eklendi ve banladım eğer izin vermek istiyorsanız **" +
                  "!bot-izni ver <botid>**"
              );
          member.kick(); // Eğer sunucudan atmak istiyorsanız ban kısmını kick yapın
          synx2.send(izinverilmemişbot);
      }
  }
});


//ANTİ RAİD SON

// Capslock engell

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 1) {
      if (db.fetch(`capslock_${msg.guild.id}`)) {
          let caps = msg.content.toUpperCase();
          if (msg.content == caps) {
              if (!msg.member.permissions.has("ADMINISTRATOR")) {
                  if (!msg.mentions.users.first()) {
                      msg.delete();
                      return msg.channel.send(`${msg.member}, Capslock Kapat Kardeşim.`).then(nordx => nordx.delete({ timeout: 5000 }))

                  }
              }
          }
      }
  }
})

// Capslock engell son
  
//Connect to mongoose database
mongoose.connect(config.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  //If it connects log the following
  console.log("                             ");
  console.log("MongoDB :      MongoDB Aktif" );
}).catch((err) => {
  //If it doesn't connect log the following
  console.log("MongoDB Baglantısı Başarısız:" + err );
});

//REKLAM ENGEL

client.on("message", msg => {
  const veri = db.fetch(`${msg.guild.id}.reklam`);
  if (veri) {
      const reklam = [
          ".com",
          ".net",
          ".xyz",
          ".tk",
          ".pw",
          ".io",
          ".me",
          ".gg",
          "www.",
          ".co",
          "https",
          "http",
          ".gl",
          ".org",
          ".com.tr",
          ".biz",
          "net",
          ".rf.gd",
          ".az",
          ".party",
          "discord.gg",
          ".site",
          "youtube.com"
      ];
      if (reklam.some(word => msg.content.includes(word))) {
          try {
              if (!msg.member.permissions.has("BAN_MEMBERS")) {
                  msg.delete();
                  return msg
                      .reply("Yakaladım Seni! Reklam Yasak.")
                      .then(eknx => eknx.delete({ timeout: 5000 }));
              }
          } catch (err) {
              console.log(err);
          }
      }
  }
  if (!veri) return;
});

//REKLAM ENGEL

client.on("messageUpdate", async msg => {
  const i = db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
      const kufur = [
          "oç",
          "amk",
          "ananı sikiyim",
          "ananıskm",
          "piç",
          "amk",
          "amsk",
          "sikim",
          "sikiyim",
          "orospu çocuğu",
          "piç kurusu",
          "kahpe",
          "orospu",
          "mal",
          "sik",
          "yarrak",
          "am",
          "amcık",
          "amık",
          "yarram",
          "sikimi ye",
          "mk",
          "mq",
          "aq",
          "ak",
          "amq"
      ];
      if (kufur.some(word => msg.content.includes(word))) {
          try {
              if (!msg.member.permissions.has("BAN_MEMBERS")) {
                  msg.delete();

                  return msg
                      .reply("Yakaladım Seni! Küfür Yasak.")
                      .then(eknx => eknx.delete({ timeout: 5000 }));
              }
          } catch (err) {
              console.log(err);
          }
      }
  }
  if (!i) return;
});

//KÜFÜR ENGEL SON



    client.on('ready', () => {
        setInterval(() => backup(), 1000 * 60 * 60 * 24); // Günde bir kere yedekler.
    });

    client.on("message", message => {
      if (message.channel.type === "dm") {
          if (message.author.bot) return;
          const dmlog = new Discord.MessageEmbed()
           .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
           .setColor('RANDOM')
           .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
           .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
           .addField(`Gönderilen Mesaj`, message.content)
           .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
           .setThumbnail(message.author.avatarURL()) 
      client.channels.cache.get("886362278658723871").send(dmlog);
      }

      client.on("guildCreate", guild => {
        let add = client.channels.cache.get("886362108940415006")
        const eklendim = new Discord.MessageEmbed()
        
        .setTitle(`Sunucuya Eklendim`)
        .setTimestamp()
        .setColor("GREEN")
        .setThumbnail(guild.iconURL())
        .addField(`Sunucu İsmi`,guild.name)
        .addField(`Sunucu ID`, guild.id)
        .addField(`Kurucu`,guild.owner.user.tag)
        .addField(`Kurucu ID`,guild.owner.user.id)
        .addField(`Üye Sayısı`,guild.memberCount)
        .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")

        
        add.send(eklendim)
        
        });
        //XiR
        client.on("guildDelete", guild => {
        let remove = client.channels.cache.get("886362230273237022")
        const atildim = new Discord.MessageEmbed()
        
        .setTitle(`Sunucudan Atıldım`)
        .setTimestamp()
        .setColor("RED")
        .setThumbnail(guild.iconURL())
        .addField(`Sunucu İsmi`,guild.name)
        .addField(`Sunucu ID`, guild.id)
        .addField(`Kurucu`,guild.owner.user.tag)
        .addField(`Kurucu ID`,guild.owner.user.id)
        .addField(`Üye Sayısı`,guild.memberCount)
        .setImage("https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif")
        
        remove.send(atildim)
        
        });

      
  });
 
  
});





console.log(`
        
        
                                                                         
                                                                         
000000000                                       hhhhhhh             
00:::::::::00                                     h:::::h             
00:::::::::::::00                                   h:::::h             
0:::::::000:::::::0                                  h:::::h             
0::::::0   0::::::0xxxxxxx      xxxxxxx  ssssssssss   h::::h hhhhh       
0:::::0     0:::::0 x:::::x    x:::::x ss::::::::::s  h::::hh:::::hhh    
0:::::0     0:::::0  x:::::x  x:::::xss:::::::::::::s h::::::::::::::hh  
0:::::0 000 0:::::0   x:::::xx:::::x s::::::ssss:::::sh:::::::hhh::::::h 
0:::::0 000 0:::::0    x::::::::::x   s:::::s  ssssss h::::::h   h::::::h
0:::::0     0:::::0     x::::::::x      s::::::s      h:::::h     h:::::h
0:::::0     0:::::0     x::::::::x         s::::::s   h:::::h     h:::::h
0::::::0   0::::::0    x::::::::::x  ssssss   s:::::s h:::::h     h:::::h
0:::::::000:::::::0   x:::::xx:::::x s:::::ssss::::::sh:::::h     h:::::h
00:::::::::::::00   x:::::x  x:::::xs::::::::::::::s h:::::h     h:::::h
00:::::::::00    x:::::x    x:::::xs:::::::::::ss  h:::::h     h:::::h
  000000000     xxxxxxx      xxxxxxxsssssssssss    hhhhhhh     hhhhhhh
                                                                      
                                                                      
                                                                      

        Prefix : ${config.prefix}
        
`)




client.login(config.token);