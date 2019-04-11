const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öldürecegini Seç**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + ", " + message.author.username + ' Adlı Kişi Seni Öldürdü.!**')
	.setImage(`https://cdn.discordapp.com/attachments/565699963200471040/565930729515515935/oldur.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tekme"],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'İstediğiniz Kişiye Tekme Atarsınız.',
  usage: 'öldür'
};
