const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Sakin Ol Diyecegin Kişiyi Seç**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + ", " + message.author.username + ' Adlı Kişi Sana Sakin Ol Dedi.!**')
	.setImage(`https://cdn.discordapp.com/attachments/565699963200471040/565946008773853185/sakinol.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sakinol"],
  permLevel: 0
};

exports.help = {
  name: 'sakinol',
  description: 'İstediğiniz Kişiye Tekme Atarsınız.',
  usage: 'sakinol'
};
