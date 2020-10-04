//Importar alguns pacotes necessários
const moment = require('moment');
const tz = require('moment-timezone');
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();

const { timezone, format, clockchannel, updateinterval, token} = require('./config.js');

//'ready' evento
client.once('ready', () => {
  //tempo de inicialização
  const timeNow = moment().tz(timezone).format(format);
  //definir o canal do relógio que está na config.js
  const clockChannel = client.channels.cache.get(clockchannel);
  //atualização inicial
  clockChannel.edit({ name: `🕒 ${timeNow}` }, 'Atualização do relógio')
    .catch(console.error);
  //definir o intervalo
  setInterval(() => {
    const timeNowUpdate = moment().tz(timezone).format(format);
    clockChannel.edit({ name: `🕒 ${timeNowUpdate}` }, 'Atualização do relógio')
      .catch(console.error);
  }, updateinterval);
  //diz se está pronto
	console.log(chalk.greenBright("[READY]"), `Logado em: ${client.user.tag} (${client.user.id}) em ${moment().format("DD MMMM YYYY, HH:mm:ss")}`);
});

//login
client.login(token);