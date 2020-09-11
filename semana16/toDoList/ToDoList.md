import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";


/**************************************************************/
/*  --- CRIAÇÃO DA MINHA API HTTP ---  */
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get('/', testEndpoint)

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/**************************************************************/

/*  --- CONEXÃO COM MEU BANCO DE DADOS ---  */
dotenv.config();
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

// CRIANDO TABELA GENÉRICA DE USUÁRIOS
async function createUserTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE User (
      id INT PRIMARY KEY,
      nome VARCHAR(255),
      nickname VARCHAR(255) UNIQUE,
      email VARCHAR(255) UNIQUE
    );
  `)
    console.log("Aplicado com Sucesso!")
  } catch (error) {
    console.log(error)
  }
}
createUserTable()

// FUNÇÃO PARA CRIAR NOVOS USUÁRIO
async function createNewUser(
  id: number,
  nome: string,
  nickname: string,
  email: string
): Promise<void> {
  try {
    await connection.raw(`
		INSERT INTO User VALUES (
		${id},
		"${nome}",
		"${nickname}",
		"${email}"
);
`)
    console.log("Sucesso")
  } catch (error) {
    console.log(error)
  }
}

// createNewUser(1, "Paulo Viana", "Lula Molusco", "paulo@yahoo.com.br")
// createNewUser(2, "Júlia Viana", "Xerereca", "julia@gmail.com.br")
// createNewUser(3, "Priscila Viana", "Plepletinha", "priscila@hotmail.com")
// createNewUser(4, "João Bosco", "Gordim", "joao@gmail.com.br")
// createNewUser(5, "Perpétua Alves", "Pépéta", "perpetua@yahoo.com.br")
// createNewUser(6, "Ardelino Frota", "Bigodim", "ardelino@gmail.com.br")
// createNewUser(7, "Lucas Farias", "Orêia", "lucas@hotmail.com")
// createNewUser(8, "Matheus Farias", "Passarim", "matheus@yahoo.com.br")
// createNewUser(9, "Francisco Almeida", "Bita", "almeidinha@gmail.com.br")
// createNewUser(10, "Elizabeth Farias", "Véia Doida", "betinha@hotmail.com")

