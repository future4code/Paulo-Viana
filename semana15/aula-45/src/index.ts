// 1 A => Através do process.argv

// 1 B =>
const nome: string = process.argv[2];
const age: number = Number(process.argv[3]);

console.log(`Olá! Você, ${nome}, tem ${age} anos`);

// 1 C =>
const ageMultiply: number = Number(process.argv[3]) * 7;
