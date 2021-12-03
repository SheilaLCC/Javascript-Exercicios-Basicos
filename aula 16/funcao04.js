/*Exemplo para calcular o fatorial do numero 5! = 5x4x3x2x1 , ele vai perdendo um numero até chegar no 1, depois multiplica-se todos os numeros e é achado o fatorial*/

function fatorial(n){
    let fat = 1
    for(let c = n; c>1 ;c--){
     fat *=c   
    }
 return fat   
}
console.log(fatorial(5))

