const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('guildMemberAdd', uye =&gt; {
  // Belirli bir kanala mesaj atması için kod. Buna göre "#giriş-çıkış" kanalına mesaj atacak:
  const channel = uye.guild.channels.find('name', 'giriş-çıkış');
  // Eğer kanal yoksa, hiçbir şey yapma:
  if (!channel) return;
  // Üyeyi etiketleyerek "#giriş-çıkış" kanalına mesaj at:
  channel.send(`Sunucuya hoş geldin İçerisi çok tehlikeli kendine dikkat et, ${uye}`);
});
client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'S.a') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === prefix + '!Yapımcı') {
    msg.reply('Yapımcım @>>> Reis <<<#0112'dir');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
