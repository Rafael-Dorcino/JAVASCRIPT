 let amigo = {nome: 'Rafael',
    sexo: 'M',
    peso: 92.5,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }}
    amigo.engordar(2)
 console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)