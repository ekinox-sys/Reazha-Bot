const Discord = require('discord.js');
const backup = require('discord-backup');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: Bu sunucuda bu komutu kullanabilmek için gerekli yetkilere sahip değilsiniz.');

    }

    const backupID = args.join(' ');

    if (!backupID)
        return message.channel.send(':x: Lütfen geçerli bir ``ID`` belirtin.');

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

        const embed = new Discord.MessageEmbed()
            .setAuthor('Reazha Bot Back up Bilgi Paneli', backup.data.iconURL)
            .addField('Sunucu ismi', backup.data.name)
            .addField('Yedek Boyutu', backup.size + ' kb')
            .addField('Oluşturulma Tarihi', formattedDate)
            .setFooter('Back up ID: '+backup.id)
            .setImage(
                "https://cdn.discordapp.com/attachments/852906222826422302/886004788603551835/standard_2.gif"
              );

        return message.channel.send(embed);

    }).catch((err) => {

        if (err === 'yedek bulunamadı')
            return message.channel.send(':x: Yedek bulunamadı '+backupID+'!');
        else
            return message.channel.send(':x: Bir hata oluştu: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });

}; 

module.exports.conf = {
aliases: ['yedek-bilgi','yb','yedek-b'],
permLevel: 0, 
kategori: 'yedek'
};

module.exports.help = {
    name: 'yedek-bilgi',
    description: 'yedekleme işlemi hakkında bilgi verir',
    usage: 'yedek-bilgi'

};
