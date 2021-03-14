const { MessageEmbed } = require('discord.js')//Disquel#1485    
const disqueldb = require('quick.db')
const settings = require('../managment/settings.json')
exports.run = async (client, message, args) => {
if(!message.member.roles.cache.get(settings.roller.teyitcirol) && !message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`Bu komutu kullanmak için \`<@&${settings.roller.teyitcirol}>\` yetkisine sahip olmalısın.`)
.setColor(settings.renk.kirmizi))


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Şimdi İse Tanımlara Geçiyoruz▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//


let Name = args[1]
let Age = args[2]   
let disquel = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!disquel) {
    message.channel.send(embed.setDescription(`**Bir ID girmelisin**`).setColor("#f5ea1b"))
    return;    
    };


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬GEREKLİ ŞEYLERİ TANIMLADIKTAN SONRA EKSİK GİRİLEN KISIMLARA BİR MESAJ ATMASINI SAĞLAYACAĞIZ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//


if(!Name || !Age) return message.channel.send(new MessageEmbed().setDescription(`Geçerli bir yaş belirtmelisin.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(Age < 14) return message.channel.send(new MessageEmbed().setDescription(`14 yaşından küçük üyeler kayıt edilemez.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(disquel.id === message.author.id) return message.channel.send(new MessageEmbed().setDescription(`Kendini kayıt edemezsin.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(disquel.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`Sunucu sahibine bu komutu kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(disquel.id === client.user.id) return message.channel.send(new MessageEmbed().setDescription(`Bir bota bu komutu kullanamazsın.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
if(disquel.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`Bu kullanıcı sizden \`üst/aynı\` pozisyonda.`).setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(settings.renk.kirmizi)).then(x => x.delete({timeout: 6500}));
disqueldb.add(`yetkili.${message.author.id}.erkek`, 1)
disqueldb.add(`yetkili.${message.author.id}.toplam`, 1)
let kayıtlar = disqueldb.fetch(`yetkili.${message.author.id}.toplam`)
const disquelİsim = `${member.user.username.includes(settings.taglar.servertag) ? settings.taglar.servertag : settings.taglar.untag} ${Name} | ${Age}`;


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Hatalar Bitti Ve Başarılı Mesajı Atıyoruz▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//


disquel.setNickname(`${disquelİsim}`)
disquel.roles.add(settings.roller.erkekRol)
disquel.roles.remove(settings.roller.kayıtsızrol)
disquel.roles.remove(settings.roller.karantinarol)
message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`${disquel} Kişisinin ismi \`"${disquelİsim}"\` olarak ayarlandı. Sunucumuzda \`"Erkek"\` Olarak Kayıt Edildi

Kullanıcıyı Kayıt Etmeden \`.isimler @Disquel/ID\` Yaparak Kontrol Etmeniz Önerilir`)
.setColor(settings.renk.disquelvip))

disqueldb.push(`isimler.${disquel.id}`, {
    İsim: disquelİsim,
    Yetkili: message.author.id,
    });
};
exports.conf = {enabled: true, guildOnly: true, aliases: ["man", "e"]};
exports.help = {name: 'erkek'};