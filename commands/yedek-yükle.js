const backup = require('discord-backup');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: :x: Bu sunucuda yedek oluştura bilmek için gerekli yetkiye sahip değilsin!');
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send(':warning: Tüm sunucu kanalları, rolleri, ve ayarları temizlenecektir. Devam etmek için ``.devam`` İşlemi iptal etmek için ``.iptal`` yazınız. ');

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['.devam', '.iptal'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '.devam';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send('Yedek kurulumu başarılı! Beni terchi ettiğiniz için teşekkür ederim!');
            
                }).catch((err) => {
            
                    if (err === 'Yedek bulunamadı')
                        return message.channel.send(':x: Yedek için gerekli ``ID`` Bulunamadı '+backupID+'!');
                    else
                        return message.author.send(':x: Bir hata oluştu: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send(':x: İşlem iptal ettirildi.');
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send(':x: Komut zaman aşımına uğradı, lütfen tekrar deneyin.');
        })

    }).catch(() => {
        return message.channel.send(':x: Yedek için gerekli ``ID`` Bulunamadı'+backupID+'!');
    });

    module.exports.conf = {
        aliases: ['backup-yükle','by','backup-y'],
        permLevel: 0, 
        kategori: 'backup'
        };
        
        module.exports.help = {
            name: 'backup-yükle',
            description: 'back up hakkında bilgi verir',
            usage: 'backup-yükle'
        
        };

};
