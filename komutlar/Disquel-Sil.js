const { MessageEmbed } = require("discord.js");




exports.run = async(client, message, args, ayar, emoji) => {

//-----------EMBED OLUŞTURALIMMMM------------//


let embed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp();

//-------------------------------------------//


  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed.setDescription("Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!")).then(x => x.delete({timeout: 5000}));
  if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(embed.setDescription("Öhm \`1-100\` Arasında bi sayı belirtmelisin").setColor("#f1f31e")).then(x => x.delete({timeout: 5000}));




  await message.delete().catch();
  message.channel.bulkDelete(Number(args[0])).then(msjlar => message.channel.send(embed.setDescription(`\`${msjlar.size}\` adet mesaj silindi`).setColor("#f1f31e")).then(x => x.delete({timeout: 5000}))).catch()
};




exports.conf = {
    aliases: ["sil", 'clear'],
    usage: "temizle 1-100",
    description: "Belirtilen mesaj sayısı kadar mesaj temizler."
}




exports.help = {
    name: "temizle",
};