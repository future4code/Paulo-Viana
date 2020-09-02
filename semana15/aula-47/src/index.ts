import axios from 'axios';

//Exercício 1
// A => No endpoint getSubscribers
// B => Temos que usar o any[]

const main = async () => {
  const baseUrl: string =
    'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

  const getAllSubscribers = async (): Promise<any[]> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
    return subscribers.data;
  };
  console.log(await getAllSubscribers());
};

main();
