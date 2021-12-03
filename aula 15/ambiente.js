/*vetor */
let num = [5,8,2,9,3]
num.sort()/*sort é um metodo que organiza de forma crescente os elementos do vetor */
num.push(1)/*push adiciona o elemento no final do vetor */
console.log(num)/*exibe todos os elementos da forma em que estão armazenados */
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos=num.indexOf(8)/*indexOf()verifica se existe o valor 8 no vetor, se existir ele retorna o indice onde esta, se não ele retorna -1 */
/*console.log(`o valor 8 esta na posição ${num.indexOf(8)}`) este é o mesmo exemplo sem criar uma variavel como foi no caso acima */
if( pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`o valor 8 esta na posição ${num.indexOf(8)}`)
}