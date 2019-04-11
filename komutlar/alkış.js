const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Alkış 👏👅\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
   .addField('Alkışlayan Kişi:', message.author.username + '#' + message.author.discriminator)
  .setImage("https://cdn.discordapp.com/attachments/565699963200471040/565948266471227392/alks.gif")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alkışla',
  description: 'Kullanan Kişi  Alkışlar',
  usage: 'alkışla'
};