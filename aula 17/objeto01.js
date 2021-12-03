/*Introdução a orientação a objeto*/
let amigo = { /*1 crio a variavel dando um nome e abro chaves {} essa é a forma de declarar um objeto-2 o que esta em azul são as propriedades/atributo e o que esta entre aspas é o valor do objeto. Neste exemplo, o ultimo atributo é uma função/metodo*/
 nome:'Jose',
 sexo:'M', 
 peso: 85.4,
 engordar(p=0){
     console.log('Engordou')
     this.peso += p  /*vou fazer esse peso aumentar, this é uma palavra auto referente ao objeto */
 }}
 amigo.engordar(2)/*ele vai engordar 2 kgs,a variavel amigo tem a funcionalidade engordar dentro dela */
 console.log(`${amigo.nome} pesa ${amigo.peso} kgs`)/*exibe o nome interpolado ao peso*/



 
 
 
 