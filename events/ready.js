const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '.'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}yardım | .davet`,
    `Ekinox Development`,
    `ekinoxdev.site`
  ]

  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
    client.user.setStatus('IDLE')
  }, 3000)
  


}