class hero{
	constructor(name, age, typeOfHero){
    	this.name = name;
        this.age = age;
        this.typeOfHero = typeOfHero;
    }
    
    atacar(){
    	if (this.typeOfHero = "Mago") {
        	return "magia";
        } else if (this.typeOfHero = "Guerreiro") {
        	return "espada";
        } else if (this.typeOfHero = "Monge") {
        	return "artes marciais";
        } else if (this.typeOfHero = "Ninja") {
        	return "shuriken";          
        }
    }
}

let heroi = new hero("Thomaz", 33, "Guerreiro")
let heroi2 = new hero("Naruto", 23, "Monge")
let ataque = heroi2.atacar()
console.log(`O ${heroi2.typeOfHero} atacou usando ${ataque}`)
console.log(heroi2.typeOfHero)
console.log(heroi.typeOfHero)
