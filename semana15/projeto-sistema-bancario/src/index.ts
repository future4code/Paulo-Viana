import * as fs from 'fs';

type userAccount = {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
};

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync('./data.json').toString();
    console.log(fileData);
    return JSON.parse(fileData);
  } catch (error) {
    console.log('Erro ao ler a base de dados: ' + error.message);
    return [];
  }
}
console.log(readDatabase);
export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2);
    fs.writeFileSync('./data.json', dataAsString);
  } catch (error) {
    console.log('Erro ao salvar os dados: ' + error.message);
  }
}

const id: number = Number(process.argv[2]);
console.log(id);

const createAccount = [
  {
    id: 1,
    name: 'Paulo Viana',
    cpf: '99912365478',
    birthDate: '16/12/1984',
  },
  {
    id: 2,
    name: 'Pablo Montoya',
    cpf: '99999999999',
    birthDate: '11/11/2000',
  },
];

console.log(createAccount);
