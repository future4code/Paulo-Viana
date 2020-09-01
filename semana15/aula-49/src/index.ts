/*  ---  EXERCICIO 1  ---  */

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log('Chamando o construtor da classe User');
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
}

const PauloViana: User = new User(
  '1',
  'paulo@gmail.com',
  'Paulo Viana',
  '123456789',
);

const JuliaViana: User = new User(
  '2',
  'julia@gmail.com',
  'Júlia Viana',
  '123456321',
);
console.log(PauloViana);
console.log(JuliaViana);

// A => Conseguir instanciar a senha como string
// B => Ela chama 2 vez mostrando que vai começar a construção do new users. A cada novo usuário ela será chamada.
/*  ---  EXERCICIO 1  ---  */

/*  ---  EXERCICIO 2  ---  */
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string,
  ) {
    super(id, email, name, password);
    console.log('Chamando o construtor da classe Customer');
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
/*  ---  EXERCICIO 2  ---  */
