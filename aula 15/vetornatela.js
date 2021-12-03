let valores = [8,1,7,4,2,9]
console.log(valores)
/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos=0; pos<valores.length; pos ++){
    console.log(`a posição ${pos} do vetor tem valor ${valores[pos]}`)
}*/

for(let pos in valores){/*for com 2 elementos para variavel composta. Leia-se para cada posição dentro de valores, mostre o valores pos */
    console.log(`a posição ${pos} do vetor tem o valor ${valores[pos]}`)
}