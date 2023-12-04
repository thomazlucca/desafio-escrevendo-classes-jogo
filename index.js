class hero{
	constructor(name, age, typeOfHero){
    	this.name = name;
        this.age = age;
        this.typeOfHero = typeOfHero;
    }
    
    atack(){
      let ataque = ""
    	if (this.typeOfHero === "Mago") {
        	ataque = "magia";
        } else if (this.typeOfHero === "Guerreiro") {
        	ataque = "espada";
        } else if (this.typeOfHero === "Monge") {
        	ataque = "artes marciais";
        } else if (this.typeOfHero === "Ninja") {
        	ataque = "shuriken";          
        } 
      console.log(`O ${this.name} atacou usando ${ataque} `)       
    }
}

let heroiMago = new hero("Merlin", 65, "Mago")
heroiMago.atack()

let heroiGuerreiro = new hero("Kratos", 44, "Guerreiro")
heroiGuerreiro.atack()

let heroiMonge = new hero("Aang", 15, "Monge")
heroiMonge.atack()

let heroiNinja = new hero("Naruto", 18, "Ninja")
heroiNinja.atack()
