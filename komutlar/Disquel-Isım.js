const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const settings = require('../managment/settings.json')

module.exports.run = async (client, message, args) => {



//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬-DAHA RAHAT,SADE VE EĞLENCELİ BİR KULLANIM İÇİN HAZIRDAN EMBED OLUŞTURUYORUZ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

let disquelembed = new Discord.MessageEmbed().setFooter("Disquel 🖤").setColor("fff619").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp();


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Şimdi İse Tanımlara Geçiyoruz▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//


let disquel = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let tag = "Disquel"
args = args.filter(a => a !== "" && a !== " ").splice(1);
let isim = args.filter(arg => isNaN(arg)).map(arg => arg.charAt(0).replace('i', "İ").toUpperCase()+arg.slice(1)).join(" ");
let yaş = args.filter(arg => !isNaN(arg))[0] || "";
let Isim = `${tag} ${isim} | ${yaş}`
let Disquelisim = `${isim} | ${yaş}`


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬GEREKLİ ŞEYLERİ TANIMLADIKTAN SONRA EKSİK GİRİLEN KISIMLARA BİR MESAJ ATMASINI SAĞLAYACAĞIZ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//


if(!isim | !yaş) {
message.channel.send(disquelembed.setDescription(`**Bir isim girmelisin**`))
return;    
};  

if (!message.member.roles.cache.some(r => [`${settings.roller.teyitcirol}`].includes(r.id)) && !message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send(disquelembed.setDescription(`**Gerekli yetkiye sahip değilsin.**`))
return;    
};

if(!disquel) {
message.channel.send(disquelembed.setDescription(`**Bir ID girmelisin**`))
return;    
};



//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Hatalar Bitti Ve Başarılı Mesajı Atıyoruz▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//



disquel.setNickname(Isim);
message.channel.send(disquelembed.setDescription(`Kullanıcının ismi \`"• ${Isim}"\` olarak ayarlandı


kişinin önceki isimlerine \`.isimler @Disquel/ID\` yaparak bakabilirsiniz`))
db.push(`isimler.${disquel.id}`, {
    İsim: Disquelisim,
    Yetkili: message.author.id,
    });
};

exports.conf = {enabled: true, guildOnly: true, aliases: ["i"]};
exports.help = {name: 'isim'};
