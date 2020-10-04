module.exports = {
  //Todos os campos **são necessários**
  token: '', // Token do seu bot
  clockchannel: 'id do canal', // ID de um canal de voz que você quer que exibe a hora
  timezone: 'Brasil/São paulo', // Fuso horário (dê uma olhada em https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
  format: 'HH:mm (z)', // Formato do relógio, deixe esta configuração padrão para o formato de 24 horas, leia mais em https://momentjs.com/docs/#/displaying/format/
  updateinterval: 600000, // O discord está nos limitando por 10 minutos!
}
