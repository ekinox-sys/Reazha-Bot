const categorylist = require("fs").readdirSync("./commands/").filter(s => s !== "private");
  for (const category of categorylist) {
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');
const config = require('../config.json');

let gif = config.gif

exports.run = async (client, message, args) => {

  const buttonDelete = new MessageButton().setStyle('red').setLabel('♻Temizle♻').setID('buttonDelete')


  let embed = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setDescription(`**Reazha Bot Yardım menüsüne hoş geldin, aşağıda ki buttonlardan yararlanarak aradığın şeyi bula bilirsin.** `)
  .setImage(config.gif)
  message.channel.send(embed, {buttons: [new MessageButton().setStyle('green').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('blurple').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), buttonDelete]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      } else if (button.id == '1') {

        embed.setTitle('Yedekleme Sistemi')
        embed.setImage(config.gif)
        embed.setDescription(`
               
       
        > |  **.yedek-oluştur** >  \`Komut'u yazdığınız sunucunun yedeğini alır.\`
        > | **.yedek-yükle <ID>** <  \`Aldığınız yedek'i sunucuya kurar..\`
        > |  **.yedek-bilgi <ID>**   \`Aldığınız yedek hakkında bilgi verir.\`
  `)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('blurple').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'),  buttonDelete]})

        button.reply.defer()

      } else if (button.id == '2') {

        embed.setTitle('Ticket Sistemi')
        embed.setDescription(`
      
       
> | **.ticket-kanal <#Kanal>  \`Ticket kanalını seçersiniz.\`**
> | **.ticket-ekle\` Seçtiğiniz kanal'a ticket sistemini kurar.\`**
> | **.ticket-kaldır  \`Seçtiğiniz kanalı sıfırlayıp ticket sistemini iptal eder.\`**
`)

        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('green').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), new MessageButton().setStyle('blurple').setLabel('4️⃣').setID('4'), buttonDelete]})

        button.reply.defer()

      } else if (button.id == '3') {

        embed.setTitle('Moderasyon')
        embed.setColor('GREEN')
        embed.setColor('GREEN')
        embed.setDescription(`
      
       
       
        > | **.avatar** \`Etiketlediğiniz kişinin avatarını sergiler.\`
        > | **.roller**  \`Sunucuda ki rolleri sergiler.\`
        > | **.komutveri**  \`En çok kullanılan komut'u sergiler.\`
    
`)
     
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('green').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), new MessageButton().setStyle('blurple').setLabel('4️⃣').setID('4'), buttonDelete]})

        button.reply.defer()
       
      } else if (button.id == '4') {

        embed.setTitle('Guard Sistemi')
        embed.setColor('GREEN')
        embed.setDescription(`  
        
       
        > | **.everengel** \`Gereksiz everyone kullanımını engeller.\`
        > | **.capslock-engel** \`Gereksiz / Abartılı capslock kullanımını engeller.\`
        > | **.anti-raid**  \`Sunucu sahibinin izin vermediği botları sunucuya almaz.\`
        > | **.bot-izni** \`Sunucuya sokacağınız bot'a izin verir.\`
        > | **.reklam-engel**  \`Sunucunuzu kötü amaçlı reklamlardan korur.\`
        > | **.küfürengel**  \`Abartılı küfürleri önler.\`



       
        `)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('green').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), new MessageButton().setStyle('blurple').setLabel('4️⃣').setID('4'), buttonDelete]})

        button.reply.defer()
      } else if (button.id == '5') {

        embed.setTitle('Sayfa 3')
        embed.setColor('GREEN')
        embed.setDescription(`
        **Ayarlamamlı Kayıt Menüsü  **
       
       
        > **!alınacak-rol** <a:750393865294577814:867727512804261908> \`Kayıt Edince Alınacak Olan Rolü Ayarlarsınız\`
        > **!kayıt-kanal** ➔ \`Kayıtın Yapılacağı Kanalı Ayarlarsınız\`
        > **!kayıtçı-rol**➔ \`Kayıt Yapmaya İzni Olan Rolü Ayarlarsınız\`
        > **!kız-rol** ➔  \`Kız Rolünü Ayarlarsınız\`
        > **!erkek-rol** ➔ \`Erkek Rolünü Ayarlarsınız\`
        > **!kız @etiket <isim> <yaş>** ➔  \`Kız Üyeyi Kayıt Edersiniz\`
        > **!erkek @etiket <isim> <yaş>** ➔ \`Erkek Üyeyi Kayıt Edersiniz\`
        > **!toplam-kayıt** ➔ \`Toplamda Kaç Adet Kayıt Yaptığınızı Gösterir\`
       
        `)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('1️⃣').setID('1'), new MessageButton().setStyle('green').setLabel('2️⃣').setID('2'), new MessageButton().setStyle('blurple').setLabel('3️⃣').setID('3'), new MessageButton().setStyle('blurple').setLabel('4️⃣').setID('4'), buttonDelete]})

        button.reply.defer()
      };
    });
  });
};
}
//carlossystem //kodscpript.com
exports.conf = {"aliases": ['yardım']}
exports.help = {"name":"yardım"}