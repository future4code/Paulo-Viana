import { Character, ValidateCharacter } from "./ValidateCharacter"

const tommyShelby: Character = {
    name: 'Tommy Shelby',
    life: 1500,
    strength: 90,
    defense: 80
}

const alfieSolomons: Character = {
    name: 'Alfie Solomons',
    life: 1500,
    strength: 80,
    defense: 90
}

const teste01 = ValidateCharacter(tommyShelby)
const teste02 = ValidateCharacter(alfieSolomons)


