import { Character } from "../src/ValidateCharacter"

describe('Testando ValidateCharacter', () => {

  test('Testando alguma coisa 01', () => {
    const user: Character = {
      name: 'Tommy Shelby',
      life: 1500,
      strength: 90,
      defense: 80
    }

    expect(user).toEqual({
      ...user,
      balance: 50
    })

  })

  test('Testando alguma coisa 02', () => {


  })

})