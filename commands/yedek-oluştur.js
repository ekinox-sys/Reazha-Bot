const backup = require('discord-backup');
const config = require('../config.json');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMİNİSTRATOR')){
        return message.channel.send(':x: Bu sunucuda yedek oluştura bilmek için gerekli yetkiye sahip değilsin!');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Yedek oluşturuldu, Yedek ID: `'+backupData.id+'`! Kullanım `'+config.prefix+'yedek-yükle '+backupData.id+'` Yedeği kullanmak için!');

    }).catch(() => {

        return message.channel.send(':x: Yönetici yetkim olmadan bu işlemi gerçekleştiremem!');

    });

    module.exports.conf = {
        aliases: ['yedek-oluştur','yo','yedek-o'],
        permLevel: 0, 
        kategori: 'yedek'
        };
        
        module.exports.help = {
            name: 'yedek-oluştur',
            description: 'yedekleme işlemi hakkında bilgi verir',
            usage: 'yedek-oluştur'
        
        };

};
