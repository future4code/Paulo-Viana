import moment from 'moment';

moment.locale('pt-br');

/* --- EXERCICÍO 1 --- */

type event = {
  nome: string;
  descricao: string;
  inicio: moment.Moment;
  fim: moment.Moment;
};

const allEvents: event[] = [
  {
    nome: 'Aniversário da Vó',
    descricao: 'Aniversário da vó na casa dela',
    inicio: moment('09/12/2020 15:00', 'DD/MM/YYYY HH:mm'),
    fim: moment('09/12/2020 21:30', 'DD/MM/YYYY HH:mm'),
  },
  {
    nome: 'Dentista',
    descricao: 'Exame de rotina no Dr. Lúcio',
    inicio: moment('26/06/2020 17:00', 'DD/MM/YYYY HH:mm'),
    fim: moment('26/06/2020 18:00', 'DD/MM/YYYY HH:mm'),
  },
];


/* --- EXERCICÍO 2 --- */

const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.fim.diff(item.inicio, "minutes");

    const today = moment();
    const daysUntilEvent = item.inicio.diff(today, "days");


    console.log(`
			Nome: ${item.nome}
			Horário de início: ${item.inicio.format('dddd, DD de MMMM de YYYY, HH:mm')}
			Horário de fim: ${item.fim.format('DD de MMMM de YYYY, HH:mm')}
			Descrição: ${item.descricao}
    `);
