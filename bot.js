const Discord = require("discord.js")
const client = new Discord.Client()

const devs = ['368768446327947265'];

const prefix = "$"

        client.on('ready', () => {
            client.user.setActivity("On.Rz . Owner : SoM .",{type: 'streaming'});
       
       });



client.login(process.env.BOT_TOKEN);

