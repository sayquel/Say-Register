const dc = require('discord.js')//Disquel#1485
const disqueldb = require('quick.db')
const moment = require('moment')
const settings = require('../managment/settings.json')
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.get(settings.roller.botcommand) && !message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new dc.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Bu komutu kullanmak için <@&${settings.roller.botcommand}> yetkisine sahip olmalısın.`)
.setColor(settings.renk.disquelkırmızı))

let uye = message.mentions.users.first() || message.author;
let bilgi = disqueldb.get(`yetkili.${uye.id}.toplam`);
let yazı = `${message.guild.name}`
  
let top = message.guild.members.cache.filter(uye => disqueldb.get(`yetkili.${uye.id}.toplam`)).array().sort((uye1, uye2) => Number(db.get(`yetkili.${uye2.id}.toplam`))-Number(db.get(`yetkili.${uye1.id}.toplam`))).slice(0, 15).map((uye, index) => (index+1)+" • <@"+ uye +"> | \`" + db.get(`yetkili.${uye.id}.toplam`) +"\` Kayıta Sahip.").join('\n');
message.channel.send(new dc.MessageEmbed().setAuthor(yazı, message.guild.iconURL({dynamic: true})).setTimestamp().setColor("#fff619").setDescription(top));
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tt"],
    permLevel: 0
};

exports.help = {
    name: "topteyit"
}