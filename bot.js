const Discord = require("discord.js")

const client = new Discord.Client()

const moment = require("moment")

const devs = ['368768446327947265'];

const prefix = "$"



client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "On.RzPing")) {
        message.channel.sendMessage(':ping_pong: **__Pong! In__** `' + `${client.ping}` + ' ms`');
    }
});


 

client.on('message', msg => {
  if (msg.content === 'كلب') {
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ');
  }
});

	  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**ممـنوع النـشر هـنآ ي قـلبي . " **`)
    }
}
});
	
    client.on('message' , message => {
        if(message.content === '$voice onnline in rooms') {
            message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
        }
        });

client.on('ready',async () => {
  sendReady('491517470138433536', `**__ تـم تـشـغـيـل الـبـوت بـنـجـاح , On.Rz Bot | Owner Bot : SoM # 1100__**`);
  
  function sendReady(channel, message) {
    client.channels.get(channel).send(message);
    console.log(message);
  }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`On.Rz | Owner : SoM .`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.login(process.env.BOT_TOKEN);

