export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value
    }
  }
  return undefined
}


test("Testing balance greater than value", () => {
  const user: User = {
    name: "Astrodev",
    balance: 100
  }

  const result = performPurchase(user, 50)

  expect(result).toEqual({
    ...user,
    balance: 50
  })
})

console.log()

interface User {
  name: string
  balance: number
}
