function parimpar(n) { /*função parimpar recebera um numero (n) como parametro */
    if(n%2 == 0){ /* se o resto da divisão for igual a 0 é par senão é impar */
    return 'O numero é Par!'
}else{
    return 'O numero é Impar!'
    }   
}
console.log(parimpar(223))/*chamo a funçao, coloco 1 valor qualquer no () para verificar qual condição é verdadeira.Esse valor é o meu parametro real que agora é jogado dentro do parametro formal (n) atraves da chamada.  Agora n passa a valer 223 e o if começa a ser executado. 223 divido por 2  tem resto 1, portanto vai retornar impar. Esse é o retorno que vai ser exibido no console.log  */

/*let res = parimpar(4)/*outro exemplo p/chamar a função, agora criando uma variavel para guardar o resultado. */
//console.log(res)