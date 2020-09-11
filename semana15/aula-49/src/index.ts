import { User } from './User';
import { Customer } from './Customer';

/*  ---  EXERCÍCIO 1  ---  */
const newUser: User = new User(
  '1',
  'pauloviana@gmail.com',
  'Paulo Viana',
  '123456',
);
console.log(newUser.getId());
console.log(newUser.getName());
console.log(newUser.getEmail());

// Letra A => Não será possível pois na função contrutora não tem o método GET.
// Letra B => Ela será chamada pelas mesmas quantidades de instâncias que eu criar.

/*  ---  EXERCÍCIO 1  ---  */

/*  ---  EXERCÍCIO 2  ---  */
const newCustomer: Customer = new Customer(
  '2',
  'julia@yahoo.com.br',
  'Júlia',
  '456987',
  '12369874521458',
);

// Letra A => Uma única vez.
// Letra B => 2 veze. Toda vez que chamamos o cosntrutor da clase filha, chamamos também o construto da classe pai.

/*  ---  EXERCÍCIO 2  ---  */
