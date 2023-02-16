const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a)

const copiaPokemon1 = {
    ...pokemon1
} 

copiaPokemon1.nome = `Squirtle`
copiaPokemon1.tipo = `Agua`

//b)

pokemon1.ataques = []

//c) 

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque)

//d)

copiaPokemon1.ataques = {
    ...pokemon1,
}

//e)

const ataque1 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}

pokemon1.ataques.push(ataque1)

//f)

const ataque2 = {
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Agua",
    precisao: 100
}

copiaPokemon1.ataques = []

copiaPokemon1.ataques.push(ataque2)

//g)

console.log(pokemon1)
console.log(copiaPokemon1)