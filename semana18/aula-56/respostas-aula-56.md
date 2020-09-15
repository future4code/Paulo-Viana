# EXERCÍCIO 1

#### A) SALTS são strings aleatórias adicionadas na senha antes de criar o hash. ROUND sé o paramêtro cost(custo-numérico) chamada na função genSalt que define a segurança da senha.

### A função ficaria assim:

![image-20200915160842083](C:\Users\Paulo Éder\AppData\Roaming\Typora\typora-user-images\image-20200915160842083.png)

import * as bcrypt from 'bcryptjs'

export class HashManager {
  public async hash(
    plainText: string
  ): Promise<string> {
    const cost: number = Number(process.env.BCRYPT_COST)
    const salt: string = await bcrypt.genSalt(cost)
    const cypherText: string = await bcrypt.hash(plainText, salt)
    console.log(cypherText)
    return cypherText
  }

public async compare(
    plainText: string,
    cypherText: string
  ): Promise<boolean> {
    return await bcrypt.compare(plainText, cypherText)
  }
}