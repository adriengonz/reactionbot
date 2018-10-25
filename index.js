//Constantes

const Discord = require('discord.js');
const c = new Discord.Client();

//Focus Ready
c.on('ready', function () {
  console.log('Prêt?')
  console.log('Le bot est prêt à demarrer...')
  console.log('Redemarrage en cours...')
  console.log(`Connecté avec @${c.user.tag} !`)
  console.log('PRET A FOUTRE LE BORDEL DANS LES CHANNELS !!!!!')

  //Statut Messages
var index = 0
  setInterval(function() {
     c.user.setActivity(['@mention ou r-help' , 'ReactionBot' , 'Attention, tous vos messages auront des réactions 😂' , 'r-help pour afficher l\'aide' , 'r-invite pour inviter le bot à votre serveur' , 'r-support pour rejoindre le serveur support' , `Serveurs connectés : ${c.guilds.size}` , `Nombres d\'utilisateurs : ${c.users.size}` , 'Créateur : @Adrien#8588'][index])
     index = index + 1;
     if(index > 8)
          index = 0;
  }, 7000)
});

c.on('message', async msg => {
  //CONSOLE MSGS
  var date = new Date(),
      seconds = date.getSeconds(),
      minutes = date.getMinutes(),
      hours = date.getHours()
      day = date.getDate(),
      month = (date.getMonth() + 1),
      year = date.getFullYear();

    console.log(`@${msg.author.tag} à envoyé "${msg.content}" dans #${msg.channel.name}`);
    console.log(`[${hours}:${minutes}:${seconds}] [${day}/${month}/${year}]`);
    console.log(`Serveurs : ${c.guilds.size} | Utilisateurs : ${c.users.size}`)
    console.log('-----------------------------------'); //Séparateur

    //REACTIONS + ECRIT

    let msgreactarray=['👋', '👏' , '👍' , '🤔' , '😑' , '⬆' , '🤩' , '🤨' , '😐' , '🙄' ,'😶' , '484760228450271260' , '484760228471242753' , '484760225929494539' , '484760222112546830' , '484760225283440662' , '484760228806656000' , '484760228806656000' , '484760226231353366'];
    msg.react(msgreactarray[Math.floor(Math.random() * msgreactarray.length)])
    msg.channel.startTyping()
    msg.channel.stopTyping(true)

//MENTION

if(msg.content.startsWith('<@504951548233908235>')){
  msg.channel.send(`Hey <@${msg.author.id}> , je suis <@504951548233908235> ! Mon préfixe est **r-** Tape **r-help** pour plus d'informations sur moi et voir mes commandes !`)
}

//HELP

if(msg.content === 'r-help'){
  msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: c.user.username,
        icon_url: c.user.avatarURL
      },
      title: "Commandes du bot",
      description: "Voici les commandes du bot",
      fields: [{
          name: "Reactions :",
          value: "Le bot réagit avec une ou plusieurs réactions, que ce soit des emojis par défauts de Discord OU des emojis d\'autres serveurs Y COMPRIS les emojis animés."
        },
        {
          name: "r-help",
          value: "Affiche l'aide et les commandes du bot"
        },
        {
          name: "r-invite",
          value: "Invite le bot à votre serveur"
        },
        {
          name: "r-support",
          value: "Affiche le lien pour rejoindre le serveur support"
        },
        {
          name: "Et c'est la fin !",
          value: "Amusez-vous bien 🤣😂"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: c.user.avatarURL,
        text: "ReactionBot"
      }
    }
  });
}

//INVITE

if(msg.content === 'r-invite'){
  msg.reply('Voici le lien d\'invitation : \n\nhttps://discordapp.com/oauth2/authorize?client_id=504951548233908235&scope=bot&permissions=67374144')
}

//SUPPORT

if(msg.content === 'r-support'){
  msg.reply('Lien d\'invitation du serveur support : \n\nhttps://discord.gg/rH24C9m')
}

});

  c.login(process.env.TOKEN)
