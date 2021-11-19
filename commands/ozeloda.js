const discord = require("discord.js");
const config = require("../config.json");

exports.run = async (Client, msg, args) => {
      if(!msg.mentions.users.first()) return msg.channel.send("Kullanıcı Etiketle");
       
        msg.guild.channels.create(msg.author.username+"-"+msg.mentions.users.first().username,{
            permissionOverwrites: [
            {
              id: msg.guild.roles.everyone, 
              deny: ['VIEW_CHANNEL',"SEND_MESSAGES"] 
            },
            {
                id: msg.mentions.users.first().id, 
                allow: ['VIEW_CHANNEL',"SEND_MESSAGES"]
              },
              {
                id: msg.author.id, 
                allow: ['VIEW_CHANNEL',"SEND_MESSAGES"]
              }
         ]}).then(channel => {
            channel.setParent(""); // Kategori ID
            msg.channel.send("Oda Hazır!")
        })
    }
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: "Ozel oda Kanalları",
        description: "Kişiye özel oda kurar",
        usage: "ozeloda"
      };
      